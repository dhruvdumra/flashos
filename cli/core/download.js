// cli/core/download.js
// ISO download with HTTP redirect handling and progress events.

const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

const CACHE_DIR = path.join(os.homedir(), '.flashos', 'cache')

function ensureCacheDir() {
  fs.mkdirSync(CACHE_DIR, { recursive: true })
}

/**
 * HEAD request to get remote file size without downloading.
 * Used to detect if a cached file is still up-to-date.
 */
function getRemoteSize(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.request(url, { method: 'HEAD' }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return getRemoteSize(res.headers.location).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) return resolve(null)
      const len = parseInt(res.headers['content-length'] || '0')
      resolve(len || null)
    })
    req.on('error', () => resolve(null))
    req.end()
  })
}

/**
 * Download a file with redirect handling and progress callbacks.
 *
 * onProgress({ pct, downloaded, total, speed })
 */
function downloadFile(url, dest, onProgress) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const file = fs.createWriteStream(dest)
    let downloaded = 0
    let total = 0
    let lastTick = Date.now()
    let lastBytes = 0
    let speed = 0

    client.get(url, res => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close()
        try { fs.unlinkSync(dest) } catch (_) {}
        return downloadFile(res.headers.location, dest, onProgress).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        file.close()
        try { fs.unlinkSync(dest) } catch (_) {}
        return reject(new Error(`HTTP ${res.statusCode}`))
      }

      total = parseInt(res.headers['content-length'] || '0')

      res.on('data', chunk => {
        downloaded += chunk.length
        // Calculate speed (KB/s) every 500ms
        const now = Date.now()
        if (now - lastTick >= 500) {
          speed = Math.round(((downloaded - lastBytes) / 1024) / ((now - lastTick) / 1000))
          lastTick = now
          lastBytes = downloaded
        }
        if (onProgress) {
          const pct = total > 0 ? Math.round((downloaded / total) * 100) : 0
          onProgress({ pct, downloaded, total, speed })
        }
      })

      res.pipe(file)
      file.on('finish', () => file.close(resolve))
      file.on('error', reject)
    }).on('error', err => {
      file.close()
      try { fs.unlinkSync(dest) } catch (_) {}
      reject(err)
    })
  })
}

/**
 * Download an ISO with caching. Returns the local file path.
 * Skips download if a cached file matches the remote size.
 */
async function downloadIso({ url, filename, onProgress }) {
  ensureCacheDir()
  const dest = path.join(CACHE_DIR, filename)

  // Check cache
  if (fs.existsSync(dest)) {
    const localSize = fs.statSync(dest).size
    const remoteSize = await getRemoteSize(url)
    if (remoteSize && localSize === remoteSize) {
      if (onProgress) onProgress({ pct: 100, downloaded: localSize, total: localSize, speed: 0, cached: true })
      return dest
    }
  }

  await downloadFile(url, dest, onProgress)
  return dest
}

module.exports = { downloadIso, getRemoteSize, CACHE_DIR }