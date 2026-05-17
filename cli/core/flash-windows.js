// cli/core/flash-windows.js
// Windows USB flashing using diskpart + robocopy.
// Pure Node.js, no Electron dependencies.

const { spawn, execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function getUsedDriveLetters() {
  const used = new Set()
  try {
    const out = execSync(
      'powershell -NoProfile -Command "Get-PSDrive -PSProvider FileSystem | Select-Object -ExpandProperty Name"',
      { stdio: ['ignore', 'pipe', 'ignore'] }
    ).toString()
    for (const line of out.split(/[\r\n]+/)) {
      const m = line.trim().match(/^([A-Z])$/i)
      if (m) used.add(m[1].toUpperCase())
    }
  } catch (_) {}
  return used
}

function findFreeLetter(used, candidates) {
  for (const l of candidates) {
    if (!used.has(l.toUpperCase())) return l.toUpperCase()
  }
  return null
}

function runDiskpart(scriptPath) {
  return new Promise((resolve, reject) => {
    const proc = spawn('diskpart', ['/s', scriptPath], { shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('data', d => stdout += d.toString())
    proc.stderr?.on('data', d => stderr += d.toString())
    proc.on('close', code => {
      if (code === 0 || code === 1) resolve(stdout)
      else reject(new Error(`Diskpart exit ${code}: ${stderr.trim() || stdout.trim()}`))
    })
    proc.on('error', reject)
  })
}

function runCmd(cmd) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, { shell: true })
    let stdout = '', stderr = ''
    proc.stdout?.on('data', d => stdout += d.toString())
    proc.stderr?.on('data', d => stderr += d.toString())
    proc.on('close', code => code === 0
      ? resolve(stdout)
      : reject(new Error(stderr.trim() || `Exit ${code}`)))
  })
}

function getDirSize(dirPath) {
  let total = 0
  let entries
  try { entries = fs.readdirSync(dirPath, { withFileTypes: true }) }
  catch (_) { return 0 }
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name)
    try {
      if (entry.isDirectory()) total += getDirSize(full)
      else if (entry.isFile()) total += fs.statSync(full).size
    } catch (_) {}
  }
  return total
}

function runRobocopy(src, dest, onProgress) {
  return new Promise((resolve, reject) => {
    let totalSize = 0
    try { totalSize = getDirSize(src) } catch (_) {}

    let lastPct = 0
    const timer = setInterval(() => {
      try {
        const copied = getDirSize(dest)
        if (totalSize > 0 && onProgress) {
          const pct = Math.min(Math.round((copied / totalSize) * 100), 99)
          if (pct !== lastPct) {
            lastPct = pct
            onProgress({ pct, copied, total: totalSize })
          }
        }
      } catch (_) {}
    }, 1000)

    const proc = spawn('robocopy', [
      src, dest, '/E', '/COPY:DAT', '/R:1', '/W:1',
      '/NP', '/NFL', '/NDL', '/NC', '/NJH', '/NJS', '/MT:8',
    ], { shell: false })

    let out = ''
    proc.stdout.on('data', d => out += d.toString())
    proc.on('close', code => {
      clearInterval(timer)
      if (code < 8) {
        if (onProgress) onProgress({ pct: 100, copied: totalSize, total: totalSize })
        resolve()
      } else {
        reject(new Error(`Robocopy failed (exit ${code}): ${out}`))
      }
    })
    proc.on('error', err => { clearInterval(timer); reject(err) })
  })
}

/**
 * Flash an ISO to a USB drive on Windows.
 *
 * @param {object} options
 * @param {string} options.isoPath - Path to the ISO file
 * @param {string} options.device  - Like "\\\\.\\PhysicalDrive3" or "3"
 * @param {string} [options.label] - Volume label (default: FLASHOS)
 * @param {function} options.onProgress - Called with { stage, pct, detail }
 */
async function flashWindows({ isoPath, device, label = 'FLASHOS', onProgress }) {
  const send = (stage, pct, detail) => onProgress && onProgress({ stage, pct, detail })

  const diskNum = device.toString().replace(/[^0-9]/g, '')
  if (!diskNum) throw new Error('Could not extract disk number from ' + device)

  const workDir = path.join(os.tmpdir(), 'flashos-cli-' + Date.now())
  fs.mkdirSync(workDir, { recursive: true })

  const used = getUsedDriveLetters()
  const dataLetter = findFreeLetter(used,
    ['F','G','H','I','J','K','L','M','N','O','P','Q','R','X','Y','Z'])
  if (!dataLetter) throw new Error('No free drive letters available')

  try {
    // Partition with diskpart
    send('partitioning', 5, `Partitioning disk ${diskNum}`)
    const volLabel = label.toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 11) || 'FLASHOS'
    const dpScript = [
      `select disk ${diskNum}`,
      'attributes disk clear readonly',
      'clean',
      'rescan',
      `select disk ${diskNum}`,
      'convert mbr',
      'create partition primary',
      'active',
      `format fs=fat32 quick label="${volLabel}"`,
      `assign letter=${dataLetter}`,
      'exit',
    ].join('\r\n')

    const dpFile = path.join(workDir, 'dp.txt')
    fs.writeFileSync(dpFile, dpScript)
    const dpOut = await runDiskpart(dpFile)
    if (/DiskPart has encountered|Virtual Disk Service error/i.test(dpOut)) {
      throw new Error('Diskpart failed: ' + (dpOut.split('\n').find(l => /error/i.test(l)) || 'unknown'))
    }

    send('formatting', 20, 'Formatted as FAT32')
    await sleep(2500)

    // Mount ISO
    send('mounting', 25, 'Mounting ISO')
    await runCmd(`powershell -NoProfile -Command "Mount-DiskImage -ImagePath '${isoPath}'"`)

    let isoLetter = null
    for (let i = 0; i < 10; i++) {
      await sleep(500)
      try {
        const out = execSync(
          `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' | Get-Volume).DriveLetter"`,
          { stdio: ['ignore', 'pipe', 'ignore'] }
        ).toString().trim()
        if (/^[A-Z]$/i.test(out)) { isoLetter = out.toUpperCase(); break }
      } catch (_) {}
    }
    if (!isoLetter) throw new Error('Could not find mounted ISO letter')

    // Copy
    send('copying', 30, 'Copying files')
    await runRobocopy(`${isoLetter}:\\`, `${dataLetter}:\\`,
      p => send('copying', 30 + Math.round(p.pct * 0.6), `Copying: ${(p.copied/1e9).toFixed(2)} / ${(p.total/1e9).toFixed(2)} GB`)
    )

    // Bootloader
    send('bootloader', 92, 'Installing bootloader')
    try { await runCmd(`bootsect /nt60 ${dataLetter}: /mbr`) } catch (_) {}

    // Cleanup
    send('finishing', 96, 'Finalising')
    await runCmd(`powershell -NoProfile -Command "Dismount-DiskImage -ImagePath '${isoPath}'"`).catch(() => {})

    send('done', 100, 'Complete')
  } finally {
    try { fs.rmSync(workDir, { recursive: true, force: true }) } catch (_) {}
  }
}

module.exports = { flashWindows }