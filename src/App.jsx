import { useState, useEffect, useCallback, useRef } from 'react'
import { bundledCatalog, fetchRemoteCatalog } from './os-catalog'
import './app.css'

const api = window.flashos || {
  minimize: () => {}, maximize: () => {}, close: () => {},
  detectFirmware: async () => ({ type: 'uefi', confidence: 'high' }),
  recommendPartitionSettings: async () => ({
    scheme: 'mbr', target: 'uefi', filesystem: 'fat32',
    requiresWimSplit: false, notes: ['Running in demo mode'],
  }),
  checkTools: async () => ({}),
  getPlatform: async () => 'linux',
  downloadISO: async () => '/fake/path/file.iso',
  onDownloadProgress: () => {}, removeDownloadListener: () => {},
  getUSBDrives: async () => [
    { device: '/dev/sdb', name: 'USB Drive (Demo)', size: '32 GB', sizeBytes: 32e9 },
  ],
  flashISO: async () => ({ success: true }),
  onFlashProgress: () => {}, removeFlashListener: () => {},
  openFolder: () => {},
}

// ── OS Icons ──────────────────────────────────────────────────────────────
const OsIcon = ({ type, color, size = 28 }) => {
  const s = { width: size, height: size, flexShrink: 0 }
  const icons = {
    windows: <svg viewBox="0 0 24 24" style={s} fill={color}><path d="M3 5.6L10.5 4.5V11.5H3V5.6ZM11.5 4.35L21 3V11.5H11.5V4.35ZM3 12.5H10.5V19.5L3 18.4V12.5ZM11.5 12.5H21V21L11.5 19.65V12.5Z"/></svg>,
    ubuntu: <svg viewBox="0 0 24 24" style={s} fill={color}><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="4" r="2"/><circle cx="19.2" cy="16" r="2"/><circle cx="4.8" cy="16" r="2"/></svg>,
    debian: <svg viewBox="0 0 24 24" style={s} fill={color}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.49 0-4.5-2.01-4.5-4.5S8.51 7.5 11 7.5c1.5 0 2.83.74 3.65 1.87-.37-.08-.75-.12-1.15-.12-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5c.97 0 1.87-.31 2.6-.83A4.48 4.48 0 0111 16.5z"/></svg>,
    arch: <svg viewBox="0 0 24 24" style={s} fill={color}><path d="M12 2L2 20h4l6-15.5L18 20h4L12 2z"/></svg>,
    fedora: <svg viewBox="0 0 24 24" style={s} fill={color}><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke={color} strokeWidth="2" strokeLinecap="round"/></svg>,
    mint: <svg viewBox="0 0 24 24" style={s} fill="none" stroke={color} strokeWidth="2"><path d="M4 12C4 7.58 7.58 4 12 4c2.5 0 4.7 1.15 6.15 2.95-1 .7-2.45.5-3.45-.45-.65 1.65-.4 3.7 1 5.05.4.4.4 1.05 0 1.45-1.4 1.35-1.65 3.4-1 5.05-1-.95-2.45-1.15-3.45-.45C9.7 18.85 7.5 20 5 20"/></svg>,
    pop: <svg viewBox="0 0 24 24" style={s} fill={color}><path d="M2 12L12 2l10 10-10 10L2 12zm10-7L5 12l7 7 7-7-7-7z"/></svg>,
    kali: <svg viewBox="0 0 24 24" style={s} fill={color}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>,
    manjaro: <svg viewBox="0 0 24 24" style={s} fill={color}><rect x="3" y="3" width="6" height="18"/><rect x="10" y="10" width="5" height="11"/><rect x="16" y="3" width="5" height="18"/></svg>,
    elementary: <svg viewBox="0 0 24 24" style={s} fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill={color}/></svg>,
    default: <svg viewBox="0 0 24 24" style={s} fill="none" stroke={color} strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4" strokeLinecap="round"/></svg>,
  }
  return icons[type] || icons.default
}

// ── UI Icons ─────────────────────────────────────────────────────────────
const Icon = ({ name, size = 16 }) => {
  const s = { width: size, height: size, flexShrink: 0, verticalAlign: 'middle' }
  const i = {
    search:  <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>,
    usb:     <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="7" r="1" fill="currentColor"/><path d="M4 20l3.5-3.5"/><path d="M15 15l-2-2 4-4-2-2 1.5-1.5L21 8l-6 7z"/><path d="M10 8v6"/><circle cx="10" cy="16" r="2"/></svg>,
    refresh: <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>,
    bolt:    <svg viewBox="0 0 24 24" style={s} fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>,
    check:   <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>,
    x:       <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
    warn:    <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 21h20L12 2z"/><path d="M12 9v5M12 17h.01"/></svg>,
    grid:    <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
    win:     <svg viewBox="0 0 24 24" style={s} fill="currentColor"><path d="M3 5.6L10.5 4.5V11.5H3V5.6ZM11.5 4.35L21 3V11.5H11.5V4.35ZM3 12.5H10.5V19.5L3 18.4V12.5ZM11.5 12.5H21V21L11.5 19.65V12.5Z"/></svg>,
    linux:   <svg viewBox="0 0 24 24" style={s} fill="currentColor"><path d="M12 2c-2 0-3 2-3 4 0 1 .5 2 1 2.5L8 12l-2 4 1 3 2-1 3 1 3-1 2 1 1-3-2-4-2-3.5c.5-.5 1-1.5 1-2.5 0-2-1-4-3-4z"/></svg>,
    folder:  <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>,
    flash:   <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-9 4 18 2-9h6"/></svg>,
    chevron: <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
    back:    <svg viewBox="0 0 24 24" style={s} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  }
  return i[name] || null
}

// ── Badge defined inside App component (needs access to loaded badgeColors) ──

// ── OS Card (in grid) ─────────────────────────────────────────────────────
const OsCard = ({ os, onClick }) => {
  // Calculate total versions across all editions
  const totalVersions = os.editions.reduce((sum, e) => sum + e.versions.length, 0)
  const totalEditions = os.editions.length

  return (
    <button type="button" className="os-card" onClick={() => onClick(os)}>
      <div className="os-card-icon" style={{ background: os.color + '1f' }}>
        <OsIcon type={os.icon} color={os.color} size={28} />
      </div>
      <div className="os-card-name">{os.name}</div>
      <div className="os-card-desc">{os.description}</div>
      <div className="os-card-stats">
        <span>{totalEditions} {totalEditions === 1 ? 'edition' : 'editions'}</span>
        <span className="dot">·</span>
        <span>{totalVersions} {totalVersions === 1 ? 'version' : 'versions'}</span>
      </div>
    </button>
  )
}

// ── Progress Ring ─────────────────────────────────────────────────────────
const ProgressRing = ({ pct, size = 80, color = '#6c63ff' }) => {
  const r = (size - 10) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (Math.max(0, Math.min(100, pct)) / 100) * circ
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#2a2a35" strokeWidth="5"/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 0.3s ease' }}
      />
      <text x={size/2} y={size/2+5} textAnchor="middle" fill="#e8e8f2" fontSize="14" fontWeight="600">{Math.round(pct)}%</text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────────────────
export default function App() {
  // Start with bundled catalog so the UI works immediately
  const [catalog, setCatalog] = useState(bundledCatalog.catalog)
  const [categories, setCategories] = useState(bundledCatalog.categories)
  const [badgeColors, setBadgeColors] = useState(bundledCatalog.badgeColors)
  const [catalogUpdated, setCatalogUpdated] = useState(bundledCatalog.updated)

  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  // Drawer state (when user clicks an OS card)
  const [drawerOs, setDrawerOs] = useState(null)

  // The actually-selected, ready-to-flash item (OS + edition + version flattened)
  const [selected, setSelected] = useState(null)

  const [usbDrives, setUsbDrives] = useState([])
  const [selectedDrive, setSelectedDrive] = useState(null)
  const [firmware, setFirmware] = useState(null)
  const [partitionSettings, setPartitionSettings] = useState(null)
  const [phase, setPhase] = useState('idle')
  const [downloadPct, setDownloadPct] = useState(0)
  const [flashPct, setFlashPct] = useState(0)
  const [flashStage, setFlashStage] = useState('')
  const [flashDetail, setFlashDetail] = useState('')
  const [isoPath, setIsoPath] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [page, setPage] = useState('library')
  const [confirmOpen, setConfirmOpen] = useState(false)

  // Manual partition settings override
  const [manualMode, setManualMode] = useState(false)
  const [manualSettings, setManualSettings] = useState({
    scheme: 'mbr',
    target: 'uefi',
    filesystem: 'fat32',
    clusterSize: 'default',
    label: 'FlashOS',
    quickFormat: true,
    checkBadBlocks: false,
    requiresWimSplit: false,
  })

  const userSelectedDrive = useRef(false)

  // ── Refresh catalog from GitHub (runs once on mount + manually) ────────
  const refreshCatalog = useCallback(async () => {
    const remote = await fetchRemoteCatalog()
    if (remote) {
      setCatalog(remote.catalog || bundledCatalog.catalog)
      setCategories(remote.categories || bundledCatalog.categories)
      setBadgeColors(remote.badgeColors || bundledCatalog.badgeColors)
      setCatalogUpdated(remote.updated || 'unknown')
    }
  }, [])

  useEffect(() => {
    refreshCatalog()
  }, [refreshCatalog])

  // Badge component memoized so React doesn't rebuild it on every render
  const Badge = useCallback(({ type }) => {
    const c = badgeColors[type] || { bg: '#0e2e1a', text: '#4ade80' }
    return <span className="badge" style={{ background: c.bg, color: c.text }}>{type}</span>
  }, [badgeColors])

  // Filtered OS list (operates on OS-level, not versions)
  const filteredOS = catalog.filter(os => {
    const matchCat = category === 'all' || os.category === category
    const q = search.toLowerCase()
    if (!q) return matchCat
    // Search in OS name, edition names, and version labels
    const hay = (os.name + ' ' + os.description + ' ' +
                 os.editions.map(e => e.name + ' ' + e.versions.map(v => v.label).join(' ')).join(' ')).toLowerCase()
    return matchCat && hay.includes(q)
  })

  // ── USB drives ─────────────────────────────────────────────────────────
  const loadDrives = useCallback(async () => {
    try {
      const drives = await api.getUSBDrives()
      setUsbDrives(prev => {
        // Only update state if the drives list actually changed.
        // Otherwise React re-renders the whole tree for no reason.
        if (prev.length === drives.length &&
            prev.every((p, i) => p.device === drives[i]?.device && p.sizeBytes === drives[i]?.sizeBytes)) {
          return prev  // no change, skip re-render
        }
        return drives
      })
      setSelectedDrive(prev => {
        if (prev && drives.some(d => d.device === prev.device)) return prev
        return drives[0] || null
      })
    } catch (e) {
      console.error('Failed to load drives:', e)
    }
  }, [])

  useEffect(() => {
    loadDrives()
    // Poll every 10 seconds instead of 5 — USB plugs/unplugs are rare events
    const interval = setInterval(loadDrives, 10000)
    ;(async () => {
      try { setFirmware(await api.detectFirmware()) } catch (_) {}
    })()
    return () => clearInterval(interval)
  }, [loadDrives])

  // ── Partition settings ────────────────────────────────────────────────
  useEffect(() => {
    if (!selected || !firmware) return
    ;(async () => {
      try {
        const settings = await api.recommendPartitionSettings({
          osCategory: selected.category,
          sizeBytes: selected.sizeBytes,
          firmware: firmware.type,
        })
        setPartitionSettings(settings)
        // Also sync manual settings to the new auto-detected values
        setManualSettings(prev => ({
          ...prev,
          scheme: settings.scheme,
          target: settings.target,
          filesystem: settings.filesystem,
          requiresWimSplit: settings.requiresWimSplit,
        }))
      } catch (e) { console.error('Partition settings failed:', e) }
    })()
  }, [selected, firmware])

  // ── Pick a specific version (closes drawer, sets selected) ────────────
  const handlePickVersion = (os, edition, version) => {
    const flat = {
      osId: os.id, osName: os.name,
      category: os.category, color: os.color, icon: os.icon,
      description: os.description,
      editionId: edition.id, editionName: edition.name, badge: edition.badge,
      ...version,
      // displayName: combine name, edition, version for cards/UI
      displayName: `${os.name} ${edition.name}`,
      versionLabel: version.label,
    }
    setSelected(flat)
    setDrawerOs(null)
    setPhase('idle'); setDownloadPct(0); setFlashPct(0)
    setFlashStage(''); setFlashDetail(''); setIsoPath(null); setErrorMsg('')
  }

  const handleSelectDrive = (drive) => {
    userSelectedDrive.current = true
    setSelectedDrive(drive)
  }

  // ── Flash pipeline ─────────────────────────────────────────────────────
  const startFlash = async () => {
    setConfirmOpen(false)
    if (!selected || !selectedDrive || !partitionSettings) return

    if (selected.downloadUrl.includes('YOUR_URL_HERE')) {
      setErrorMsg(`No download URL set for this version. Edit src/os-catalog.js to add one.`)
      setPhase('error')
      return
    }

    try {
      setPhase('downloading'); setDownloadPct(0)
      api.removeDownloadListener()
      let lastDlPct = -1
      api.onDownloadProgress(({ pct }) => {
        if (typeof pct === 'number' && pct !== lastDlPct) {
          setDownloadPct(pct)
          lastDlPct = pct
        }
      })

      const downloadedPath = await api.downloadISO({
        url: selected.downloadUrl, filename: selected.filename,
      })
      setIsoPath(downloadedPath)

      setPhase('flashing'); setFlashPct(0)
      setFlashStage('starting'); setFlashDetail('Preparing...')
      api.removeFlashListener()
      // Throttle flash progress: only update UI if percent changed or 200ms passed
      let lastUpdate = 0
      let lastPct = -1
      api.onFlashProgress(({ stage, pct, detail }) => {
        const now = Date.now()
        // Only update on percent change OR every 200ms (whichever first)
        if (typeof pct === 'number' && pct !== lastPct) {
          setFlashPct(pct)
          lastPct = pct
        }
        if (now - lastUpdate > 200) {
          if (stage) setFlashStage(stage)
          if (detail) setFlashDetail(detail)
          lastUpdate = now
        }
      })

      await api.flashISO({
        isoPath: downloadedPath,
        device: selectedDrive.device,
        scheme:           manualMode ? manualSettings.scheme           : partitionSettings.scheme,
        filesystem:       manualMode ? manualSettings.filesystem       : partitionSettings.filesystem,
        requiresWimSplit: manualMode ? manualSettings.requiresWimSplit : partitionSettings.requiresWimSplit,
        label:            manualMode ? manualSettings.label            : 'FlashOS',
        clusterSize:      manualMode ? manualSettings.clusterSize      : 'default',
        quickFormat:      manualMode ? manualSettings.quickFormat      : true,
        checkBadBlocks:   manualMode ? manualSettings.checkBadBlocks   : false,
      })

      setFlashPct(100); setPhase('done')
    } catch (e) {
      console.error('Flash failed:', e)
      setErrorMsg(e.message || 'Something went wrong during the flash.')
      setPhase('error')
    } finally {
      api.removeDownloadListener()
      api.removeFlashListener()
    }
  }

  const handleReset = () => {
    setPhase('idle'); setDownloadPct(0); setFlashPct(0)
    setFlashStage(''); setFlashDetail(''); setErrorMsg('')
  }

  // ─────────────────────────────────────────────────────────────────────
  return (
    <div className="app-root">
      {/* Title bar */}
      <div className="titlebar">
        <div className="titlebar-drag">
          <span className="app-wordmark">⬡ FlashOS</span>
          {firmware && (
            <span className="firmware-pill" title={`Detected ${firmware.type.toUpperCase()} (${firmware.confidence} confidence)`}>
              {firmware.type.toUpperCase()}
            </span>
          )}
          {catalogUpdated && (
            <span className="catalog-pill" title={`Catalog updated ${catalogUpdated}. Click to refresh.`}
              onClick={refreshCatalog} style={{ cursor: 'pointer' }}>
              Catalog: {catalogUpdated}
            </span>
          )}
        </div>
        <div className="titlebar-controls">
          <button onClick={api.minimize} className="tb-btn tb-min" aria-label="Minimize" />
          <button onClick={api.maximize} className="tb-btn tb-max" aria-label="Maximize" />
          <button onClick={api.close}    className="tb-btn tb-close" aria-label="Close" />
        </div>
      </div>

      <div className="app-body">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <div className="nav-section-label">Browse</div>
            {categories.map(c => (
              <button key={c.id} type="button"
                className={`nav-item ${category === c.id && page === 'library' ? 'active' : ''}`}
                onClick={() => { setCategory(c.id); setPage('library') }}>
                <Icon name={c.id === 'all' ? 'grid' : c.id === 'windows' ? 'win' : 'linux'} size={15} />
                {c.label}
              </button>
            ))}
            <div className="nav-section-label" style={{ marginTop: 24 }}>Tools</div>
            <button type="button"
              className={`nav-item ${page === 'flash' ? 'active' : ''}`}
              onClick={() => setPage('flash')}>
              <Icon name="flash" size={15} /> Flash Manager
            </button>
          </nav>

          {selected && (
            <div className="sidebar-selected">
              <div className="sidebar-selected-label">Selected</div>
              <div className="sidebar-selected-name">{selected.displayName}</div>
              <div className="sidebar-selected-ver">{selected.versionLabel}</div>
              <div style={{ marginTop: 8 }}><Badge type={selected.badge} /></div>
            </div>
          )}
        </aside>

        {/* Main content */}
        <main className="main-content">
          {page === 'library' && (
            <>
              <div className="topbar">
                <h1 className="page-title">
                  {category === 'all' ? 'Operating Systems' : category === 'windows' ? 'Windows' : 'Linux Distributions'}
                  <span className="count-badge">{filteredOS.length}</span>
                </h1>
                <div className="search-wrap">
                  <span className="search-icon"><Icon name="search" size={15} /></span>
                  <input className="search-input" placeholder="Search any version..."
                    value={search} onChange={e => setSearch(e.target.value)} />
                </div>
              </div>

              <div className="os-grid">
                {filteredOS.length === 0 ? (
                  <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                    <div className="empty-text">No operating systems match your search.</div>
                  </div>
                ) : filteredOS.map(os => (
                  <OsCard key={os.id} os={os} onClick={setDrawerOs} />
                ))}
              </div>
            </>
          )}

          {page === 'flash' && (
            <div className="flash-page">
              <h1 className="page-title">Flash Manager</h1>

              {!selected ? (
                <div className="empty-state">
                  <div className="empty-text">Select an operating system first.</div>
                  <button className="btn-secondary" onClick={() => setPage('library')}>Browse Library</button>
                </div>
              ) : (
                <div className="flash-layout">
                  <div className="flash-card">
                    <div className="flash-os-header">
                      <div className="flash-os-icon" style={{ background: selected.color + '22' }}>
                        <OsIcon type={selected.icon} color={selected.color} size={36} />
                      </div>
                      <div>
                        <div className="flash-os-name">{selected.displayName}</div>
                        <div className="flash-os-ver">{selected.versionLabel} · {selected.arch} · {selected.size}</div>
                      </div>
                    </div>
                    <div className="flash-desc">{selected.description}</div>

                    <div className="flash-divider" />

                    <div className="usb-section">
                      <div className="usb-label">
                        <Icon name="usb" size={14} /> Target USB drive
                        <button type="button" className="refresh-btn" onClick={loadDrives}>
                          <Icon name="refresh" size={12} /> Refresh
                        </button>
                      </div>
                      {usbDrives.length === 0 ? (
                        <div className="no-usb">No USB drives detected. Plug one in then click Refresh.</div>
                      ) : (
                        <div className="usb-list">
                          {usbDrives.map(drive => (
                            <label key={drive.device}
                              className={`usb-option ${selectedDrive?.device === drive.device ? 'selected' : ''}`}>
                              <input type="radio" name="drive" value={drive.device}
                                checked={selectedDrive?.device === drive.device}
                                onChange={() => handleSelectDrive(drive)} />
                              <span className="usb-name">{drive.name}</span>
                              <span className="usb-dev">{drive.device}</span>
                              <span className="usb-size">{drive.size}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {partitionSettings && (
                      <>
                        <div className="flash-divider" />
                        <div className="usb-label">
                          Partition settings
                          {!manualMode && <span className="auto-tag">auto</span>}
                          <button type="button" className="refresh-btn" onClick={() => setManualMode(!manualMode)}>
                            {manualMode ? 'Use auto' : 'Customize'}
                          </button>
                        </div>

                        {!manualMode ? (
                          <div className="partition-info">
                            <div className="part-row"><span>Scheme</span><span className="part-val">{partitionSettings.scheme.toUpperCase()}</span></div>
                            <div className="part-row"><span>Target</span><span className="part-val">{partitionSettings.target.toUpperCase()}</span></div>
                            <div className="part-row"><span>Filesystem</span><span className="part-val">{partitionSettings.filesystem.toUpperCase()}</span></div>
                            <div className="part-row"><span>Volume label</span><span className="part-val">FlashOS</span></div>
                            {partitionSettings.requiresWimSplit && (
                              <div className="part-row"><span>WIM split</span><span className="part-val">Yes</span></div>
                            )}
                          </div>
                        ) : (
                          <div className="manual-settings">
                            {/* Partition Scheme */}
                            <div className="setting-group">
                              <label className="setting-label">Partition scheme</label>
                              <div className="seg-control">
                                <button type="button"
                                  className={`seg-btn ${manualSettings.scheme === 'mbr' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, scheme: 'mbr' })}>
                                  MBR
                                </button>
                                <button type="button"
                                  className={`seg-btn ${manualSettings.scheme === 'gpt' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, scheme: 'gpt' })}>
                                  GPT
                                </button>
                              </div>
                              <div className="setting-hint">
                                {manualSettings.scheme === 'gpt'
                                  ? 'Modern PCs (post-2012). Required for UEFI Secure Boot.'
                                  : 'Universal compatibility. Works on old BIOS and modern PCs.'}
                              </div>
                            </div>

                            {/* Target System */}
                            <div className="setting-group">
                              <label className="setting-label">Target system</label>
                              <div className="seg-control">
                                <button type="button"
                                  className={`seg-btn ${manualSettings.target === 'bios' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, target: 'bios' })}>
                                  BIOS
                                </button>
                                <button type="button"
                                  className={`seg-btn ${manualSettings.target === 'uefi' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, target: 'uefi' })}>
                                  UEFI
                                </button>
                                <button type="button"
                                  className={`seg-btn ${manualSettings.target === 'both' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, target: 'both' })}>
                                  Both
                                </button>
                              </div>
                            </div>

                            {/* File System */}
                            <div className="setting-group">
                              <label className="setting-label">File system</label>
                              <div className="seg-control">
                                <button type="button"
                                  className={`seg-btn ${manualSettings.filesystem === 'fat32' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, filesystem: 'fat32' })}>
                                  FAT32
                                </button>
                                <button type="button"
                                  className={`seg-btn ${manualSettings.filesystem === 'ntfs' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, filesystem: 'ntfs' })}>
                                  NTFS
                                </button>
                                <button type="button"
                                  className={`seg-btn ${manualSettings.filesystem === 'exfat' ? 'active' : ''}`}
                                  onClick={() => setManualSettings({ ...manualSettings, filesystem: 'exfat' })}>
                                  exFAT
                                </button>
                              </div>
                              <div className="setting-hint">
                                {manualSettings.filesystem === 'fat32' && 'Universal but max 4 GB per file. WIM split auto-enabled for Windows.'}
                                {manualSettings.filesystem === 'ntfs' && 'No file size limit. Best for Windows ISOs. BIOS boot only.'}
                                {manualSettings.filesystem === 'exfat' && 'No size limit. Less common but works on most modern systems.'}
                              </div>
                            </div>

                            {/* Cluster Size */}
                            <div className="setting-group">
                              <label className="setting-label">Cluster size</label>
                              <select className="setting-input"
                                value={manualSettings.clusterSize}
                                onChange={e => setManualSettings({ ...manualSettings, clusterSize: e.target.value })}>
                                <option value="default">Default (recommended)</option>
                                <option value="512">512 bytes</option>
                                <option value="1024">1 KB</option>
                                <option value="2048">2 KB</option>
                                <option value="4096">4 KB</option>
                                <option value="8192">8 KB</option>
                                <option value="16384">16 KB</option>
                                <option value="32768">32 KB</option>
                                <option value="65536">64 KB</option>
                              </select>
                            </div>

                            {/* Volume Label */}
                            <div className="setting-group">
                              <label className="setting-label">Volume label</label>
                              <input type="text" className="setting-input"
                                maxLength={11}
                                value={manualSettings.label}
                                onChange={e => setManualSettings({ ...manualSettings, label: e.target.value.toUpperCase() })}
                                placeholder="FlashOS" />
                              <div className="setting-hint">Max 11 characters for FAT32, 32 for NTFS/exFAT.</div>
                            </div>

                            {/* Toggles */}
                            <div className="setting-group">
                              <label className="toggle-row">
                                <input type="checkbox"
                                  checked={manualSettings.quickFormat}
                                  onChange={e => setManualSettings({ ...manualSettings, quickFormat: e.target.checked })} />
                                <span>Quick format</span>
                                <span className="toggle-hint">Faster, skips bad-block check</span>
                              </label>
                              <label className="toggle-row">
                                <input type="checkbox"
                                  checked={manualSettings.checkBadBlocks}
                                  onChange={e => setManualSettings({ ...manualSettings, checkBadBlocks: e.target.checked })} />
                                <span>Check for bad blocks</span>
                                <span className="toggle-hint">Slower but verifies the USB is healthy</span>
                              </label>
                              <label className="toggle-row">
                                <input type="checkbox"
                                  checked={manualSettings.requiresWimSplit}
                                  onChange={e => setManualSettings({ ...manualSettings, requiresWimSplit: e.target.checked })} />
                                <span>Split install.wim if larger than 4 GB</span>
                                <span className="toggle-hint">Required for Windows ISOs on FAT32</span>
                              </label>
                            </div>

                            {/* Reset button */}
                            <button type="button" className="btn-secondary"
                              onClick={() => {
                                setManualSettings({
                                  scheme: partitionSettings.scheme,
                                  target: partitionSettings.target,
                                  filesystem: partitionSettings.filesystem,
                                  clusterSize: 'default',
                                  label: 'FlashOS',
                                  quickFormat: true,
                                  checkBadBlocks: false,
                                  requiresWimSplit: partitionSettings.requiresWimSplit,
                                })
                              }}>
                              Reset to recommended
                            </button>
                          </div>
                        )}

                        {!manualMode && partitionSettings.notes && partitionSettings.notes.length > 0 && (
                          <div className="partition-notes">
                            {partitionSettings.notes.map((n, i) => <div key={i}>• {n}</div>)}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flash-card action-card">
                    {phase === 'idle' && (
                      <>
                        <div className="action-title">Ready to flash</div>
                        <div className="action-steps">
                          <div className="step-row done">
                            <span className="step-dot done"><Icon name="check" size={11} /></span>
                            <span>{selected.displayName} {selected.versionLabel}</span>
                          </div>
                          <div className={`step-row ${selectedDrive ? 'done' : 'pending'}`}>
                            <span className={`step-dot ${selectedDrive ? 'done' : 'pending'}`}>
                              {selectedDrive ? <Icon name="check" size={11} /> : '○'}
                            </span>
                            <span>{selectedDrive ? `USB: ${selectedDrive.name}` : 'Select a USB drive'}</span>
                          </div>
                          <div className={`step-row ${partitionSettings ? 'done' : 'pending'}`}>
                            <span className={`step-dot ${partitionSettings ? 'done' : 'pending'}`}>
                              {partitionSettings ? <Icon name="check" size={11} /> : '○'}
                            </span>
                            <span>{partitionSettings ? `${partitionSettings.scheme.toUpperCase()} + ${partitionSettings.filesystem.toUpperCase()}` : 'Detecting...'}</span>
                          </div>
                        </div>
                        <div className="warning-box">
                          <Icon name="warn" size={14} />
                          <span>All data on <strong>{selectedDrive?.name || 'the selected USB'}</strong> will be permanently erased.</span>
                        </div>
                        <button className="btn-flash" disabled={!selectedDrive || !partitionSettings}
                          onClick={() => setConfirmOpen(true)}>
                          <Icon name="bolt" size={14} /> Download & Flash
                        </button>
                      </>
                    )}

                    {phase === 'downloading' && (
                      <div className="progress-state">
                        <ProgressRing pct={downloadPct} color={selected.color} size={90} />
                        <div className="progress-label">Downloading ISO</div>
                        <div className="progress-sub">{selected.filename}</div>
                      </div>
                    )}

                    {phase === 'flashing' && (
                      <div className="progress-state">
                        <ProgressRing pct={flashPct} color="#f97316" size={90} />
                        <div className="progress-label">{flashStage ? flashStage.charAt(0).toUpperCase() + flashStage.slice(1) : 'Flashing'}</div>
                        <div className="progress-sub">{flashDetail || selectedDrive?.name}</div>
                        <div className="flash-warning">Do not remove the USB drive.</div>
                      </div>
                    )}

                    {phase === 'done' && (
                      <div className="done-state">
                        <div className="done-icon"><Icon name="check" size={28} /></div>
                        <div className="done-title">Flash complete</div>
                        <div className="done-sub">Your USB is ready. Reboot your PC and boot from the USB to install.</div>
                        <button className="btn-secondary" onClick={() => isoPath && api.openFolder(isoPath)}>
                          <Icon name="folder" size={13} /> Show ISO file
                        </button>
                        <button className="btn-flash" onClick={handleReset} style={{ marginTop: 8 }}>Flash another</button>
                      </div>
                    )}

                    {phase === 'error' && (
                      <div className="error-state">
                        <div className="error-icon"><Icon name="x" size={26} /></div>
                        <div className="error-title">Something went wrong</div>
                        <div className="error-msg">{errorMsg}</div>
                        <button className="btn-flash" onClick={handleReset} style={{ marginTop: 16 }}>Try again</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Bottom bar */}
      {selected && page === 'library' && (
        <div className="bottombar">
          <div className="bb-left">
            <div className="bb-icon" style={{ background: selected.color + '22' }}>
              <OsIcon type={selected.icon} color={selected.color} size={18} />
            </div>
            <div>
              <div className="bb-name">{selected.displayName} {selected.versionLabel}</div>
              <div className="bb-meta">{selected.arch} · {selected.size}</div>
            </div>
          </div>
          <div className="bb-actions">
            {usbDrives.length > 0 ? (
              <div className="usb-pill"><Icon name="usb" size={12} /> {usbDrives[0].name}</div>
            ) : (
              <div className="usb-pill warn"><Icon name="warn" size={12} /> No USB detected</div>
            )}
            <button className="btn-flash" onClick={() => setPage('flash')}>
              <Icon name="bolt" size={14} /> Flash this OS
            </button>
          </div>
        </div>
      )}

      {/* DRAWER — edition + version picker */}
      {drawerOs && (
        <div className="drawer-backdrop" onClick={() => setDrawerOs(null)}>
          <div className="drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-header">
              <button className="drawer-back" onClick={() => setDrawerOs(null)}>
                <Icon name="back" size={18} />
              </button>
              <div className="drawer-os-icon" style={{ background: drawerOs.color + '22' }}>
                <OsIcon type={drawerOs.icon} color={drawerOs.color} size={32} />
              </div>
              <div>
                <div className="drawer-title">{drawerOs.name}</div>
                <div className="drawer-subtitle">{drawerOs.description}</div>
              </div>
            </div>

            <div className="drawer-body">
              {drawerOs.editions.map(edition => (
                <div key={edition.id} className="edition-group">
                  <div className="edition-header">
                    <div className="edition-name">{edition.name}</div>
                    <Badge type={edition.badge} />
                  </div>
                  <div className="version-grid">
                    {edition.versions.map(version => (
                      <button key={version.id} type="button" className="version-card"
                        onClick={() => handlePickVersion(drawerOs, edition, version)}>
                        <div className="version-label">{version.label}</div>
                        <div className="version-meta">{version.arch} · {version.size}</div>
                        {version.downloadUrl.includes('YOUR_URL_HERE') && (
                          <div className="version-warn">URL not set</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation dialog */}
      {confirmOpen && (
        <div className="modal-backdrop" onClick={() => setConfirmOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-icon"><Icon name="warn" size={28} /></div>
            <div className="modal-title">Erase {selectedDrive?.name}?</div>
            <div className="modal-body">
              All data on this USB drive will be permanently deleted. This action cannot be undone.
              <br /><br />
              Device: <strong>{selectedDrive?.device}</strong><br />
              Size: <strong>{selectedDrive?.size}</strong>
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setConfirmOpen(false)}>Cancel</button>
              <button className="btn-flash btn-danger" onClick={startFlash}>Yes, erase and flash</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
