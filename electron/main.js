const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
const { exec, execSync, spawn } = require('child_process')
const os = require('os')

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged
const platform = process.platform  // 'win32' | 'linux' | 'darwin'

// Bundled tools directory. Place wimlib-imagex.exe here for Windows.
const TOOLS_DIR = isDev
  ? path.join(__dirname, '..', 'tools')
  : path.join(process.resourcesPath, 'tools')

// ─────────────────────────────────────────────────────────────────────────────
// WINDOW
// ─────────────────────────────────────────────────────────────────────────────
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1150, height: 720, minWidth: 950, minHeight: 620,
    frame: false, titleBarStyle: 'hidden', backgroundColor: '#0d0d0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
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
ipcMain.on('window-minimize', () => mainWindow?.minimize())
ipcMain.on('window-maximize', () => {
  if (!mainWindow) return
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
})
ipcMain.on('window-close', () => mainWindow?.close())

// ─────────────────────────────────────────────────────────────────────────────
// DETECT FIRMWARE (UEFI vs BIOS)
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('detect-firmware', async () => {
  try {
    if (platform === 'linux') {
      return {
        type: fs.existsSync('/sys/firmware/efi') ? 'uefi' : 'bios',
        confidence: 'high',
      }
    }
    if (platform === 'win32') {
      try {
        const out = execSync('bcdedit /enum {bootmgr}', { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
        if (/\.efi/i.test(out) || /efi/i.test(out)) return { type: 'uefi', confidence: 'high' }
        if (/winload\.exe/i.test(out))              return { type: 'bios', confidence: 'high' }
      } catch (_) {}
      // Fallback: SecureBoot key only exists on UEFI systems
      try {
        execSync('reg query HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecureBoot\\State', { stdio: ['ignore', 'pipe', 'ignore'] })
        return { type: 'uefi', confidence: 'medium' }
      } catch (_) {}
      return { type: 'bios', confidence: 'low' }
    }
    if (platform === 'darwin') return { type: 'uefi', confidence: 'high' }
  } catch (e) {
    return { type: 'unknown', confidence: 'low', error: e.message }
  }
  return { type: 'unknown', confidence: 'low' }
})

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMEND PARTITION SETTINGS
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('recommend-partition-settings', async (_event, { osCategory, sizeBytes, firmware }) => {
  const isWindows  = osCategory === 'windows'
  const isLargeIso = (sizeBytes || 0) > 4 * 1024 * 1024 * 1024
  const isUefi     = firmware === 'uefi'

  let scheme, target, filesystem
  let requiresWimSplit = false
  const notes = []

  // Note for Windows host: USB sticks are treated as removable media and only
  // expose the first partition. We use a single bootable FAT32 partition that
  // works for both UEFI and BIOS boot. This is the same approach Rufus uses.
  if (platform === 'win32') {
    scheme = 'mbr'        // single MBR partition, active, bootable
    target = isUefi ? 'uefi' : 'bios'
    filesystem = 'fat32'  // FAT32 works for both UEFI and BIOS boot
    if (isWindows && isLargeIso) {
      requiresWimSplit = true
      notes.push('install.wim will be split using wimlib because FAT32 has a 4 GB file size limit.')
    }
    notes.push('Single bootable FAT32 partition (works for both UEFI and BIOS).')
    return { scheme, target, filesystem, requiresWimSplit, notes }
  }

  // Linux/Mac host — can use proper GPT with separate EFI partition
  if (isUefi) {
    scheme = 'gpt'
    target = 'uefi'
    filesystem = 'fat32'
    if (isWindows && isLargeIso) {
      requiresWimSplit = true
      notes.push('install.wim will be split automatically using wimlib (FAT32 has a 4 GB file size limit).')
    }
    if (isWindows) notes.push('Windows 11 requires GPT and UEFI. Secure Boot is supported with this setup.')
  } else {
    scheme = 'mbr'
    target = 'bios'
    filesystem = isLargeIso ? 'ntfs' : 'fat32'
    if (isLargeIso) notes.push('NTFS used because the ISO is larger than 4 GB. BIOS mode supports booting from NTFS.')
  }

  return { scheme, target, filesystem, requiresWimSplit, notes }
})

// ─────────────────────────────────────────────────────────────────────────────
// DOWNLOAD ISO
// ─────────────────────────────────────────────────────────────────────────────

/** Get expected file size from server via HEAD request (follows redirects). */
function getRemoteSize(url, redirectsLeft = 5) {
  return new Promise((resolve) => {
    try {
      const proto = url.startsWith('https') ? https : http
      const req = proto.request(url, { method: 'HEAD' }, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          if (redirectsLeft <= 0) return resolve(0)
          return resolve(getRemoteSize(res.headers.location, redirectsLeft - 1))
        }
        if (res.statusCode === 200) {
          resolve(parseInt(res.headers['content-length'], 10) || 0)
        } else {
          resolve(0)
        }
      })
      req.on('error', () => resolve(0))
      req.setTimeout(5000, () => { req.destroy(); resolve(0) })
      req.end()
    } catch (_) { resolve(0) }
  })
}

ipcMain.handle('download-iso', async (event, { url, filename }) => {
  const downloadsDir = path.join(os.homedir(), 'Downloads', 'FlashOS')
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true })
  const filePath = path.join(downloadsDir, filename)

  // ── Check cache properly ─────────────────────────────────────────────
  // Compare local file size against server's reported size.
  // If they match, the download is complete and we can skip.
  if (fs.existsSync(filePath)) {
    const localSize = fs.statSync(filePath).size
    const remoteSize = await getRemoteSize(url)

    console.log(`[download] Local: ${localSize}, Remote: ${remoteSize}, File: ${filename}`)

    if (remoteSize > 0 && localSize === remoteSize) {
      console.log(`[download] Cache hit — skipping download of ${filename}`)
      event.sender.send('download-progress', {
        pct: 100, cached: true, filename,
        downloaded: localSize, total: localSize,
      })
      return filePath
    }

    // If remote size couldn't be determined but local file is reasonably large,
    // trust the cache (server might block HEAD requests)
    if (remoteSize === 0 && localSize > 100 * 1024 * 1024) {
      console.log(`[download] Server didn't report size, but local file is ${(localSize/1e9).toFixed(2)}GB — trusting cache`)
      event.sender.send('download-progress', {
        pct: 100, cached: true, filename,
        downloaded: localSize, total: localSize,
      })
      return filePath
    }

    // Partial file — delete and re-download
    console.log(`[download] Partial/stale file detected (${localSize}/${remoteSize}), re-downloading`)
    try { fs.unlinkSync(filePath) } catch (_) {}
  }

  return new Promise((resolve, reject) => {
    const maxRedirects = 5
    let redirects = 0

    function doDownload(targetUrl) {
      const proto = targetUrl.startsWith('https') ? https : http

      proto.get(targetUrl, (res) => {
        // Follow redirects WITHOUT creating the file first
        if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
          if (++redirects > maxRedirects) return reject(new Error('Too many redirects'))
          res.resume()  // drain the response body
          return doDownload(res.headers.location)
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Server returned HTTP ${res.statusCode}`))
        }

        // Only NOW create the file (after we know we got a 200)
        const file = fs.createWriteStream(filePath)
        const total = parseInt(res.headers['content-length'], 10) || 0
        let downloaded = 0
        let lastReportPct = -1

        res.on('data', chunk => {
          downloaded += chunk.length
          file.write(chunk)
          const pct = total ? Math.round((downloaded / total) * 100) : 0
          // Only send progress updates when percentage changes (reduces IPC spam)
          if (pct !== lastReportPct) {
            lastReportPct = pct
            event.sender.send('download-progress', {
              pct, downloaded, total, filename,
            })
          }
        })
        res.on('end', () => file.end(() => resolve(filePath)))
        res.on('error', err => {
          file.close(() => fs.unlink(filePath, () => {}))
          reject(err)
        })
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
      // PowerShell is cleaner and more reliable than wmic (which is deprecated)
      const out = execSync(
        'powershell -NoProfile -Command "Get-Disk | Where-Object { $_.BusType -eq \'USB\' } | Select-Object Number,FriendlyName,Size | ConvertTo-Json -Compress"',
        { stdio: ['ignore', 'pipe', 'ignore'] }
      ).toString().trim()
      if (!out) return []
      let raw
      try { raw = JSON.parse(out) } catch (_) { return [] }
      const list = Array.isArray(raw) ? raw : [raw]
      return list.filter(Boolean).map(d => ({
        device: `\\\\.\\PhysicalDrive${d.Number}`,
        diskNumber: d.Number,
        name: (d.FriendlyName || 'USB Drive').trim(),
        size: d.Size ? (d.Size / 1e9).toFixed(1) + ' GB' : 'Unknown',
        sizeBytes: d.Size || 0,
      }))
    }

    if (platform === 'linux') {
      const out = execSync('lsblk -J -b -o NAME,SIZE,TYPE,TRAN,VENDOR,MODEL,HOTPLUG,RM').toString()
      const json = JSON.parse(out)
      return (json.blockdevices || [])
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
      const seen = new Set()
      const drives = []
      for (const m of matches) {
        const dev = m[1]
        if (seen.has(dev)) continue
        seen.add(dev)
        let size = 'Unknown', sizeBytes = 0, name = 'External USB'
        try {
          const info = execSync(`diskutil info ${dev}`).toString()
          const sm = info.match(/Disk Size:\s+([\d.]+ [GM]B)/)
          if (sm) size = sm[1]
          const bm = info.match(/Disk Size:.*\((\d+) Bytes/)
          if (bm) sizeBytes = parseInt(bm[1])
          const nm = info.match(/Device \/ Media Name:\s+(.+)/)
          if (nm) name = nm[1].trim()
        } catch (_) {}
        drives.push({ device: dev, name, size, sizeBytes })
      }
      return drives
    }
  } catch (e) {
    console.error('get-usb-drives error:', e.message)
    return []
  }
  return []
})

// ─────────────────────────────────────────────────────────────────────────────
// FLASH ISO (main entry)
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('flash-iso', async (event, opts) => {
  const send = (stage, pct, detail = '') =>
    event.sender.send('flash-progress', { stage, pct, detail })

  // Validate inputs
  if (!opts.isoPath || !fs.existsSync(opts.isoPath))
    throw new Error('ISO file not found at ' + opts.isoPath)
  if (!opts.device) throw new Error('No USB device specified')

  try {
    if      (platform === 'linux')  await flashLinux(opts, send)
    else if (platform === 'win32')  await flashWindows(opts, send)
    else if (platform === 'darwin') await flashMac(opts, send)
    else throw new Error('Unsupported platform: ' + platform)
    return { success: true }
  } catch (e) {
    throw new Error(e.message || 'Flash failed')
  }
})

// ─────────────────────────────────────────────────────────────────────────────
// LINUX — pkexec shell script pipeline
// ─────────────────────────────────────────────────────────────────────────────
async function flashLinux({ isoPath, device, scheme, filesystem, requiresWimSplit }, send) {
  const workDir = path.join(os.tmpdir(), 'flashos-work-' + Date.now())
  const mountIso = path.join(workDir, 'iso')
  const mountUsb = path.join(workDir, 'usb')
  fs.mkdirSync(mountIso, { recursive: true })
  fs.mkdirSync(mountUsb, { recursive: true })

  const partCmds = scheme === 'gpt' ? `
    parted -s "${device}" mklabel gpt
    parted -s "${device}" mkpart EFI fat32 1MiB 200MiB
    parted -s "${device}" set 1 esp on
    parted -s "${device}" mkpart primary ${filesystem === 'ntfs' ? 'ntfs' : 'fat32'} 200MiB 100%
    sleep 2
    EFI_PART=$(lsblk -ln -o NAME "${device}" | sed -n '2p' | sed "s|^|/dev/|")
    DATA_PART=$(lsblk -ln -o NAME "${device}" | sed -n '3p' | sed "s|^|/dev/|")
    mkfs.fat -F 32 "$EFI_PART" -n "EFI"
  ` : `
    parted -s "${device}" mklabel msdos
    parted -s "${device}" mkpart primary ${filesystem === 'ntfs' ? 'ntfs' : 'fat32'} 1MiB 100%
    parted -s "${device}" set 1 boot on
    sleep 2
    DATA_PART=$(lsblk -ln -o NAME "${device}" | sed -n '2p' | sed "s|^|/dev/|")
  `

  const fmtCmd = filesystem === 'ntfs'
    ? `mkfs.ntfs -f "$DATA_PART" -L "FlashOS"`
    : `mkfs.fat -F 32 "$DATA_PART" -n "FlashOS"`

  const wimCmd = requiresWimSplit ? `
    if command -v wimsplit >/dev/null 2>&1; then
      echo "SPLITTING_WIM"
      wimsplit "${mountUsb}/sources/install.wim" "${mountUsb}/sources/install.swm" 3800
      rm -f "${mountUsb}/sources/install.wim"
    else
      echo "ERROR: wimtools/wimlib not installed. Install with: sudo apt install wimtools" >&2
      exit 1
    fi
  ` : ''

  const efiBootCmd = scheme === 'gpt' ? `
    EFI_MNT="${workDir}/efi"
    mkdir -p "$EFI_MNT"
    mount "$EFI_PART" "$EFI_MNT"
    mkdir -p "$EFI_MNT/EFI/BOOT"
    if [ -d "${mountUsb}/EFI" ]; then
      cp -r "${mountUsb}/EFI/." "$EFI_MNT/EFI/" 2>/dev/null || true
    fi
    sync
    umount "$EFI_MNT"
  ` : `
    if command -v syslinux >/dev/null 2>&1; then
      syslinux --install "$DATA_PART" || true
      MBR_BIN=$(find /usr/lib/syslinux /usr/share/syslinux -name 'mbr.bin' 2>/dev/null | head -n 1)
      if [ -n "$MBR_BIN" ]; then
        dd if="$MBR_BIN" of="${device}" bs=440 count=1 conv=notrunc 2>/dev/null || true
      fi
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
    let stderr = ''

    proc.stdout.on('data', d => {
      for (const line of d.toString().split('\n')) {
        const l = line.trim()
        if (l === 'STEP_PARTITION')  send('partitioning',  8,  `Partitioning ${device} as ${scheme.toUpperCase()}`)
        if (l === 'STEP_FORMAT')     send('formatting',    15, `Formatting as ${filesystem.toUpperCase()}`)
        if (l === 'STEP_MOUNT')      send('mounting',      20, 'Mounting ISO and USB')
        if (l === 'STEP_COPY')       send('copying',       25, 'Copying files to USB')
        if (l === 'SPLITTING_WIM')   send('splitting',     72, 'Splitting install.wim for FAT32')
        if (l === 'STEP_BOOTLOADER') send('bootloader',    88, 'Installing bootloader')
        if (l === 'STEP_SYNC')       send('finishing',     95, 'Flushing writes to disk')
        if (l === 'STEP_DONE')       send('done',         100, 'Complete')
        // rsync progress: matches "  1.23G  45%  10MB/s ..."
        const pct = l.match(/\s(\d+)%\s/)
        if (pct) {
          const inner = parseInt(pct[1])
          send('copying', Math.round(25 + (inner / 100) * 45), `Copying ${inner}%`)
        }
      }
    })

    proc.stderr.on('data', d => { stderr += d.toString(); console.error('[flash]', d.toString().trim()) })

    proc.on('close', code => {
      try { fs.rmSync(workDir, { recursive: true, force: true }) } catch (_) {}
      if (code === 0) resolve()
      else reject(new Error(stderr.trim() || `Flash script failed (exit ${code})`))
    })
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// WINDOWS — diskpart + robocopy + wimlib
// ─────────────────────────────────────────────────────────────────────────────
// Note: Windows treats USB sticks as "removable media" and only recognizes the
// FIRST partition. So we cannot use a separate EFI partition like on a fixed
// disk. Instead we create a single bootable FAT32 partition that supports both
// UEFI and BIOS boot — same approach Rufus uses by default.
// ─────────────────────────────────────────────────────────────────────────────
async function flashWindows({ isoPath, device, scheme, filesystem, requiresWimSplit, label, clusterSize, quickFormat }, send) {
  const diskNum = device.replace(/[^0-9]/g, '')
  if (!diskNum) throw new Error('Could not extract disk number from ' + device)

  // Use defaults for missing optional fields
  const volLabel = (label || 'FlashOS').toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 11) || 'FLASHOS'
  const useQuick = quickFormat !== false  // default true
  const useScheme = (scheme || 'mbr').toLowerCase()
  const clusterArg = clusterSize && clusterSize !== 'default' ? ` unit=${clusterSize}` : ''

  const workDir = path.join(os.tmpdir(), 'flashos-work-' + Date.now())
  fs.mkdirSync(workDir, { recursive: true })

  // Find a free drive letter for the USB
  const used = getUsedDriveLetters()
  console.log('[flash] Currently used drive letters:', [...used].sort().join(', '))
  const dataLetter = findFreeLetter(used,
    ['F','G','H','I','J','K','L','M','N','O','P','Q','R','X','Y','Z'])
  if (!dataLetter) {
    throw new Error(`No free drive letters available. Currently used: ${[...used].sort().join(', ')}`)
  }
  console.log(`[flash] Using drive letter ${dataLetter} for USB`)
  console.log(`[flash] Settings: scheme=${useScheme}, fs=${filesystem}, label=${volLabel}, quick=${useQuick}, cluster=${clusterSize}`)

  try {
    // ── Partition with diskpart ─────────────────────────────────────────
    send('partitioning', 5, `Partitioning disk ${diskNum} as ${useScheme.toUpperCase()}`)
    const formatLine = `format fs=${filesystem}${useQuick ? ' quick' : ''} label="${volLabel}"${clusterArg}`
    const dpLines = [
      `select disk ${diskNum}`,
      'attributes disk clear readonly',
      'clean',
      'rescan',
      `select disk ${diskNum}`,
      `convert ${useScheme}`,
      'create partition primary',
      ...(useScheme === 'mbr' ? ['active'] : []),
      formatLine,
      `assign letter=${dataLetter}`,
      'exit',
    ]
    const dpFile = path.join(workDir, 'dp.txt')
    const dpScript = dpLines.join('\r\n')
    fs.writeFileSync(dpFile, dpScript)
    console.log('[flash] Diskpart script:\n' + dpScript)

    try {
      const dpOutput = await runDiskpart(dpFile)
      console.log('[flash] Diskpart output:\n' + dpOutput)
      if (/DiskPart has encountered an error|Virtual Disk Service error/i.test(dpOutput)) {
        const errorLine = dpOutput.split('\n')
          .find(l => /error|encountered/i.test(l))
        throw new Error(errorLine?.trim() || 'See console for details')
      }
    } catch (e) {
      throw new Error(`Disk partitioning failed: ${e.message}`)
    }

    send('formatting', 18, `Formatted ${filesystem.toUpperCase()}`)
    await sleep(2500)

    // ── Mount ISO ───────────────────────────────────────────────────────
    send('mounting', 22, 'Mounting ISO')
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
    if (!isoLetter) throw new Error('Could not determine mounted ISO drive letter.')
    console.log(`[flash] ISO mounted at ${isoLetter}:`)

    // ── Copy files ──────────────────────────────────────────────────────
    send('copying', 25, 'Copying files to USB')
    await runRobocopy(`${isoLetter}:\\`, `${dataLetter}:\\`, send, 25, 70)

    // ── Split install.wim if needed (Windows ISO on FAT32) ──────────────
    const wimPath = `${dataLetter}:\\sources\\install.wim`
    if (requiresWimSplit && filesystem === 'fat32' && fs.existsSync(wimPath)) {
      send('splitting', 72, 'Splitting install.wim for FAT32')
      const wimlibExe = path.join(TOOLS_DIR, 'windows', 'wimlib-imagex.exe')
      if (!fs.existsSync(wimlibExe)) {
        throw new Error('wimlib-imagex.exe missing. Place it in tools/windows/ — see README.')
      }
      await runSpawn(wimlibExe, ['split', wimPath, `${dataLetter}:\\sources\\install.swm`, '3800'])
      try { fs.unlinkSync(wimPath) } catch (_) {}
    }

    // ── Bootloader ──────────────────────────────────────────────────────
    // For Linux ISOs, the USB is already bootable from the copied files
    // (isolinux/syslinux + EFI/BOOT folder are already there).
    // For Windows ISOs, the boot files in efi\boot\ from the ISO handle UEFI;
    // bootsect makes it BIOS-bootable too.
    send('bootloader', 88, 'Installing bootloader')
    try {
      await runCmd(`bootsect /nt60 ${dataLetter}: /mbr`)
    } catch (e) {
      // bootsect may not be available on non-Windows-installer systems
      console.warn('[flash] bootsect skipped:', e.message)
    }

    // ── Cleanup ─────────────────────────────────────────────────────────
    send('finishing', 96, 'Finalising')
    await runCmd(`powershell -NoProfile -Command "Dismount-DiskImage -ImagePath '${isoPath}'"`).catch(() => {})
    send('done', 100, 'Complete')
  } finally {
    try { fs.rmSync(workDir, { recursive: true, force: true }) } catch (_) {}
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// macOS — dd to raw device
// ─────────────────────────────────────────────────────────────────────────────
async function flashMac({ isoPath, device }, send) {
  send('partitioning', 5, `Preparing ${device}`)
  try { execSync(`diskutil unmountDisk "${device}"`) } catch (_) {}
  send('copying', 10, 'Writing ISO to USB')

  const raw = device.replace('/dev/disk', '/dev/rdisk')
  const isoSize = fs.statSync(isoPath).size

  return new Promise((resolve, reject) => {
    const proc = spawn('dd', [`if=${isoPath}`, `of=${raw}`, 'bs=4m', 'conv=sync'])
    const startTime = Date.now()
    const ticker = setInterval(() => {
      // Estimate based on time (rough — dd on mac doesn't easily report bytes)
      const elapsed = (Date.now() - startTime) / 1000
      const estPct = Math.min(10 + Math.round(elapsed * 1.5), 90)
      send('copying', estPct, 'Writing...')
    }, 2000)

    proc.stderr.on('data', d => {
      // dd progress goes to stderr; we ignore but log
      console.log('[dd]', d.toString().trim())
    })

    proc.on('close', code => {
      clearInterval(ticker)
      if (code === 0) {
        try { execSync(`diskutil eject "${device}"`) } catch (_) {}
        send('done', 100, 'Complete. Safe to remove USB.')
        resolve()
      } else {
        reject(new Error(`dd exited with code ${code}`))
      }
    })
    proc.on('error', err => { clearInterval(ticker); reject(err) })
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

/** Spawn without shell. Use for commands with file paths that may contain spaces. */
function runSpawn(exe, args = []) {
  return new Promise((resolve, reject) => {
    const proc = spawn(exe, args, { shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('data', d => stdout += d.toString())
    proc.stderr?.on('data', d => stderr += d.toString())
    proc.on('close', code => code === 0
      ? resolve(stdout)
      : reject(new Error(stderr.trim() || stdout.trim() || `${exe} exited with code ${code}`)))
    proc.on('error', err => reject(err))
  })
}

/**
 * Run diskpart with a script. Diskpart writes BOTH success and error messages
 * to stdout (not stderr), and often returns exit code 0 even on partial failure.
 * We capture and return the full stdout so the caller can parse it for errors.
 */
function runDiskpart(scriptPath) {
  return new Promise((resolve, reject) => {
    const proc = spawn('diskpart', ['/s', scriptPath], { shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('data', d => stdout += d.toString())
    proc.stderr?.on('data', d => stderr += d.toString())
    proc.on('close', code => {
      // Always return stdout — caller decides if it's an error
      if (code === 0 || code === 1) resolve(stdout)
      else reject(new Error(`Diskpart exit code ${code}: ${stderr.trim() || stdout.trim()}`))
    })
    proc.on('error', err => reject(err))
  })
}

/** Generic exec for safe commands (no untrusted input). */
function runCmd(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 50 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message))
      else resolve(stdout)
    })
  })
}

/**
 * Run robocopy with reliable progress tracking.
 *
 * Robocopy's stdout percentage doesn't fire for many small files, so we
 * supplement it by polling the destination size and comparing against the
 * source size. This gives smooth progress regardless of file count.
 */
function runRobocopy(src, dest, send, fromPct, toPct) {
  return new Promise((resolve, reject) => {
    // Calculate total source size first so we can show real progress
    let totalSize = 0
    try {
      totalSize = getDirSize(src)
      console.log(`[flash] Total to copy: ${(totalSize / 1e9).toFixed(2)} GB`)
    } catch (e) {
      console.warn('[flash] Could not calculate source size:', e.message)
    }

    let lastPct = fromPct
    let stalled = 0

    // Poll the destination size every second
    const progressTimer = setInterval(() => {
      try {
        const copiedSize = getDirSize(dest)
        if (totalSize > 0) {
          const ratio = Math.min(copiedSize / totalSize, 1)
          const overallPct = Math.round(fromPct + ratio * (toPct - fromPct))
          if (overallPct > lastPct) {
            lastPct = overallPct
            stalled = 0
            send('copying', overallPct,
              `Copying: ${(copiedSize / 1e9).toFixed(2)} / ${(totalSize / 1e9).toFixed(2)} GB`)
          } else {
            stalled++
          }
        } else {
          // Unknown size — just bump up slowly
          if (lastPct < toPct - 5) {
            lastPct++
            send('copying', lastPct, `Copying... ${(copiedSize / 1e9).toFixed(2)} GB copied`)
          }
        }
      } catch (_) {}
    }, 1000)

    const proc = spawn('robocopy', [
      src, dest,
      '/E',         // copy subdirectories including empty ones
      '/COPY:DAT',  // copy Data, Attributes, Timestamps (not security)
      '/R:1',       // retry once on failure
      '/W:1',       // wait 1 second between retries
      '/NP',        // no progress percentage (we do our own)
      '/NFL',       // no file list
      '/NDL',       // no directory list
      '/NC',        // no class
      '/NJH',       // no job header
      '/NJS',       // no job summary
      '/MT:8',      // 8 threads
    ], { shell: false })

    let stdout = ''
    proc.stdout.on('data', d => { stdout += d.toString() })
    proc.stderr.on('data', d => console.warn('[robocopy-err]', d.toString().trim()))

    proc.on('close', code => {
      clearInterval(progressTimer)
      // Robocopy exit codes 0-7 are all success variants
      // 0 = no files copied (already up to date)
      // 1 = files copied successfully
      // 2 = extra files/dirs detected
      // 3 = some files copied, some extras detected
      // 4-7 = mismatched/copied with issues but ok
      // 8+ = serious failure
      if (code < 8) {
        send('copying', toPct, 'Copy complete')
        resolve()
      } else {
        reject(new Error(`Robocopy failed with exit code ${code}. Output: ${stdout}`))
      }
    })
    proc.on('error', err => {
      clearInterval(progressTimer)
      reject(err)
    })
  })
}

/** Recursively get total size of all files in a directory (bytes). */
function getDirSize(dirPath) {
  let total = 0
  let entries
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true })
  } catch (_) {
    return 0
  }
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name)
    try {
      if (entry.isDirectory()) {
        total += getDirSize(full)
      } else if (entry.isFile()) {
        total += fs.statSync(full).size
      }
    } catch (_) { /* skip locked/inaccessible files */ }
  }
  return total
}

/** Get currently-mounted drive letters on Windows. Tries multiple methods. */
function getUsedDriveLetters() {
  const letters = new Set()

  // Method 1: PowerShell Get-PSDrive
  try {
    const out = execSync(
      'powershell -NoProfile -Command "Get-PSDrive -PSProvider FileSystem | Select-Object -ExpandProperty Name"',
      { stdio: ['ignore', 'pipe', 'ignore'], timeout: 5000 }
    ).toString()
    for (const line of out.split('\n')) {
      const l = line.trim().toUpperCase()
      if (/^[A-Z]$/.test(l)) letters.add(l)
    }
  } catch (e) {
    console.warn('[flash] Get-PSDrive failed:', e.message)
  }

  // Method 2 (fallback / additional): check via Get-Volume
  if (letters.size === 0) {
    try {
      const out = execSync(
        'powershell -NoProfile -Command "Get-Volume | Where-Object DriveLetter | Select-Object -ExpandProperty DriveLetter"',
        { stdio: ['ignore', 'pipe', 'ignore'], timeout: 5000 }
      ).toString()
      for (const line of out.split('\n')) {
        const l = line.trim().toUpperCase()
        if (/^[A-Z]$/.test(l)) letters.add(l)
      }
    } catch (e) {
      console.warn('[flash] Get-Volume failed:', e.message)
    }
  }

  // Method 3 (last resort): cmd "wmic"
  if (letters.size === 0) {
    try {
      const out = execSync('wmic logicaldisk get DeviceID', { stdio: ['ignore', 'pipe', 'ignore'], timeout: 5000 }).toString()
      for (const line of out.split('\n')) {
        const m = line.trim().match(/^([A-Z]):/i)
        if (m) letters.add(m[1].toUpperCase())
      }
    } catch (e) {
      console.warn('[flash] wmic failed:', e.message)
    }
  }

  // Safety: always assume C is taken even if detection fails completely
  if (letters.size === 0) {
    console.warn('[flash] All drive letter detection methods failed. Using minimal fallback.')
    letters.add('A'); letters.add('B'); letters.add('C')
  }

  return letters
}

/** Find first unused letter from candidates. */
function findFreeLetter(used, candidates, exclude = []) {
  const blocked = new Set([...used, ...exclude.map(l => l?.toUpperCase()).filter(Boolean)])
  return candidates.find(l => !blocked.has(l.toUpperCase())) || null
}

// ─────────────────────────────────────────────────────────────────────────────
// MISC
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('check-tools', async () => {
  const has = (cmd) => {
    try {
      if (platform === 'win32') execSync(`where ${cmd}`, { stdio: 'ignore' })
      else execSync(`which ${cmd}`, { stdio: 'ignore' })
      return true
    } catch (_) { return false }
  }
  const res = {}
  if (platform === 'linux') {
    for (const t of ['parted', 'mkfs.fat', 'mkfs.ntfs', 'rsync', 'wimsplit', 'syslinux', 'pkexec'])
      res[t] = has(t)
  }
  if (platform === 'win32') {
    res['wimlib']   = fs.existsSync(path.join(TOOLS_DIR, 'windows', 'wimlib-imagex.exe'))
    res['diskpart'] = true
    res['robocopy'] = true
    res['bcdboot']  = true
  }
  return res
})

ipcMain.handle('open-folder', async (_e, filePath) => shell.showItemInFolder(filePath))
ipcMain.handle('get-platform', () => platform)