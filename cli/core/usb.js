// cli/core/usb.js
// Cross-platform USB drive detection.

const { execSync } = require('child_process')
const os = require('os')

const platform = os.platform()

function bytesToSize(bytes) {
  if (!bytes || bytes < 1024) return `${bytes || 0} B`
  const units = ['KB', 'MB', 'GB', 'TB']
  let n = bytes / 1024
  let i = 0
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++ }
  return `${n.toFixed(1)} ${units[i]}`
}

function listUsbWindows() {
  // Use PowerShell to enumerate disks marked as USB
  const cmd = `powershell -NoProfile -Command "Get-Disk | Where-Object {$_.BusType -eq 'USB'} | Select-Object Number,FriendlyName,Size | ConvertTo-Json -Compress"`
  try {
    const out = execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
    if (!out) return []
    const data = JSON.parse(out)
    const arr = Array.isArray(data) ? data : [data]
    return arr.map(d => ({
      device: `\\\\.\\PhysicalDrive${d.Number}`,
      diskNumber: d.Number,
      name: d.FriendlyName || `USB Disk ${d.Number}`,
      sizeBytes: d.Size || 0,
      size: bytesToSize(d.Size),
    }))
  } catch (e) {
    return []
  }
}

function listUsbLinux() {
  // Use lsblk to find removable drives
  try {
    const out = execSync(
      'lsblk -d -o NAME,SIZE,RM,TYPE,MODEL --json',
      { stdio: ['ignore', 'pipe', 'ignore'] }
    ).toString()
    const data = JSON.parse(out)
    return (data.blockdevices || [])
      .filter(d => d.rm === '1' && d.type === 'disk')
      .map(d => ({
        device: `/dev/${d.name}`,
        name: d.model || `USB ${d.name}`,
        size: d.size,
        sizeBytes: parseSize(d.size),
      }))
  } catch (e) {
    return []
  }
}

function listUsbMac() {
  try {
    const out = execSync('diskutil list -plist external', { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
    // Simple regex-based parse (full plist parsing is overkill for this)
    const disks = []
    const matches = out.matchAll(/<string>(disk\d+)<\/string>/g)
    for (const m of matches) {
      const dev = `/dev/${m[1]}`
      try {
        const info = execSync(`diskutil info ${dev}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
        const nameMatch = info.match(/Media Name:\s+(.+)/)
        const sizeMatch = info.match(/Total Size:\s+(.+?)\s+\((\d+) Bytes\)/)
        if (nameMatch && sizeMatch) {
          disks.push({
            device: dev,
            name: nameMatch[1].trim(),
            size: sizeMatch[1].trim(),
            sizeBytes: parseInt(sizeMatch[2]),
          })
        }
      } catch (_) {}
    }
    return disks
  } catch (e) {
    return []
  }
}

function parseSize(str) {
  if (!str) return 0
  const m = str.match(/([\d.]+)\s*([KMGT]?)/i)
  if (!m) return 0
  const num = parseFloat(m[1])
  const unit = (m[2] || '').toUpperCase()
  const multipliers = { '': 1, K: 1e3, M: 1e6, G: 1e9, T: 1e12 }
  return Math.round(num * (multipliers[unit] || 1))
}

/**
 * List all connected USB drives. Cross-platform.
 * Returns: [{ device, name, size, sizeBytes }, ...]
 */
function listUsbDrives() {
  if (platform === 'win32')  return listUsbWindows()
  if (platform === 'linux')  return listUsbLinux()
  if (platform === 'darwin') return listUsbMac()
  return []
}

module.exports = { listUsbDrives, bytesToSize, platform }