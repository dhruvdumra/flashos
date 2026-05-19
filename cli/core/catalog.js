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