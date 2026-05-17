// cli/core/flash-linux.js
// Linux USB flashing using dd. Requires root.

const { spawn } = require('child_process')
const fs = require('fs')

/**
 * Flash an ISO to a USB drive on Linux using dd.
 *
 * @param {object} options
 * @param {string} options.isoPath
 * @param {string} options.device - Like "/dev/sdb"
 * @param {function} options.onProgress
 */
function flashLinux({ isoPath, device, onProgress }) {
  return new Promise((resolve, reject) => {
    if (process.getuid && process.getuid() !== 0) {
      return reject(new Error('Flashing requires root. Re-run with sudo.'))
    }

    const send = (stage, pct, detail) => onProgress && onProgress({ stage, pct, detail })
    const totalSize = fs.statSync(isoPath).size

    send('flashing', 0, `Writing ${isoPath} to ${device}`)

    const proc = spawn('dd', [
      `if=${isoPath}`,
      `of=${device}`,
      'bs=4M',
      'status=progress',
      'conv=fsync',
    ])

    let stderr = ''
    proc.stderr.on('data', d => {
      const text = d.toString()
      stderr += text
      const m = text.match(/(\d+)\s+bytes/)
      if (m) {
        const written = parseInt(m[1])
        const pct = Math.min(Math.round((written / totalSize) * 100), 99)
        send('flashing', pct, `${(written / 1e9).toFixed(2)} / ${(totalSize / 1e9).toFixed(2)} GB`)
      }
    })

    proc.on('close', code => {
      if (code === 0) {
        send('syncing', 99, 'Syncing buffers')
        spawn('sync').on('close', () => {
          send('done', 100, 'Complete')
          resolve()
        })
      } else {
        reject(new Error(`dd failed (exit ${code}): ${stderr}`))
      }
    })
  })
}

module.exports = { flashLinux }