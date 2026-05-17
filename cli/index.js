#!/usr/bin/env node
// cli/index.js
// FlashOS command-line interface.

const { Command } = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const ora = require('ora')

const { fetchCatalog, flattenCatalog, findVersion } = require('./core/catalog')
const { listUsbDrives, platform } = require('./core/usb')
const { downloadIso } = require('./core/download')

const program = new Command()

const version = require('../package.json').version || '0.1.0'

program
  .name('flashos')
  .description('Download and flash operating system ISOs to USB drives')
  .version(version)

// ── Helpers ────────────────────────────────────────────────────────────────

function logo() {
  console.log(chalk.cyan(`
   ⬡  FlashOS CLI v${version}
      Cross-platform OS flasher
`))
}

function bytesToSize(bytes) {
  if (!bytes) return '?'
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let n = bytes
  let i = 0
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++ }
  return `${n.toFixed(1)} ${units[i]}`
}

// ── `flashos list` ─────────────────────────────────────────────────────────
program
  .command('list')
  .description('List all available operating systems')
  .option('-c, --category <cat>', 'Filter by category (windows / linux / other)')
  .option('-s, --search <term>',  'Search by name or version')
  .option('--json', 'Output as JSON')
  .action(async (opts) => {
    const spinner = opts.json ? null : ora('Fetching catalog...').start()
    try {
      const data = await fetchCatalog()
      if (spinner) spinner.stop()

      let osList = data.catalog
      if (opts.category) {
        osList = osList.filter(o => o.category === opts.category)
      }
      if (opts.search) {
        const q = opts.search.toLowerCase()
        osList = osList.filter(o => {
          const hay = (o.name + ' ' + o.description + ' ' +
                       (o.editions || []).map(e => e.name + ' ' + (e.versions || []).map(v => v.label).join(' ')).join(' ')
          ).toLowerCase()
          return hay.includes(q)
        })
      }

      if (opts.json) {
        console.log(JSON.stringify(osList, null, 2))
        return
      }

      console.log(chalk.bold(`\n  ${osList.length} operating system(s):\n`))
      for (const os of osList) {
        const cat = chalk.gray(`[${os.category}]`)
        console.log(`  ${chalk.cyan('●')} ${chalk.bold(os.name)} ${cat}`)
        console.log(chalk.gray(`     ${os.description}`))
        for (const ed of (os.editions || [])) {
          for (const v of (ed.versions || [])) {
            console.log(`     ${chalk.dim('└─')} ${chalk.yellow(os.id)}/${chalk.yellow(ed.id)}/${chalk.yellow(v.id)}  ${chalk.gray(`${v.label} · ${v.size}`)}`)
          }
        }
        console.log()
      }
    } catch (e) {
      if (spinner) spinner.fail(e.message)
      else console.error(e.message)
      process.exit(1)
    }
  })

// ── `flashos drives` ───────────────────────────────────────────────────────
program
  .command('drives')
  .description('List connected USB drives')
  .option('--json', 'Output as JSON')
  .action(async (opts) => {
    const drives = listUsbDrives()
    if (opts.json) {
      console.log(JSON.stringify(drives, null, 2))
      return
    }
    if (drives.length === 0) {
      console.log(chalk.yellow('\n  No USB drives detected.\n'))
      return
    }
    console.log(chalk.bold(`\n  ${drives.length} USB drive(s) connected:\n`))
    for (const d of drives) {
      console.log(`  ${chalk.cyan('●')} ${chalk.bold(d.name)}`)
      console.log(`     ${chalk.gray('Device:')} ${d.device}`)
      console.log(`     ${chalk.gray('Size:  ')} ${d.size || bytesToSize(d.sizeBytes)}`)
      console.log()
    }
  })

// ── `flashos download` ─────────────────────────────────────────────────────
program
  .command('download <os>')
  .description('Download an ISO without flashing')
  .option('-e, --edition <name>', 'Edition (e.g. desktop, server)')
  .option('-V, --release <ver>',  'Version (e.g. 24.04)')
  .action(async (osArg, opts) => {
    logo()
    const spinner = ora('Fetching catalog...').start()
    try {
      const data = await fetchCatalog()
      spinner.stop()
      const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
      if (!item) {
        console.error(chalk.red(`✗ Could not find ${osArg}${opts.edition ? '/' + opts.edition : ''}${opts.release ? '/' + opts.release : ''}`))
        process.exit(1)
      }
      console.log(`  Downloading ${chalk.bold(item.displayName)} ${chalk.gray(item.label)}\n`)
      const dlSpinner = ora('Starting download...').start()
      const dest = await downloadIso({
        url: item.downloadUrl,
        filename: item.filename,
        onProgress: ({ pct, downloaded, total, speed, cached }) => {
          if (cached) {
            dlSpinner.succeed(chalk.green('Cache hit — already downloaded'))
            return
          }
          dlSpinner.text = `${pct}%  ${bytesToSize(downloaded)} / ${bytesToSize(total)}  ${speed} KB/s`
        }
      })
      dlSpinner.succeed(chalk.green('Download complete'))
      console.log(`\n  ${chalk.gray('Saved to:')} ${dest}\n`)
    } catch (e) {
      spinner.fail(e.message)
      process.exit(1)
    }
  })

// ── `flashos flash` ────────────────────────────────────────────────────────
program
  .command('flash [os]')
  .description('Download and flash an ISO to a USB drive')
  .option('-e, --edition <name>', 'Edition (e.g. desktop, server)')
  .option('-V, --release <ver>',  'Version')
  .option('-d, --device <path>',  'USB device (e.g. /dev/sdb or PhysicalDrive3)')
  .option('-y, --yes',            'Skip confirmation prompts')
  .action(async (osArg, opts) => {
    logo()

    // If no OS specified, run interactive mode
    if (!osArg) return interactiveFlash()

    const spinner = ora('Fetching catalog...').start()
    try {
      const data = await fetchCatalog()
      spinner.stop()

      const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
      if (!item) {
        console.error(chalk.red(`✗ Could not find ${osArg}`))
        process.exit(1)
      }

      // Pick drive (provided or interactive)
      let drive
      if (opts.device) {
        const drives = listUsbDrives()
        drive = drives.find(d => d.device === opts.device || d.device.includes(opts.device))
        if (!drive) {
          console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
          process.exit(1)
        }
      } else {
        const drives = listUsbDrives()
        if (drives.length === 0) {
          console.error(chalk.red('✗ No USB drives detected. Plug one in first.'))
          process.exit(1)
        }
        const { selected } = await inquirer.prompt([{
          type: 'list',
          name: 'selected',
          message: 'Select target USB drive:',
          choices: drives.map(d => ({ name: `${d.name}  ${chalk.gray(`(${d.device}, ${d.size})`)}`, value: d })),
        }])
        drive = selected
      }

      await confirmAndFlash(item, drive, opts.yes)
    } catch (e) {
      spinner.fail && spinner.fail(e.message)
      console.error(chalk.red('✗ ' + e.message))
      process.exit(1)
    }
  })

// ── Default action: interactive ────────────────────────────────────────────
program.action(() => interactiveFlash())

// ─────────────────────────────────────────────────────────────────────────
// Interactive flow
// ─────────────────────────────────────────────────────────────────────────

async function interactiveFlash() {
  logo()

  const spinner = ora('Fetching catalog...').start()
  let data
  try { data = await fetchCatalog() }
  catch (e) { spinner.fail(e.message); process.exit(1) }
  spinner.stop()

  // Step 1: Pick category
  const { cat } = await inquirer.prompt([{
    type: 'list', name: 'cat',
    message: 'What kind of operating system?',
    choices: [
      { name: 'Linux',          value: 'linux' },
      { name: 'Windows',        value: 'windows' },
      { name: 'Other (BSDs, Haiku, ReactOS...)', value: 'other' },
      { name: 'Show all',       value: 'all' },
    ],
  }])

  const filtered = cat === 'all' ? data.catalog : data.catalog.filter(o => o.category === cat)

  // Step 2: Pick OS
  const { os } = await inquirer.prompt([{
    type: 'list', name: 'os',
    message: 'Pick an operating system:',
    pageSize: 15,
    choices: filtered.map(o => ({ name: `${o.name}  ${chalk.gray(`— ${o.description}`)}`, value: o })),
  }])

  // Step 3: Pick edition
  let edition
  if (os.editions.length === 1) {
    edition = os.editions[0]
  } else {
    const { selected } = await inquirer.prompt([{
      type: 'list', name: 'selected',
      message: 'Pick an edition:',
      choices: os.editions.map(e => ({ name: `${e.name}  ${chalk.gray(`(${e.badge})`)}`, value: e })),
    }])
    edition = selected
  }

  // Step 4: Pick version
  let version
  if (edition.versions.length === 1) {
    version = edition.versions[0]
  } else {
    const { selected } = await inquirer.prompt([{
      type: 'list', name: 'selected',
      message: 'Pick a version:',
      choices: edition.versions.map(v => ({ name: `${v.label}  ${chalk.gray(`(${v.size}, ${v.arch})`)}`, value: v })),
    }])
    version = selected
  }

  // Step 5: Pick drive
  const drives = listUsbDrives()
  if (drives.length === 0) {
    console.error(chalk.red('\n✗ No USB drives detected. Plug one in and try again.'))
    process.exit(1)
  }
  const { drive } = await inquirer.prompt([{
    type: 'list', name: 'drive',
    message: 'Select target USB drive:',
    choices: drives.map(d => ({ name: `${d.name}  ${chalk.gray(`(${d.device}, ${d.size})`)}`, value: d })),
  }])

  // Build the flat item
  const item = {
    osId: os.id, osName: os.name, displayName: `${os.name} ${edition.name}`,
    editionId: edition.id, editionName: edition.name, badge: edition.badge,
    category: os.category,
    ...version,
  }

  await confirmAndFlash(item, drive, false)
}

async function confirmAndFlash(item, drive, skipConfirm) {
  console.log(chalk.bold('\n  Review:'))
  console.log(`  ${chalk.gray('OS:    ')} ${item.displayName}`)
  console.log(`  ${chalk.gray('Ver:   ')} ${item.label} (${item.arch}, ${item.size})`)
  console.log(`  ${chalk.gray('Drive: ')} ${drive.name} ${chalk.dim('(' + drive.device + ', ' + drive.size + ')')}`)
  console.log()
  console.log(chalk.yellow.bold(`  ⚠ All data on ${drive.name} will be permanently erased.\n`))

  if (!skipConfirm) {
    const { confirm } = await inquirer.prompt([{
      type: 'confirm', name: 'confirm',
      message: 'Proceed with flash?',
      default: false,
    }])
    if (!confirm) {
      console.log(chalk.gray('Cancelled.'))
      return
    }
  }

  // Download
  const dlSpinner = ora('Downloading ISO...').start()
  let isoPath
  try {
    isoPath = await downloadIso({
      url: item.downloadUrl,
      filename: item.filename,
      onProgress: ({ pct, downloaded, total, speed, cached }) => {
        if (cached) {
          dlSpinner.succeed(chalk.green('Cache hit — using existing ISO'))
          return
        }
        dlSpinner.text = `Downloading: ${pct}%  ${bytesToSize(downloaded)} / ${bytesToSize(total)}  ${speed} KB/s`
      }
    })
    if (dlSpinner.isSpinning) dlSpinner.succeed('Download complete')
  } catch (e) {
    dlSpinner.fail('Download failed: ' + e.message)
    process.exit(1)
  }

  // Flash
  const flashSpinner = ora('Preparing flash...').start()
  try {
    if (platform === 'win32') {
      const { flashWindows } = require('./core/flash-windows')
      await flashWindows({
        isoPath, device: drive.device,
        onProgress: ({ stage, pct, detail }) => {
          flashSpinner.text = `${stage}  ${pct}%  ${detail || ''}`
        }
      })
    } else if (platform === 'linux') {
      const { flashLinux } = require('./core/flash-linux')
      await flashLinux({
        isoPath, device: drive.device,
        onProgress: ({ stage, pct, detail }) => {
          flashSpinner.text = `${stage}  ${pct}%  ${detail || ''}`
        }
      })
    } else {
      throw new Error(`Flashing on ${platform} is not yet supported in the CLI`)
    }
    flashSpinner.succeed(chalk.green('Flash complete! USB is ready to boot.'))
  } catch (e) {
    flashSpinner.fail('Flash failed: ' + e.message)
    process.exit(1)
  }
}

program.parseAsync(process.argv)