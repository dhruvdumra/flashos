import { useState, useEffect, useCallback } from 'react'
import { catalog, categories, badgeColors } from './os-catalog'
import './app.css'

const api = window.flashos || {
  minimize: () => {}, maximize: () => {}, close: () => {},
  downloadISO: async () => '/fake/path/file.iso',
  onDownloadProgress: () => {}, removeDownloadListener: () => {},
  getUSBDrives: async () => [{ device: '/dev/sdb', name: 'USB Drive (Demo)', size: '32 GB' }],
  flashISO: async () => ({ success: true }),
  onFlashProgress: () => {}, removeFlashListener: () => {},
  openFolder: () => {},
  platform: 'linux',
}

// ── Icons ──────────────────────────────────────────────────────────────────
const OsIcon = ({ type, color, size = 28 }) => {
  const s = { width: size, height: size }
  const icons = {
    windows: (
      <svg viewBox="0 0 24 24" style={s} fill={color}>
        <path d="M3 5.6L10.5 4.5V11.5H3V5.6ZM11.5 4.35L21 3V11.5H11.5V4.35ZM3 12.5H10.5V19.5L3 18.4V12.5ZM11.5 12.5H21V21L11.5 19.65V12.5Z"/>
      </svg>
    ),
    ubuntu: (
      <svg viewBox="0 0 24 24" style={s} fill={color}>
        <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/>
        <circle cx="12" cy="4" r="2" fill={color}/>
        <circle cx="19.2" cy="16" r="2" fill={color}/>
        <circle cx="4.8" cy="16" r="2" fill={color}/>
        <line x1="12" y1="4" x2="12" y2="12" stroke={color} strokeWidth="1.5"/>
        <line x1="19.2" y1="16" x2="12" y2="12" stroke={color} strokeWidth="1.5"/>
        <line x1="4.8" y1="16" x2="12" y2="12" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),
    debian: (
      <svg viewBox="0 0 24 24" style={s} fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.49 0-4.5-2.01-4.5-4.5S8.51 7.5 11 7.5c1.5 0 2.83.74 3.65 1.87-.37-.08-.75-.12-1.15-.12-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5c.97 0 1.87-.31 2.6-.83A4.48 4.48 0 0111 16.5z"/>
      </svg>
    ),
    arch: (
      <svg viewBox="0 0 24 24" style={s} fill={color}>
        <path d="M12 2L2 20h20L12 2zm0 3.5l7 12.5H5l7-12.5z" opacity="0.3"/>
        <path d="M12 2L2 20h4l6-15.5L18 20h4L12 2z"/>
      </svg>
    ),
    default: (
      <svg viewBox="0 0 24 24" style={s} fill={color}>
        <rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  }
  return icons[type] || icons.default
}

// ── Badge ─────────────────────────────────────────────────────────────────
const Badge = ({ type }) => {
  const c = badgeColors[type] || badgeColors.stable
  return (
    <span style={{
      display: 'inline-block', fontSize: 10, fontWeight: 500,
      padding: '2px 8px', borderRadius: 20, letterSpacing: '0.04em',
      background: c.bg, color: c.text, textTransform: 'uppercase',
    }}>{type}</span>
  )
}

// ── OS Card ───────────────────────────────────────────────────────────────
const OsCard = ({ os, selected, onClick }) => (
  <div
    className={`os-card ${selected ? 'selected' : ''}`}
    onClick={() => onClick(os)}
    style={{ '--accent': os.color }}
  >
    {selected && <div className="selected-dot" />}
    <div className="os-card-icon">
      <OsIcon type={os.icon} color={os.color} size={26} />
    </div>
    <div className="os-card-name">{os.name}</div>
    <div className="os-card-version">{os.version}</div>
    <div className="os-card-meta">{os.arch} · {os.size}</div>
    <div style={{ marginTop: 8 }}><Badge type={os.badge} /></div>
  </div>
)

// ── Progress Ring ─────────────────────────────────────────────────────────
const ProgressRing = ({ pct, size = 60, color = '#6c63ff' }) => {
  const r = (size - 8) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#2a2a35" strokeWidth="4"/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="4"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 0.3s' }}
      />
      <text x={size/2} y={size/2+5} textAnchor="middle" fill="#e8e8f0" fontSize="13" fontWeight="500">{pct}%</text>
    </svg>
  )
}

// ── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [usbDrives, setUsbDrives] = useState([])
  const [selectedDrive, setSelectedDrive] = useState(null)
  const [phase, setPhase] = useState('idle') // idle | downloading | flashing | done | error
  const [downloadPct, setDownloadPct] = useState(0)
  const [flashPct, setFlashPct] = useState(0)
  const [isoPath, setIsoPath] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [page, setPage] = useState('library') // library | flash

  const filtered = catalog.filter(os => {
    const matchCat = category === 'all' || os.category === category
    const matchSearch = os.name.toLowerCase().includes(search.toLowerCase()) ||
      os.version.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const loadDrives = useCallback(async () => {
    const drives = await api.getUSBDrives()
    setUsbDrives(drives)
    if (drives.length > 0) setSelectedDrive(drives[0])
  }, [])

  useEffect(() => {
    loadDrives()
    const interval = setInterval(loadDrives, 5000)
    return () => clearInterval(interval)
  }, [loadDrives])

  const handleSelectOS = (os) => {
    setSelected(os)
    setPhase('idle')
    setDownloadPct(0)
    setFlashPct(0)
    setIsoPath(null)
  }

  const handleDownloadAndFlash = async () => {
    if (!selected) return

    // Check if URL is placeholder
    if (selected.downloadUrl.includes('YOUR_URL_HERE')) {
      setErrorMsg(`Please set a real download URL for ${selected.name} in src/os-catalog.js`)
      setPhase('error')
      return
    }

    try {
      setPhase('downloading')
      setDownloadPct(0)

      api.removeDownloadListener()
      api.onDownloadProgress(({ pct }) => setDownloadPct(pct))

      const path = await api.downloadISO({ url: selected.downloadUrl, filename: selected.filename })
      setIsoPath(path)

      if (selectedDrive) {
        setPhase('flashing')
        setFlashPct(0)
        api.removeFlashListener()
        let fakePct = 0
        const fakeInterval = setInterval(() => {
          fakePct = Math.min(fakePct + Math.random() * 3, 98)
          setFlashPct(Math.round(fakePct))
        }, 400)

        await api.flashISO({ isoPath: path, device: selectedDrive.device })
        clearInterval(fakeInterval)
        setFlashPct(100)
      }

      setPhase('done')
    } catch (e) {
      setErrorMsg(e.message || 'An error occurred')
      setPhase('error')
    }
  }

  const handleReset = () => {
    setPhase('idle')
    setDownloadPct(0)
    setFlashPct(0)
    setErrorMsg('')
  }

  return (
    <div className="app-root">
      {/* Title bar */}
      <div className="titlebar">
        <div className="titlebar-drag">
          <span className="app-wordmark">⬡ FlashOS</span>
        </div>
        <div className="titlebar-controls">
          <button onClick={api.minimize} className="tb-btn tb-min" aria-label="Minimize"><span/></button>
          <button onClick={api.maximize} className="tb-btn tb-max" aria-label="Maximize"><span/></button>
          <button onClick={api.close} className="tb-btn tb-close" aria-label="Close"><span/></button>
        </div>
      </div>

      <div className="app-body">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <div className="nav-section-label">Browse</div>
            {categories.map(c => (
              <button key={c.id}
                className={`nav-item ${category === c.id && page === 'library' ? 'active' : ''}`}
                onClick={() => { setCategory(c.id); setPage('library') }}>
                <span className="nav-icon">
                  {c.id === 'all' && '◈'}
                  {c.id === 'windows' && '⊞'}
                  {c.id === 'linux' && '🐧'}
                </span>
                {c.label}
              </button>
            ))}

            <div className="nav-section-label" style={{ marginTop: 24 }}>Tools</div>
            <button className={`nav-item ${page === 'flash' ? 'active' : ''}`}
              onClick={() => setPage('flash')}>
              <span className="nav-icon">⚡</span> Flash Manager
            </button>
          </nav>

          {selected && (
            <div className="sidebar-selected">
              <div className="sidebar-selected-label">Selected</div>
              <div className="sidebar-selected-name">{selected.name}</div>
              <div className="sidebar-selected-ver">{selected.version}</div>
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
                  {category === 'all' ? 'All Systems' : category === 'windows' ? 'Windows' : 'Linux Distros'}
                  <span className="count-badge">{filtered.length}</span>
                </h1>
                <div className="search-wrap">
                  <span className="search-icon">⌕</span>
                  <input
                    className="search-input"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="os-grid">
                {filtered.map(os => (
                  <OsCard key={os.id} os={os} selected={selected?.id === os.id} onClick={handleSelectOS} />
                ))}
              </div>
            </>
          )}

          {page === 'flash' && (
            <div className="flash-page">
              <h1 className="page-title">Flash Manager</h1>

              {!selected ? (
                <div className="empty-state">
                  <div className="empty-icon">◉</div>
                  <div className="empty-text">Select an OS from the library first</div>
                  <button className="btn-secondary" onClick={() => setPage('library')}>Browse Library</button>
                </div>
              ) : (
                <div className="flash-layout">
                  {/* Left: OS info */}
                  <div className="flash-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                      <div className="flash-os-icon" style={{ background: selected.color + '22' }}>
                        <OsIcon type={selected.icon} color={selected.color} size={36} />
                      </div>
                      <div>
                        <div className="flash-os-name">{selected.name}</div>
                        <div className="flash-os-ver">{selected.version} · {selected.arch} · {selected.size}</div>
                      </div>
                    </div>
                    <div className="flash-desc">{selected.description}</div>

                    <div className="flash-divider" />

                    {/* USB selector */}
                    <div className="usb-section">
                      <div className="usb-label">
                        <span>⊔</span> Target USB Drive
                        <button className="refresh-btn" onClick={loadDrives}>↻ Refresh</button>
                      </div>
                      {usbDrives.length === 0 ? (
                        <div className="no-usb">No USB drives detected. Plug one in and refresh.</div>
                      ) : (
                        <div className="usb-list">
                          {usbDrives.map(drive => (
                            <label key={drive.device} className={`usb-option ${selectedDrive?.device === drive.device ? 'selected' : ''}`}>
                              <input type="radio" name="drive" value={drive.device}
                                checked={selectedDrive?.device === drive.device}
                                onChange={() => setSelectedDrive(drive)} />
                              <span className="usb-name">{drive.name}</span>
                              <span className="usb-dev">{drive.device}</span>
                              <span className="usb-size">{drive.size}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Action panel */}
                  <div className="flash-card action-card">
                    {phase === 'idle' && (
                      <>
                        <div className="action-title">Ready to Flash</div>
                        <div className="action-steps">
                          <div className="step-row done">
                            <span className="step-dot done">✓</span>
                            <span>OS selected: {selected.name} {selected.version}</span>
                          </div>
                          <div className={`step-row ${selectedDrive ? 'done' : 'pending'}`}>
                            <span className={`step-dot ${selectedDrive ? 'done' : 'pending'}`}>
                              {selectedDrive ? '✓' : '○'}
                            </span>
                            <span>{selectedDrive ? `USB: ${selectedDrive.name}` : 'Select a USB drive'}</span>
                          </div>
                          <div className="step-row pending">
                            <span className="step-dot pending">○</span>
                            <span>Download &amp; Flash</span>
                          </div>
                        </div>
                        <div className="warning-box">
                          ⚠ All data on the selected USB drive will be erased.
                        </div>
                        <button
                          className="btn-flash"
                          disabled={!selectedDrive}
                          onClick={handleDownloadAndFlash}
                        >
                          ⚡ Download &amp; Flash
                        </button>
                      </>
                    )}

                    {phase === 'downloading' && (
                      <div className="progress-state">
                        <ProgressRing pct={downloadPct} color={selected.color} size={80} />
                        <div className="progress-label">Downloading ISO...</div>
                        <div className="progress-sub">{selected.filename}</div>
                      </div>
                    )}

                    {phase === 'flashing' && (
                      <div className="progress-state">
                        <ProgressRing pct={flashPct} color="#f97316" size={80} />
                        <div className="progress-label">Flashing to USB...</div>
                        <div className="progress-sub">{selectedDrive?.name}</div>
                        <div className="flash-warning">Do not remove the USB drive.</div>
                      </div>
                    )}

                    {phase === 'done' && (
                      <div className="done-state">
                        <div className="done-icon">✓</div>
                        <div className="done-title">Flash Complete</div>
                        <div className="done-sub">Your USB is ready. Reboot and select the USB as boot device.</div>
                        <button className="btn-secondary" onClick={() => isoPath && api.openFolder(isoPath)}>Open ISO Folder</button>
                        <button className="btn-flash" onClick={handleReset} style={{ marginTop: 8 }}>Flash Another</button>
                      </div>
                    )}

                    {phase === 'error' && (
                      <div className="error-state">
                        <div className="error-icon">✕</div>
                        <div className="error-title">Error</div>
                        <div className="error-msg">{errorMsg}</div>
                        <button className="btn-flash" onClick={handleReset} style={{ marginTop: 16 }}>Try Again</button>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <OsIcon type={selected.icon} color={selected.color} size={20} />
            <div>
              <div className="bb-name">{selected.name} {selected.version}</div>
              <div className="bb-meta">{selected.arch} · {selected.size}</div>
            </div>
          </div>
          <div className="bb-actions">
            {usbDrives.length > 0 ? (
              <div className="usb-pill">⊔ {usbDrives[0].name}</div>
            ) : (
              <div className="usb-pill warn">No USB detected</div>
            )}
            <button className="btn-flash" onClick={() => setPage('flash')}>
              ⚡ Flash This OS
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
