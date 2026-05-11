const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
const { exec, execSync, spawn } = require('child_process')
const os = require('os')

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged
const platform = process.platform  // 'win32' | 'linux' | 'darwin'

// Bundled tools directory — place wimlib-imagex.exe here for Windows
const TOOLS_DIR = isDev
  ? path.join(__dirname, '..', 'tools')
  : path.join(process.resourcesPath, 'tools')

// ─────────────────────────────────────────────────────────────────────────────
// WINDOW
// ─────────────────────────────────────────────────────────────────────────────
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100, height: 700, minWidth: 900, minHeight: 600,
    frame: false, titleBarStyle: 'hidden', backgroundColor: '#0d0d0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, nodeIntegration: false,
    },
  })
  if (isDev) mainWindow.loadURL('http://localhost:5173')
  else mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => { if (platform !== 'darwin') app.quit() })
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow() })

// ─────────────────────────────────────────────────────────────────────────────
// WINDOW CONTROLS
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.on('window-minimize', () => mainWindow.minimize())
ipcMain.on('window-maximize', () => mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize())
ipcMain.on('window-close', () => mainWindow.close())

// ─────────────────────────────────────────────────────────────────────────────
// DETECT FIRMWARE  (UEFI vs BIOS)
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('detect-firmware', async () => {
  try {
    if (platform === 'linux') {
      return { type: fs.existsSync('/sys/firmware/efi') ? 'uefi' : 'bios', confidence: 'high' }
    }
    if (platform === 'win32') {
      try {
        const out = execSync('bcdedit /enum firmware 2>nul').toString()
        if (out.toLowerCase().includes('efi')) return { type: 'uefi', confidence: 'high' }
      } catch (_) {}
      try {
        execSync('reg query HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecureBoot\\State /v UEFISecureBootEnabled 2>nul')
        return { type: 'uefi', confidence: 'medium' }
      } catch (_) {}
      return { type: 'bios', confidence: 'medium' }
    }
    if (platform === 'darwin') return { type: 'uefi', confidence: 'high' }
  } catch (e) {
    return { type: 'unknown', confidence: 'low', error: e.message }
  }
})

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMEND PARTITION SETTINGS
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('recommend-partition-settings', async (event, { osCategory, sizeBytes, firmware }) => {
  const isWindows   = osCategory === 'windows'
  const isLargeIso  = sizeBytes > 4 * 1024 * 1024 * 1024
  const isUefi      = firmware === 'uefi'
  let scheme, target, filesystem, requiresWimSplit = false, notes = []

  if (isUefi) {
    scheme = 'gpt'; target = 'uefi'; filesystem = 'fat32'
    if (isWindows && isLargeIso) {
      requiresWimSplit = true
      notes.push('install.wim will be split automatically using wimlib (FAT32 has a 4 GB file limit).')
    }
    if (isWindows) notes.push('Windows 11 requires GPT + UEFI. Secure Boot supported.')
  } else {
    scheme = 'mbr'; target = 'bios'
    filesystem = isLargeIso ? 'ntfs' : 'fat32'
    if (isLargeIso) notes.push('NTFS used because ISO exceeds 4 GB FAT32 limit. BIOS mode supports NTFS.')
  }

  return { scheme, target, filesystem, requiresWimSplit, notes }
})

// ─────────────────────────────────────────────────────────────────────────────
// DOWNLOAD ISO
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('download-iso', async (event, { url, filename }) => {
  const downloadsDir = path.join(os.homedir(), 'Downloads', 'FlashOS')
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true })
  const filePath = path.join(downloadsDir, filename)

  // Skip download if file already exists and is > 1 MB
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1024 * 1024) {
    event.sender.send('download-progress', { pct: 100, cached: true, filename })
    return filePath
  }

  return new Promise((resolve, reject) => {
    function doDownload(targetUrl) {
      const proto = targetUrl.startsWith('https') ? https : http
      const file = fs.createWriteStream(filePath)
      proto.get(targetUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close(); return doDownload(res.headers.location)
        }
        if (res.statusCode !== 200) {
          file.close(); return reject(new Error(`HTTP ${res.statusCode}`))
        }
        const total = parseInt(res.headers['content-length'], 10) || 0
        let downloaded = 0
        res.on('data', (chunk) => {
          downloaded += chunk.length; file.write(chunk)
          event.sender.send('download-progress', {
            pct: total ? Math.round((downloaded / total) * 100) : 0,
            downloaded, total, filename,
          })
        })
        res.on('end',   () => { file.end(); resolve(filePath) })
        res.on('error', (e) => { file.close(); reject(e) })
      }).on('error', reject)
    }
    doDownload(url)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// GET USB DRIVES
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('get-usb-drives', async () => {
  try {
    if (platform === 'win32') {
      const out = execSync('wmic diskdrive where "MediaType=\'Removable Media\'" get DeviceID,Size,Model /format:csv 2>nul').toString()
      const lines = out.trim().split('\n').filter(l => l.includes(',') && !l.startsWith('Node'))
      return lines.map(l => {
        const p = l.split(',')
        const device = p[1]?.trim(), model = p[2]?.trim() || 'USB Drive', size = parseInt(p[3]?.trim() || '0')
        if (!device) return null
        return { device, name: model, size: size ? (size / 1e9).toFixed(1) + ' GB' : 'Unknown', sizeBytes: size }
      }).filter(Boolean)
    }

    if (platform === 'linux') {
      const out = execSync('lsblk -J -b -o NAME,SIZE,TYPE,TRAN,VENDOR,MODEL,HOTPLUG,RM').toString()
      const json = JSON.parse(out)
      return json.blockdevices
        .filter(d => d.type === 'disk' && (d.tran === 'usb' || d.rm === '1' || d.hotplug === '1'))
        .map(d => ({
          device: `/dev/${d.name}`,
          name: [d.vendor, d.model].filter(Boolean).map(s => s.trim()).join(' ') || 'USB Drive',
          size: d.size ? (d.size / 1e9).toFixed(1) + ' GB' : 'Unknown',
          sizeBytes: parseInt(d.size || 0),
        }))
    }

    if (platform === 'darwin') {
      const out = execSync('diskutil list -plist external physical').toString()
      const matches = [...out.matchAll(/<string>(\/dev\/disk\d+)<\/string>/g)]
      return matches.map(m => {
        const dev = m[1]
        let size = 'Unknown'
        try {
          const info = execSync(`diskutil info ${dev} | grep "Disk Size"`).toString()
          const sm = info.match(/[\d.]+ GB/); if (sm) size = sm[0]
        } catch (_) {}
        return { device: dev, name: 'External USB', size }
      })
    }
  } catch (e) { console.error('get-usb-drives:', e.message); return [] }
  return []
})

// ─────────────────────────────────────────────────────────────────────────────
// FLASH ISO  —  main entry point
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('flash-iso', async (event, opts) => {
  const send = (stage, pct, detail = '') => event.sender.send('flash-progress', { stage, pct, detail })
  try {
    if      (platform === 'linux')  await flashLinux(opts, send)
    else if (platform === 'win32')  await flashWindows(opts, send)
    else if (platform === 'darwin') await flashMac(opts, send)
    return { success: true }
  } catch (e) { throw new Error(e.message || 'Flash failed') }
})

// ─────────────────────────────────────────────────────────────────────────────
// LINUX  —  pkexec shell script pipeline
// ─────────────────────────────────────────────────────────────────────────────
async function flashLinux({ isoPath, device, scheme, filesystem, requiresWimSplit }, send) {
  const workDir = path.join(os.tmpdir(), 'flashos-work')
  const mountIso = path.join(workDir, 'iso'); const mountUsb = path.join(workDir, 'usb')
  fs.mkdirSync(mountIso, { recursive: true }); fs.mkdirSync(mountUsb, { recursive: true })

  const partCmds = scheme === 'gpt' ? `
    parted -s "${device}" mklabel gpt
    parted -s "${device}" mkpart EFI fat32 1MiB 200MiB
    parted -s "${device}" set 1 esp on
    parted -s "${device}" mkpart primary ${filesystem === 'ntfs' ? 'ntfs' : 'fat32'} 200MiB 100%
    EFI_PART="${device}1"; DATA_PART="${device}2"
    mkfs.fat -F 32 "$EFI_PART" -n "EFI"
  ` : `
    parted -s "${device}" mklabel msdos
    parted -s "${device}" mkpart primary ${filesystem === 'ntfs' ? 'ntfs' : 'fat32'} 1MiB 100%
    parted -s "${device}" set 1 boot on
    DATA_PART="${device}1"
  `

  const fmtCmd = filesystem === 'ntfs'
    ? `mkfs.ntfs -f "$DATA_PART" -L "FlashOS"`
    : `mkfs.fat -F 32 "$DATA_PART" -n "FlashOS"`

  const wimCmd = requiresWimSplit ? `
    if command -v wimsplit &>/dev/null; then
      echo "SPLITTING_WIM"
      wimsplit "${mountUsb}/sources/install.wim" "${mountUsb}/sources/install.swm" 3800
      rm "${mountUsb}/sources/install.wim"
    else
      echo "ERROR: wimtools not installed. Run: sudo apt install wimtools" >&2; exit 1
    fi
  ` : ''

  const efiBootCmd = scheme === 'gpt' ? `
    EFI_MNT="${workDir}/efi"
    mkdir -p "$EFI_MNT"
    mount "$EFI_PART" "$EFI_MNT"
    mkdir -p "$EFI_MNT/EFI/BOOT"
    cp -r "${mountUsb}/EFI/"* "$EFI_MNT/EFI/" 2>/dev/null || true
    umount "$EFI_MNT"
  ` : `
    if command -v syslinux &>/dev/null; then
      syslinux --install "$DATA_PART"
      dd if=/usr/lib/syslinux/mbr/mbr.bin of="${device}" bs=440 count=1 conv=notrunc 2>/dev/null || true
    fi
  `

  const script = `#!/bin/bash
set -e
echo "STEP_PARTITION"
umount "${device}"* 2>/dev/null || true
sleep 1
${partCmds}
echo "STEP_FORMAT"
${fmtCmd}
echo "STEP_MOUNT"
mount -o loop,ro "${isoPath}" "${mountIso}"
mount "$DATA_PART" "${mountUsb}"
echo "STEP_COPY"
rsync -a --info=progress2 "${mountIso}/" "${mountUsb}/"
${wimCmd}
echo "STEP_BOOTLOADER"
${efiBootCmd}
echo "STEP_SYNC"
sync
umount "${mountIso}" 2>/dev/null || true
umount "${mountUsb}" 2>/dev/null || true
echo "STEP_DONE"
`
  const scriptPath = path.join(workDir, 'flash.sh')
  fs.writeFileSync(scriptPath, script, { mode: 0o755 })

  return new Promise((resolve, reject) => {
    const proc = spawn('pkexec', ['bash', scriptPath], { stdio: ['ignore', 'pipe', 'pipe'] })

    proc.stdout.on('data', (d) => {
      for (const line of d.toString().split('\n')) {
        const l = line.trim()
        if (l === 'STEP_PARTITION')  send('partitioning',  8,  `Partitioning ${device} as ${scheme.toUpperCase()}...`)
        if (l === 'STEP_FORMAT')     send('formatting',    15, `Formatting as ${filesystem.toUpperCase()}...`)
        if (l === 'STEP_MOUNT')      send('mounting',      20, 'Mounting ISO...')
        if (l === 'STEP_COPY')       send('copying',       25, 'Copying files...')
        if (l === 'SPLITTING_WIM')   send('splitting',     72, 'Splitting install.wim for FAT32...')
        if (l === 'STEP_BOOTLOADER') send('bootloader',    88, 'Installing bootloader...')
        if (l === 'STEP_SYNC')       send('syncing',       95, 'Flushing to disk...')
        if (l === 'STEP_DONE')       send('done',         100, 'Complete!')
        // rsync progress: "  1.23G  45%  ..."
        const pct = l.match(/\s(\d+)%/)
        if (pct) send('copying', Math.round(25 + parseInt(pct[1]) * 0.45), `Copying: ${pct[1]}%`)
      }
    })

    proc.stderr.on('data', d => console.error('[flash-err]', d.toString()))

    proc.on('close', (code) => {
      try { fs.rmSync(workDir, { recursive: true, force: true }) } catch (_) {}
      code === 0 ? resolve() : reject(new Error(`Flash script failed (exit ${code})`))
    })
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// WINDOWS  —  diskpart + robocopy + wimlib + bcdboot
// ─────────────────────────────────────────────────────────────────────────────
async function flashWindows({ isoPath, device, scheme, filesystem, requiresWimSplit }, send) {
  // device = "\\.\PhysicalDrive1" — extract disk number
  const diskNum = device.replace(/[^0-9]/g, '')
  const workDir = path.join(os.tmpdir(), 'flashos-work')
  fs.mkdirSync(workDir, { recursive: true })

  // ── Find free drive letters ────────────────────────────────────────────
  const usedLetters = getUsedDriveLetters()
  const dataLetter  = findFreeLetter(usedLetters, ['F', 'G', 'H', 'I', 'J', 'K'])
  const efiLetter   = scheme === 'gpt' ? findFreeLetter(usedLetters, ['S', 'T', 'U', 'V', 'W'], [dataLetter]) : null
  if (!dataLetter) throw new Error('No free drive letters available for USB data partition.')
  if (scheme === 'gpt' && !efiLetter) throw new Error('No free drive letters available for EFI partition.')

  // ── Partition ──────────────────────────────────────────────────────────
  send('partitioning', 5, 'Creating partition table...')
  const dpScript = scheme === 'gpt'
    ? [
        `select disk ${diskNum}`,
        'clean',
        'convert gpt',
        'create partition efi size=200',
        'format fs=fat32 quick label="EFI"',
        `assign letter=${efiLetter}`,
        'create partition primary',
        `format fs=${filesystem} quick label="FlashOS"`,
        `assign letter=${dataLetter}`,
        'exit',
      ].join('\r\n')
    : [
        `select disk ${diskNum}`,
        'clean',
        'convert mbr',
        'create partition primary',
        'active',
        `format fs=${filesystem} quick label="FlashOS"`,
        `assign letter=${dataLetter}`,
        'exit',
      ].join('\r\n')

  const dpFile = path.join(workDir, 'dp.txt')
  fs.writeFileSync(dpFile, dpScript)

  // ✅ FIX: use spawn with shell:false so path is never reparsed by cmd.exe
  await runSpawn('diskpart', ['/s', dpFile])
  send('formatting', 18, `Formatted ${filesystem.toUpperCase()}`)

  // ── Mount ISO ──────────────────────────────────────────────────────────
  send('mounting', 22, 'Mounting ISO...')
  await runCmd(`powershell -Command "Mount-DiskImage -ImagePath '${isoPath}'"`)
  let isoLetter = 'D'
  try {
    const out = execSync(`powershell -Command "(Get-DiskImage -ImagePath '${isoPath}' | Get-Volume).DriveLetter"`).toString().trim()
    if (/^[A-Z]$/i.test(out)) isoLetter = out.toUpperCase()
  } catch (_) {}

  // ── Copy files ─────────────────────────────────────────────────────────
  send('copying', 25, 'Copying files...')
  await runCmdProgress(
    `robocopy ${isoLetter}:\\ ${dataLetter}:\\ /E /NP /NFL /NDL /MT:8`,
    send, 25, 70, 'copying'
  )

  // ── Split install.wim ──────────────────────────────────────────────────
  if (requiresWimSplit && filesystem === 'fat32') {
    send('splitting', 72, 'Splitting install.wim...')
    const wimlibExe = path.join(TOOLS_DIR, 'windows', 'wimlib-imagex.exe')
    if (!fs.existsSync(wimlibExe)) throw new Error('wimlib-imagex.exe missing. See README → tools/windows/')
    await runSpawn(wimlibExe, [
      'split',
      `${dataLetter}:\\sources\\install.wim`,
      `${dataLetter}:\\sources\\install.swm`,
      '3800',
    ])
    try { fs.unlinkSync(`${dataLetter}:\\sources\\install.wim`) } catch (_) {}
  }

  // ── Bootloader ─────────────────────────────────────────────────────────
  send('bootloader', 88, 'Installing bootloader...')
  if (scheme === 'gpt') {
    await runSpawn('bcdboot', [`${isoLetter}:\\Windows`, '/s', `${efiLetter}:`, '/f', 'UEFI'])
      .catch(e => console.warn('bcdboot:', e.message))
  } else {
    await runCmd(`bootsect /nt60 ${dataLetter}: /mbr`)
      .catch(e => console.warn('bootsect:', e.message))
  }

  // ── Unmount ISO ────────────────────────────────────────────────────────
  send('syncing', 96, 'Finalising...')
  await runCmd(`powershell -Command "Dismount-DiskImage -ImagePath '${isoPath}'"`)
  try { fs.rmSync(workDir, { recursive: true, force: true }) } catch (_) {}
  send('done', 100, 'Complete!')
}

// ─────────────────────────────────────────────────────────────────────────────
// macOS  —  dd to raw device (simplest + fastest)
// ─────────────────────────────────────────────────────────────────────────────
async function flashMac({ isoPath, device }, send) {
  execSync(`diskutil unmountDisk "${device}"`)
  send('copying', 10, 'Writing ISO... (this takes a while)')

  const raw = device.replace('/dev/disk', '/dev/rdisk')

  return new Promise((resolve, reject) => {
    const proc = spawn('dd', [`if=${isoPath}`, `of=${raw}`, 'bs=4m', 'conv=sync'])
    let pct = 10
    const ticker = setInterval(() => { pct = Math.min(pct + 1, 90); send('copying', pct, 'Writing...') }, 4000)

    proc.on('close', (code) => {
      clearInterval(ticker)
      if (code === 0) {
        execSync(`diskutil eject "${device}"`)
        send('done', 100, 'Complete! Safe to remove USB.')
        resolve()
      } else {
        reject(new Error(`dd exited ${code}`))
      }
    })
    proc.stderr.on('data', d => console.log('[dd]', d.toString().trim()))
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Shell-free spawn — avoids cmd.exe argument reparsing (fixes diskpart /s bug) */
function runSpawn(exe, args = []) {
  return new Promise((resolve, reject) => {
    const proc = spawn(exe, args, { shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('data', d => { stdout += d.toString() })
    proc.stderr?.on('data', d => { stderr += d.toString() })
    proc.on('close', code =>
      code === 0
        ? resolve(stdout)
        : reject(new Error(stderr.trim() || `${exe} exited with code ${code}`))
    )
  })
}

/** General exec helper for commands that are safe to run through the shell */
function runCmd(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message))
      else resolve(stdout)
    })
  })
}

function runCmdProgress(cmd, send, fromPct, toPct, stage) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd.split(' ')[0], cmd.split(' ').slice(1), { shell: true })
    proc.stdout.on('data', d => {
      const m = d.toString().match(/(\d+)%/)
      if (m) send(stage, Math.round(fromPct + parseInt(m[1]) / 100 * (toPct - fromPct)), `${m[1]}% copied`)
    })
    // robocopy exit codes < 8 = success
    proc.on('close', code => (code < 8 ? resolve() : reject(new Error(`Exit ${code}: ${cmd}`))))
  })
}

/** Returns a Set of currently used drive letters on Windows */
function getUsedDriveLetters() {
  try {
    const out = execSync('wmic logicaldisk get DeviceID /format:csv 2>nul').toString()
    const letters = new Set()
    for (const line of out.split('\n')) {
      const m = line.trim().match(/^[^,]*,([A-Z]):/i)
      if (m) letters.add(m[1].toUpperCase())
    }
    return letters
  } catch (_) {
    return new Set()
  }
}

/** Finds the first letter from candidates not in usedLetters or excluded list */
function findFreeLetter(usedLetters, candidates, exclude = []) {
  const blocked = new Set([...usedLetters, ...exclude.map(l => l.toUpperCase())])
  return candidates.find(l => !blocked.has(l.toUpperCase())) || null
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK TOOLS  —  tells the UI which deps are missing
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('check-tools', async () => {
  const ok  = (cmd) => { try { execSync(`which ${cmd} 2>/dev/null`); return true } catch (_) { return false } }
  const res = {}
  if (platform === 'linux') {
    for (const t of ['parted', 'mkfs.fat', 'mkfs.ntfs', 'rsync', 'wimsplit', 'syslinux', 'pkexec'])
      res[t] = ok(t)
  }
  if (platform === 'win32') {
    res['wimlib']   = fs.existsSync(path.join(TOOLS_DIR, 'windows', 'wimlib-imagex.exe'))
    res['diskpart'] = true
    res['robocopy'] = true
    res['bcdboot']  = true
  }
  return res
})

ipcMain.handle('open-folder', async (_, filePath) => shell.showItemInFolder(filePath))
ipcMain.handle('get-platform', () => platform)



