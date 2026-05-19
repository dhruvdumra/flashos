// cli/core/catalog.js
// Catalog fetching for the CLI (no Electron deps).

const https = require('https')

const REMOTE_CATALOG_URL = 'https://raw.githubusercontent.com/dhruvdumra/flashos/main/catalog.json'

/**
 * Fetch the catalog JSON from GitHub.
 * Returns the parsed catalog object on success.
 */
function fetchCatalog(url = REMOTE_CATALOG_URL) {
  return new Promise((resolve, reject) => {
    const requestUrl = url.includes('?') ? `${url}&t=${Date.now()}` : `${url}?t=${Date.now()}`
    https.get(requestUrl, res => {


      const ora = require('ora')

const { fetchCatalog, flatte


  findVersion } = require('./core/catalog')
const { listUsbDrives, platform } = require('./core/usb')
const { listUsbDrives, platform } = require('./core/usb')
const { downloadIso } =
require('./core/download')

const program = new Command()


const program = new Command()

const version = require('../package.json').version || '0.1.0'



.description('Download and flash operating system ISOs to USB drives')
.version(version)
.version(version)

// ── Helpers
────────────────────────────────────────────────────────────────



──────

function logo() {
console.log(chalk.cyan(`
⬡ FlashOS CLI v${version}



function bytesToSize(bytes) {
  if (!bytes) return '?'
  
function bytesToSize(bytes) {
  if (!bytes) return '?'
  return `${n.toFixed(1)} ${units[i]}`
}



/ ── `flashos list` ─────────────────────────────────────────────────────────
program
.command('list')


(windows / linux / other)')
.option('-s, --search ', 'Search 
(windows / linux / other)')
.option('-s, --search ', 'Search by name or version')
.option('--json', 'Output as JSON')
.action(async (opts) => {
const spinner = opts.json ? null : ora('Fetching catalog...').start()


catalog...').start()
try {
const data = await fetchCatalog()
if (spinner) spinner.stop()


const data = await fetchCatalog()
if (spinner) spinner.stop()

let osList = data.catalog
if (opts.category) {
osList = osList.filter(o => o.category === opts.category)
if (opts.search) {
  const q = opts.search.toLowerCase()
  osList = osList.filter(o => {


    (o.editions || []).map(e => e.name + ' ' + (e.versions || []).map(v => v.label).join(' ')).join(' ')
).toLowerCase()
return hay.includes(q)



if (opts.json) {
  console.log(JSON.stringify(os
    return
}

console.log(chalk.bold(`n ${osList.leng
  operating system(s):n`))
for (const os of osList) {
const cat = chalk.gray(`[${os.category}]`)
console.log(` ${chalk.cyan('●')}


console.log(` ${chalk.cyan('●')} ${chalk.bold(os.name)} ${cat}`)
console.log(chalk.gray(` ${os.description}`))
for (const ed of (os.editions || [])) {
for (const v of (ed.versions || [])) {


  halk.yellow(v.id)} ${chalk.gray(`${v.label} · ${v.size}`)}`)
}
halk.yellow(v.id)} ${chalk.gray(`${v.label} · ${v.size}`)}`)
}
if (spinner) spinner.fail(e.message)
else console.error(e.message)
process.exit(1)


})

// ── `flashos drives` ─────────────────────────────


.description('List connected USB drives')
.option('--json', 'Output as JSON')
.action(async (opts) => {
  .description('List connected USB drives')
.option('--json', 'Output as JSON')
.action(async (opts) => {
  if (drives.length === 0) {
    console.log(chalk.yellow('n No USB drives detected.n'))
    return


  }
  console.log(chalk.bold(`n ${drives.length} USB drive(s) connected:n`))
  for (const d of drives) {
  console.log(` ${chalk.cyan('●')}


  for (const d of drives) {
    console.log(` ${chalk.cyan('●')} ${chalk.bold(d.name)}`)
    ${chalk.bold(d.name)}`)
console.log(` ${chalk.gray('Device:')} ${d.device}`)
console.log(` ${chalk.gray('Size: ')} ${d.size || bytesToSize(d.sizeBytes)}`)
console.log()
}


}
})

// ── `flashos download` ─────────────────────────────


.description('Download an ISO without flashing')
.option('-e, --edition ', 'Edition (e.g. desktop, server)')
.option('-V, --release ', 'Version (e.g. 24.04)')
.action(async (osArg, opts) => {
  const spinner = ora('Fetching catalog...').start()
try {
const data = await fetchCatalog()


const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
if (!item) {
console.error(chalk.red(`✗ Could not find ${osArg}${opts.edition ? '/' + opts.edition :


console.error(chalk.red(`✗ Could not find ${osArg}${opts.edition ? '/' + opts.edition : ''}${opts.release ? '/' + opts.re
process.exit(1)
}
console.log(` Downloading
${chalk.bold(item.displayName)} ${chalk.gray(item.label)}n`)
const dlSpinner = ora('Starting


const dlSpinner = ora('Starting download...').start()
const dest = await downloadIso({
url: item.downloadUrl,
filename: item.filename,


if (cached) {
  dlSpinner.succeed(chalk.green('Cache hit — already downloaded'))
  already downloaded'))
return
}
}
dlSpinner.text = `${pct}% ${bytesToSize(downloaded)} / ${bytesToSize(total)} ${speed} KB/s`


}
})
dlSpinner.succeed(chalk.green('Download complete'))
console.log(`n ${chalk.gray('Saved to:')}


complete'))
console.log(`n ${chalk.gray('S
complete'))
console.log(`n ${chalk.gray('Saved to:')} ${dest}n`)
} catch (e) {
  spinner.fail(e.message)
  process.exit(1)
  }


}
})

// ── `flashos flash` ─────────────────────────────


───────────────────────────
program
.command('flash [os]')
.description('Download and flash an ISO to a USB drive')
.option('-e, --edition ', 'Edition (e.g. des
  .option('-V, --release ', 'Version')
.option('-d, --device ', 'USB device (e.g. /dev/sdb or PhysicalDrive3)')
.option('-y, --yes', 'Skip confirmation prompt



action(async (osArg, opts) => {
  logo()
  
  // If no OS specified, run interactive mode
  if (!osArg) return interactiveFlash()


  const data = await fetchCatalog()
spinner.stop()

const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
if (!item) {
  ${osArg}`))
process.exit(1)
}





// Pick drive (provided or interactive)
let drive
if (opts.device) {
const drives = listUsbDrives()


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
console.error(chalk.red('✗ No USB drives detected. Plug one in first.'))
process.exit(1)
}



const { selected } = await inquirer.prompt([{
  type: 'list',
  name: 'selected',
  message: 'Select target USB drive:',
  choices: drives.map(d => ({ name: `${d.name}


  message: 'Select target USB drive:',
choices: drives.map(d => ({ name: `${d.name} ${chalk.gray(`(${d.device}, ${d
  d })),
}])
drive = selected
drive = selected
}

await confirmAndFlash(item, drive, opts.ye



} catch (e) {
  spinner.fail && spinner.fail(e.message)
  console.error(chalk.red('✗ ' + e.message))
  process.exit(1)
  }


  // ── Default action: interactive ────────────────────────────────────────────
  program.action(() => interactiveFlash())

//


───────────────
// Interactive flow
// ──────────────────────────────────────────────────────────


logo()

const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);


  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);

  const spinner = ora('Fetching catalog...').start()
let data
try { data = await fetchCatalog() }
catch (e) { spinner.fail(e.message);
─────────────────────────────────────────────────────────────────────────

───────────────
// Interactive flow
// ──────────────────────────────────────────────────────────
} catch (e) {
  spinner.fail && spinner.fail(e.message)
  console.error(chalk.red('✗ ' + e.message))
  process.exit(1)
  }
const { selected } = await inquirer.prompt([{
  type: 'list',
  name: 'selected',
  message: 'Select target USB drive:',
  choices: drives.map(d => ({ name: `${d.name}

// Pick drive (provided or interactive)
let drive
if (opts.device) {
const drives = listUsbDrives()
action(async (osArg, opts) => {
  logo()
  
  // If no OS specified, run interactive mode
  if (!osArg) return interactiveFlash()

}
})

// ── `flashos flash` ─────────────────────────────

}
})
dlSpinner.succeed(chalk.green('Download complete'))
console.log(`n ${chalk.gray('Saved to:')}

const dlSpinner = ora('Starting download...').start()
const dest = await downloadIso({
url: item.downloadUrl,
filename: item.filename,
spinner.stop()

const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
if (!item) {
console.error(chalk.red(`✗ Could not find ${osArg}${opts.edition ? '/' + opts.edition :

}
})

// ── `flashos download` ─────────────────────────────

  }
  console.log(chalk.bold(`n ${drives.length} USB drive(s) connected:n`))
  for (const d of drives) {
  console.log(` ${chalk.cyan('●')}
}

})

// ── `flashos drives` ─────────────────────────────

console.log(` ${chalk.cyan('●')} ${chalk.bold(os.name)} ${cat}`)
console.log(chalk.gray(` ${os.description}`))
for (const ed of (os.editions || [])) {
for (const v of (ed.versions || [])) {
  const hay = (o.name + ' ' + o.description + '

  (o.editions || []).map(e => e.name + ' ' + (e.versions || []).map(v => v.label).join(' ')).join(' ')
).toLowerCase()
return hay.includes(q)

catalog...').start()
try {
const data = await fetchCatalog()
if (spinner) spinner.stop()
// ── `flashos list`

/ ── `flashos list` ─────────────────────────────────────────────────────────
program
.command('list')
──────

function logo() {
console.log(chalk.cyan(`
⬡ FlashOS CLI v${version}

const program = new Command()

const version = require('../package.json').version || '0.1.0'

      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchCatalog(res.headers.location).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch catalog: HTTP ${res.statusCode}`))
      }
      let body = ''
      res.on('data', chunk => body += chunk)
      res.on('end', () => {
        try {
          const data = JSON.parse(body)
          if (!data.catalog || !Array.isArray(data.catalog)) {
            return reject(new Error('Catalog JSON is invalid'))
          }
          resolve(data)
        } catch (e) {
          reject(new Error('Failed to parse catalog JSON: ' + e.message))
        }
      })
    }).on('error', reject)
  })
}

/**
 * Flatten the catalog into a list of selectable items.
 * Each item has osId/editionId/versionId plus all version details.
 */
function flattenCatalog(catalog) {
  const items = []
  for (const os of catalog) {
    for (const edition of (os.editions || [])) {
      for (const version of (edition.versions || [])) {
        items.push({
          osId: os.id,
          osName: os.name,
          category: os.category,
          color: os.color,
          icon: os.icon,
          description: os.description,
          editionId: edition.id,
          editionName: edition.name,
          badge: edition.badge,
          ...version,
          fullId: `${os.id}/${edition.id}/${version.id}`,
          displayName: `${os.name} ${edition.name}`,
        })
      }
    }
  }
  return items
}

/**
 * Find a specific OS+edition+version by IDs or partial match.
 * Returns the flat item or null if not found / ambiguous.
 */
function findVersion(catalog, osId, editionId, versionId) {
  const items = flattenCatalog(catalog)
  // Exact match by osId / editionId / versionId
  if (osId && editionId && versionId) {
    return items.find(i => i.osId === osId && i.editionId.includes(editionId) && i.id.includes(versionId)) || null
  }
  // Match by osId only
  if (osId && !editionId && !versionId) {
    const matches = items.filter(i => i.osId === osId)
    if (matches.length === 1) return matches[0]
    // Prefer the "latest" or first version
    return matches[0] || null
  }
  // Match by osId + version label substring
  if (osId && versionId) {
    return items.find(i =>
      i.osId === osId &&
      (i.id.includes(versionId) || i.label.toLowerCase().includes(versionId.toLowerCase()))
    ) || null
  }
  return null
}

module.exports = { fetchCatalog, flattenCatalog, findVersion, REMOTE_CATALOG_URL }