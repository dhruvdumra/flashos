// os-catalog.js
//
// Two-tier catalog system:
// 1. BUNDLED catalog ships with the app (always works, no network needed)
// 2. REMOTE catalog from GitHub overrides it (updated when you push to GitHub)
//
// The app shows the bundled catalog immediately on launch. Then in the
// background, it tries to fetch a newer version from GitHub. If that works,
// the UI refreshes with the new catalog. If not, you keep using the bundled one.

// ⚠️ CHANGE THIS to your GitHub username + repo name
const REMOTE_CATALOG_URL = 'https://raw.githubusercontent.com/RAGExSOULL/flashos/main/catalog.json'

// ═══════════════════════════════════════════════════════════════════════════
// BUNDLED CATALOG
// ═══════════════════════════════════════════════════════════════════════════
export const bundledCatalog = {
  version: 1,
  updated: 'bundled',

  categories: [
    { id: 'all',     label: 'All' },
    { id: 'windows', label: 'Windows' },
    { id: 'linux',   label: 'Linux' },
  ],

  badgeColors: {
    latest:   { bg: '#1a1530', text: '#a78bfa' },
    lts:      { bg: '#0a1e35', text: '#60a5fa' },
    stable:   { bg: '#0e2e1a', text: '#4ade80' },
    rolling:  { bg: '#1a2010', text: '#86efac' },
    legacy:   { bg: '#2a1f10', text: '#fbbf24' },
    security: { bg: '#1a1020', text: '#f472b6' },
    server:   { bg: '#101a24', text: '#7dd3fc' },
  },

  catalog: [

    // ───────────────────────────────────────────────────────────────
    // WINDOWS
    // ───────────────────────────────────────────────────────────────
    {
      id: 'windows',
      name: 'Windows',
      category: 'windows',
      color: '#0078d4',
      icon: 'windows',
      description: 'Microsoft\'s desktop operating system. Used by billions worldwide.',
      editions: [
        {
          id: 'win11-eval',
          name: '11 Enterprise (eval)',
          badge: 'latest',
          versions: [
            { id: 'w11-ent-eval', label: 'Latest (90-day eval)', arch: '64-bit', size: '5.8 GB', sizeBytes: 6230000000, filename: 'win11-enterprise-eval.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2195280' },
          ],
        },
        {
          id: 'win11-ltsc',
          name: '11 IoT Enterprise LTSC',
          badge: 'lts',
          versions: [
            { id: 'w11-ltsc-2024', label: '2024 LTSC', arch: '64-bit', size: '5.0 GB', sizeBytes: 5360000000, filename: 'win11-ltsc-2024.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2289948' },
          ],
        },
        {
          id: 'win10-eval',
          name: '10 Enterprise (eval)',
          badge: 'lts',
          versions: [
            { id: 'w10-ent-eval', label: '22H2 (90-day eval)', arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'win10-enterprise-eval.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2195174' },
          ],
        },
        {
          id: 'win10-ltsc',
          name: '10 Enterprise LTSC',
          badge: 'lts',
          versions: [
            { id: 'w10-ltsc-2021', label: 'LTSC 2021', arch: '64-bit', size: '4.5 GB', sizeBytes: 4830000000, filename: 'win10-ltsc-2021.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2195286' },
          ],
        },
        {
          id: 'win8',
          name: '8.1 (archive)',
          badge: 'legacy',
          versions: [
            { id: 'w81-pro', label: '8.1 Pro', arch: '64-bit', size: '4.1 GB', sizeBytes: 4400000000, filename: 'win81-pro.iso', downloadUrl: 'https://archive.org/download/windows-8.1-aio-32-in-1-en-us-x64-april-2018/Windows%208.1%20AIO%2032%20in%201%20%28x64%29%20-%20DIGITAL%20RIVER.iso' },
          ],
        },
        {
          id: 'win7',
          name: '7 (archive)',
          badge: 'legacy',
          versions: [
            { id: 'w7-ult-sp1',  label: 'SP1 Ultimate 64-bit',  arch: '64-bit', size: '3.2 GB', sizeBytes: 3440000000, filename: 'win7-ultimate-sp1.iso', downloadUrl: 'https://archive.org/download/win-7-ultimate-with-sp-1-english-x-64-bit/en_windows_7_ultimate_with_sp1_x64_dvd_u_677332.iso' },
            { id: 'w7-pro-sp1',  label: 'SP1 Professional 64-bit', arch: '64-bit', size: '3.1 GB', sizeBytes: 3330000000, filename: 'win7-pro-sp1.iso',     downloadUrl: 'https://archive.org/download/Windows7ProfessionalSP1English/en_windows_7_professional_with_sp1_x64_dvd_u_676939.iso' },
            { id: 'w7-home-sp1', label: 'SP1 Home Premium 64-bit', arch: '64-bit', size: '3.0 GB', sizeBytes: 3220000000, filename: 'win7-home-sp1.iso',    downloadUrl: 'https://archive.org/download/Windows7HomePremiumSP1English/en_windows_7_home_premium_with_sp1_x64_dvd_u_676549.iso' },
          ],
        },
        {
          id: 'winvista',
          name: 'Vista (archive)',
          badge: 'legacy',
          versions: [
            { id: 'vista-ult-sp2', label: 'SP2 Ultimate 64-bit', arch: '64-bit', size: '3.5 GB', sizeBytes: 3760000000, filename: 'vista-ultimate-sp2.iso', downloadUrl: 'https://archive.org/download/WindowsVistaUltimateSP2x64English/en_windows_vista_ultimate_with_service_pack_2_x64_dvd_342267.iso' },
          ],
        },
        {
          id: 'winxp',
          name: 'XP (archive)',
          badge: 'legacy',
          versions: [
            { id: 'xp-pro-sp3', label: 'SP3 Professional 32-bit', arch: '32-bit', size: '700 MB', sizeBytes: 730000000, filename: 'winxp-pro-sp3.iso', downloadUrl: 'https://archive.org/download/WinXPProSP3x86/en_windows_xp_professional_with_service_pack_3_x86_cd_x14-80428.iso' },
          ],
        },
        {
          id: 'winserver',
          name: 'Server (eval)',
          badge: 'server',
          versions: [
            { id: 'srv-2025', label: '2025 Standard (eval)', arch: '64-bit', size: '5.8 GB', sizeBytes: 6230000000, filename: 'server-2025-eval.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2289234' },
            { id: 'srv-2022', label: '2022 Standard (eval)', arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'server-2022-eval.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2195493' },
            { id: 'srv-2019', label: '2019 Standard (eval)', arch: '64-bit', size: '4.8 GB', sizeBytes: 5150000000, filename: 'server-2019-eval.iso', downloadUrl: 'https://go.microsoft.com/fwlink/p/?LinkID=2195167' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // UBUNTU
    // ───────────────────────────────────────────────────────────────
    {
      id: 'ubuntu',
      name: 'Ubuntu',
      category: 'linux',
      color: '#e95420',
      icon: 'ubuntu',
      description: 'The most popular Linux distribution. Beginner-friendly and well-supported.',
      editions: [
        {
          id: 'ubuntu-desktop',
          name: 'Desktop',
          badge: 'lts',
          versions: [
            { id: 'u-24.04', label: '24.04 LTS (Noble)',  arch: '64-bit', size: '6.0 GB', sizeBytes: 6440000000, filename: 'ubuntu-24.04-desktop.iso', downloadUrl: 'https://releases.ubuntu.com/24.04/ubuntu-24.04.1-desktop-amd64.iso' },
            { id: 'u-22.04', label: '22.04 LTS (Jammy)',  arch: '64-bit', size: '4.7 GB', sizeBytes: 5050000000, filename: 'ubuntu-22.04-desktop.iso', downloadUrl: 'https://releases.ubuntu.com/22.04/ubuntu-22.04.5-desktop-amd64.iso' },
            { id: 'u-20.04', label: '20.04 LTS (Focal)',  arch: '64-bit', size: '3.4 GB', sizeBytes: 3650000000, filename: 'ubuntu-20.04-desktop.iso', downloadUrl: 'https://releases.ubuntu.com/20.04/ubuntu-20.04.6-desktop-amd64.iso' },
            { id: 'u-18.04', label: '18.04 LTS (Bionic)', arch: '64-bit', size: '2.0 GB', sizeBytes: 2150000000, filename: 'ubuntu-18.04-desktop.iso', downloadUrl: 'https://releases.ubuntu.com/18.04/ubuntu-18.04.6-desktop-amd64.iso' },
            { id: 'u-16.04', label: '16.04 LTS (Xenial)', arch: '64-bit', size: '1.6 GB', sizeBytes: 1720000000, filename: 'ubuntu-16.04-desktop.iso', downloadUrl: 'https://releases.ubuntu.com/16.04/ubuntu-16.04.7-desktop-amd64.iso' },
            { id: 'u-14.04', label: '14.04 LTS (Trusty)', arch: '64-bit', size: '1.1 GB', sizeBytes: 1180000000, filename: 'ubuntu-14.04-desktop.iso', downloadUrl: 'https://releases.ubuntu.com/14.04/ubuntu-14.04.6-desktop-amd64.iso' },
          ],
        },
        {
          id: 'ubuntu-server',
          name: 'Server',
          badge: 'server',
          versions: [
            { id: 'us-24.04', label: '24.04 LTS Server', arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'ubuntu-24.04-server.iso', downloadUrl: 'https://releases.ubuntu.com/24.04/ubuntu-24.04.1-live-server-amd64.iso' },
            { id: 'us-22.04', label: '22.04 LTS Server', arch: '64-bit', size: '2.0 GB', sizeBytes: 2150000000, filename: 'ubuntu-22.04-server.iso', downloadUrl: 'https://releases.ubuntu.com/22.04/ubuntu-22.04.5-live-server-amd64.iso' },
            { id: 'us-20.04', label: '20.04 LTS Server', arch: '64-bit', size: '1.3 GB', sizeBytes: 1390000000, filename: 'ubuntu-20.04-server.iso', downloadUrl: 'https://releases.ubuntu.com/20.04/ubuntu-20.04.6-live-server-amd64.iso' },
          ],
        },
        {
          id: 'kubuntu',
          name: 'Kubuntu (KDE)',
          badge: 'stable',
          versions: [
            { id: 'k-24.04', label: '24.04 LTS', arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'kubuntu-24.04.iso', downloadUrl: 'https://cdimage.ubuntu.com/kubuntu/releases/24.04/release/kubuntu-24.04.1-desktop-amd64.iso' },
            { id: 'k-22.04', label: '22.04 LTS', arch: '64-bit', size: '4.0 GB', sizeBytes: 4290000000, filename: 'kubuntu-22.04.iso', downloadUrl: 'https://cdimage.ubuntu.com/kubuntu/releases/22.04/release/kubuntu-22.04.5-desktop-amd64.iso' },
          ],
        },
        {
          id: 'xubuntu',
          name: 'Xubuntu (XFCE)',
          badge: 'stable',
          versions: [
            { id: 'x-24.04', label: '24.04 LTS', arch: '64-bit', size: '3.5 GB', sizeBytes: 3760000000, filename: 'xubuntu-24.04.iso', downloadUrl: 'https://cdimage.ubuntu.com/xubuntu/releases/24.04/release/xubuntu-24.04.1-desktop-amd64.iso' },
            { id: 'x-22.04', label: '22.04 LTS', arch: '64-bit', size: '2.8 GB', sizeBytes: 3010000000, filename: 'xubuntu-22.04.iso', downloadUrl: 'https://cdimage.ubuntu.com/xubuntu/releases/22.04/release/xubuntu-22.04.5-desktop-amd64.iso' },
          ],
        },
        {
          id: 'lubuntu',
          name: 'Lubuntu (lightweight)',
          badge: 'stable',
          versions: [
            { id: 'l-24.04', label: '24.04 LTS', arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'lubuntu-24.04.iso', downloadUrl: 'https://cdimage.ubuntu.com/lubuntu/releases/24.04/release/lubuntu-24.04.1-desktop-amd64.iso' },
          ],
        },
        {
          id: 'ubuntu-studio',
          name: 'Studio (creative)',
          badge: 'stable',
          versions: [
            { id: 'studio-24.04', label: '24.04 LTS', arch: '64-bit', size: '5.6 GB', sizeBytes: 6010000000, filename: 'ubuntustudio-24.04.iso', downloadUrl: 'https://cdimage.ubuntu.com/ubuntustudio/releases/24.04/release/ubuntustudio-24.04.1-dvd-amd64.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // DEBIAN
    // ───────────────────────────────────────────────────────────────
    {
      id: 'debian',
      name: 'Debian',
      category: 'linux',
      color: '#a80030',
      icon: 'debian',
      description: 'The universal OS. Free, stable, the foundation many distros are built on.',
      editions: [
        {
          id: 'debian-live',
          name: 'Live with installer',
          badge: 'stable',
          versions: [
            { id: 'd-12-gnome',    label: '12 Bookworm (GNOME)',    arch: '64-bit', size: '2.8 GB', sizeBytes: 3010000000, filename: 'debian-12-gnome.iso',    downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-gnome.iso' },
            { id: 'd-12-kde',      label: '12 Bookworm (KDE)',      arch: '64-bit', size: '3.1 GB', sizeBytes: 3330000000, filename: 'debian-12-kde.iso',      downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-kde.iso' },
            { id: 'd-12-xfce',     label: '12 Bookworm (XFCE)',     arch: '64-bit', size: '2.5 GB', sizeBytes: 2680000000, filename: 'debian-12-xfce.iso',     downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-xfce.iso' },
            { id: 'd-12-cinnamon', label: '12 Bookworm (Cinnamon)', arch: '64-bit', size: '2.8 GB', sizeBytes: 3010000000, filename: 'debian-12-cinnamon.iso', downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-cinnamon.iso' },
            { id: 'd-12-mate',     label: '12 Bookworm (MATE)',     arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'debian-12-mate.iso',     downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-mate.iso' },
          ],
        },
        {
          id: 'debian-netinst',
          name: 'Netinstall (small)',
          badge: 'stable',
          versions: [
            { id: 'dn-12', label: '12 Bookworm', arch: '64-bit', size: '630 MB', sizeBytes: 660000000, filename: 'debian-12-netinst.iso', downloadUrl: 'https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.7.0-amd64-netinst.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // FEDORA
    // ───────────────────────────────────────────────────────────────
    {
      id: 'fedora',
      name: 'Fedora',
      category: 'linux',
      color: '#294172',
      icon: 'fedora',
      description: 'Cutting-edge Linux backed by Red Hat. New releases every six months.',
      editions: [
        {
          id: 'fedora-workstation',
          name: 'Workstation (GNOME)',
          badge: 'latest',
          versions: [
            { id: 'f-41', label: '41', arch: '64-bit', size: '2.3 GB', sizeBytes: 2470000000, filename: 'fedora-41-workstation.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-41-1.4.iso' },
            { id: 'f-40', label: '40', arch: '64-bit', size: '2.3 GB', sizeBytes: 2470000000, filename: 'fedora-40-workstation.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/40/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-40-1.14.iso' },
          ],
        },
        {
          id: 'fedora-spins',
          name: 'Spins (alternate DEs)',
          badge: 'stable',
          versions: [
            { id: 'f-41-kde',      label: '41 KDE Plasma', arch: '64-bit', size: '2.4 GB', sizeBytes: 2580000000, filename: 'fedora-41-kde.iso',      downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-KDE-Live-x86_64-41-1.4.iso' },
            { id: 'f-41-xfce',     label: '41 XFCE',       arch: '64-bit', size: '1.8 GB', sizeBytes: 1930000000, filename: 'fedora-41-xfce.iso',     downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-Xfce-Live-x86_64-41-1.4.iso' },
            { id: 'f-41-mate',     label: '41 MATE',       arch: '64-bit', size: '2.1 GB', sizeBytes: 2260000000, filename: 'fedora-41-mate.iso',     downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-MATE_Compiz-Live-x86_64-41-1.4.iso' },
            { id: 'f-41-cinnamon', label: '41 Cinnamon',   arch: '64-bit', size: '2.2 GB', sizeBytes: 2360000000, filename: 'fedora-41-cinnamon.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-Cinnamon-Live-x86_64-41-1.4.iso' },
          ],
        },
        {
          id: 'fedora-server',
          name: 'Server',
          badge: 'server',
          versions: [
            { id: 'fs-41', label: '41 Server', arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'fedora-41-server.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Server/x86_64/iso/Fedora-Server-dvd-x86_64-41-1.4.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // ARCH
    // ───────────────────────────────────────────────────────────────
    {
      id: 'arch',
      name: 'Arch Linux',
      category: 'linux',
      color: '#1793d1',
      icon: 'arch',
      description: 'Rolling release with a minimal base. Build it your way. Not for beginners.',
      editions: [
        {
          id: 'arch-iso',
          name: 'Installer',
          badge: 'rolling',
          versions: [
            { id: 'arch-latest', label: 'Latest (monthly)', arch: '64-bit', size: '1.1 GB', sizeBytes: 1180000000, filename: 'archlinux-latest.iso', downloadUrl: 'https://geo.mirror.pkgbuild.com/iso/latest/archlinux-x86_64.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // LINUX MINT
    // ───────────────────────────────────────────────────────────────
    {
      id: 'mint',
      name: 'Linux Mint',
      category: 'linux',
      color: '#87cf3e',
      icon: 'mint',
      description: 'Elegant and familiar. Most popular pick for people switching from Windows.',
      editions: [
        {
          id: 'mint-cinnamon',
          name: 'Cinnamon (flagship)',
          badge: 'lts',
          versions: [
            { id: 'm-22-cinnamon',   label: '22 Wilma',      arch: '64-bit', size: '2.9 GB', sizeBytes: 3110000000, filename: 'mint-22-cinnamon.iso',   downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/22/linuxmint-22-cinnamon-64bit.iso' },
            { id: 'm-21.3-cinnamon', label: '21.3 Virginia', arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'mint-21.3-cinnamon.iso', downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/21.3/linuxmint-21.3-cinnamon-64bit.iso' },
            { id: 'm-20.3-cinnamon', label: '20.3 Una',      arch: '64-bit', size: '2.2 GB', sizeBytes: 2360000000, filename: 'mint-20.3-cinnamon.iso', downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/20.3/linuxmint-20.3-cinnamon-64bit.iso' },
          ],
        },
        {
          id: 'mint-xfce',
          name: 'XFCE (lightweight)',
          badge: 'stable',
          versions: [
            { id: 'm-22-xfce',   label: '22 Wilma',      arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'mint-22-xfce.iso',   downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/22/linuxmint-22-xfce-64bit.iso' },
            { id: 'm-21.3-xfce', label: '21.3 Virginia', arch: '64-bit', size: '2.4 GB', sizeBytes: 2580000000, filename: 'mint-21.3-xfce.iso', downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/21.3/linuxmint-21.3-xfce-64bit.iso' },
          ],
        },
        {
          id: 'mint-mate',
          name: 'MATE (classic)',
          badge: 'stable',
          versions: [
            { id: 'm-22-mate', label: '22 Wilma', arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'mint-22-mate.iso', downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/22/linuxmint-22-mate-64bit.iso' },
          ],
        },
        {
          id: 'lmde',
          name: 'LMDE (Debian Edition)',
          badge: 'stable',
          versions: [
            { id: 'lmde-6', label: '6 Faye', arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'lmde-6.iso', downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/debian/lmde-6-cinnamon-64bit.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // POP!_OS
    // ───────────────────────────────────────────────────────────────
    {
      id: 'popos',
      name: 'Pop!_OS',
      category: 'linux',
      color: '#48b9c7',
      icon: 'pop',
      description: 'Made by System76. Tiling windows, great GPU support, developer-focused.',
      editions: [
        {
          id: 'pop-intel',
          name: 'Intel / AMD',
          badge: 'lts',
          versions: [
            { id: 'p-22.04',    label: '22.04 LTS', arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'pop-22.04-intel.iso', downloadUrl: 'https://iso.pop-os.org/22.04/amd64/intel/49/pop-os_22.04_amd64_intel_49.iso' },
          ],
        },
        {
          id: 'pop-nvidia',
          name: 'NVIDIA (drivers included)',
          badge: 'lts',
          versions: [
            { id: 'p-22.04-nv', label: '22.04 LTS NVIDIA', arch: '64-bit', size: '3.0 GB', sizeBytes: 3220000000, filename: 'pop-22.04-nvidia.iso', downloadUrl: 'https://iso.pop-os.org/22.04/amd64/nvidia/49/pop-os_22.04_amd64_nvidia_49.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // MANJARO
    // ───────────────────────────────────────────────────────────────
    {
      id: 'manjaro',
      name: 'Manjaro',
      category: 'linux',
      color: '#35bf5c',
      icon: 'manjaro',
      description: 'Arch-based but user-friendly. Rolling release with polished defaults.',
      editions: [
        {
          id: 'manjaro-gnome',
          name: 'GNOME',
          badge: 'rolling',
          versions: [
            { id: 'manj-gnome', label: 'Latest', arch: '64-bit', size: '3.6 GB', sizeBytes: 3870000000, filename: 'manjaro-gnome.iso', downloadUrl: 'https://download.manjaro.org/gnome/24.2.1/manjaro-gnome-24.2.1-241216-linux612.iso' },
          ],
        },
        {
          id: 'manjaro-kde',
          name: 'KDE',
          badge: 'rolling',
          versions: [
            { id: 'manj-kde',   label: 'Latest', arch: '64-bit', size: '3.7 GB', sizeBytes: 3970000000, filename: 'manjaro-kde.iso',   downloadUrl: 'https://download.manjaro.org/kde/24.2.1/manjaro-kde-24.2.1-241216-linux612.iso' },
          ],
        },
        {
          id: 'manjaro-xfce',
          name: 'XFCE',
          badge: 'rolling',
          versions: [
            { id: 'manj-xfce',  label: 'Latest', arch: '64-bit', size: '3.4 GB', sizeBytes: 3650000000, filename: 'manjaro-xfce.iso',  downloadUrl: 'https://download.manjaro.org/xfce/24.2.1/manjaro-xfce-24.2.1-241216-linux612.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // KALI LINUX
    // ───────────────────────────────────────────────────────────────
    {
      id: 'kali',
      name: 'Kali Linux',
      category: 'linux',
      color: '#367bf0',
      icon: 'kali',
      description: 'For security professionals. Pre-loaded with 600+ penetration testing tools.',
      editions: [
        {
          id: 'kali-installer',
          name: 'Installer (full)',
          badge: 'security',
          versions: [
            { id: 'k-2024.4', label: '2024.4', arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'kali-2024.4-installer.iso', downloadUrl: 'https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso' },
            { id: 'k-2024.3', label: '2024.3', arch: '64-bit', size: '4.4 GB', sizeBytes: 4720000000, filename: 'kali-2024.3-installer.iso', downloadUrl: 'https://cdimage.kali.org/kali-2024.3/kali-linux-2024.3-installer-amd64.iso' },
          ],
        },
        {
          id: 'kali-live',
          name: 'Live (try without install)',
          badge: 'security',
          versions: [
            { id: 'k-2024.4-live', label: '2024.4 Live', arch: '64-bit', size: '4.2 GB', sizeBytes: 4510000000, filename: 'kali-2024.4-live.iso', downloadUrl: 'https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-live-amd64.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // ELEMENTARY OS
    // ───────────────────────────────────────────────────────────────
    {
      id: 'elementary',
      name: 'elementary OS',
      category: 'linux',
      color: '#64baff',
      icon: 'elementary',
      description: 'Beautiful and polished. macOS-like, privacy-focused, pay-what-you-want.',
      editions: [
        {
          id: 'eos',
          name: 'Desktop',
          badge: 'stable',
          versions: [
            { id: 'eos-7.1', label: '7.1 Horus', arch: '64-bit', size: '2.0 GB', sizeBytes: 2150000000, filename: 'elementary-7.1.iso', downloadUrl: 'https://sgp.dl.elementary.io/download/MCwsLDc=/elementaryos-7.1-stable.20230129rc.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // OPENSUSE
    // ───────────────────────────────────────────────────────────────
    {
      id: 'opensuse',
      name: 'openSUSE',
      category: 'linux',
      color: '#73ba25',
      icon: 'default',
      description: 'Solid Linux from Germany. YaST is famously good for system configuration.',
      editions: [
        {
          id: 'tumbleweed',
          name: 'Tumbleweed (rolling)',
          badge: 'rolling',
          versions: [
            { id: 'ts-latest', label: 'Latest snapshot', arch: '64-bit', size: '4.5 GB', sizeBytes: 4830000000, filename: 'opensuse-tumbleweed.iso', downloadUrl: 'https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-DVD-x86_64-Current.iso' },
          ],
        },
        {
          id: 'leap',
          name: 'Leap (stable)',
          badge: 'lts',
          versions: [
            { id: 'leap-15.6', label: '15.6', arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'opensuse-leap-15.6.iso', downloadUrl: 'https://download.opensuse.org/distribution/leap/15.6/iso/openSUSE-Leap-15.6-DVD-x86_64-Current.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // MX LINUX
    // ───────────────────────────────────────────────────────────────
    {
      id: 'mxlinux',
      name: 'MX Linux',
      category: 'linux',
      color: '#1a1a1a',
      icon: 'default',
      description: 'Debian-based with XFCE. Top rated on DistroWatch for years running.',
      editions: [
        {
          id: 'mx-xfce',
          name: 'XFCE',
          badge: 'stable',
          versions: [
            { id: 'mx-23',     label: '23.4 Libretto', arch: '64-bit', size: '1.9 GB', sizeBytes: 2040000000, filename: 'mx-23-xfce.iso', downloadUrl: 'https://sourceforge.net/projects/mx-linux/files/Final/Xfce/MX-23.4_x64.iso/download' },
          ],
        },
        {
          id: 'mx-kde',
          name: 'KDE',
          badge: 'stable',
          versions: [
            { id: 'mx-23-kde', label: '23.4 Libretto', arch: '64-bit', size: '2.5 GB', sizeBytes: 2680000000, filename: 'mx-23-kde.iso',  downloadUrl: 'https://sourceforge.net/projects/mx-linux/files/Final/KDE/MX-23.4_KDE_x64.iso/download' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // ALPINE LINUX
    // ───────────────────────────────────────────────────────────────
    {
      id: 'alpine',
      name: 'Alpine Linux',
      category: 'linux',
      color: '#0d597f',
      icon: 'default',
      description: 'Tiny, secure Linux popular for containers. Full ISO is only ~210 MB.',
      editions: [
        {
          id: 'alpine-standard',
          name: 'Standard',
          badge: 'stable',
          versions: [
            { id: 'a-3.20', label: '3.20', arch: '64-bit', size: '210 MB', sizeBytes: 220000000, filename: 'alpine-3.20.iso', downloadUrl: 'https://dl-cdn.alpinelinux.org/alpine/v3.20/releases/x86_64/alpine-standard-3.20.3-x86_64.iso' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────────────────────
    // ENDEAVOUR OS
    // ───────────────────────────────────────────────────────────────
    {
      id: 'endeavour',
      name: 'EndeavourOS',
      category: 'linux',
      color: '#7f3f97',
      icon: 'default',
      description: 'Arch made easy. Friendly installer but stays close to vanilla Arch.',
      editions: [
        {
          id: 'endeavour-iso',
          name: 'Installer',
          badge: 'rolling',
          versions: [
            { id: 'endeavour-latest', label: 'Latest', arch: '64-bit', size: '2.3 GB', sizeBytes: 2470000000, filename: 'endeavouros.iso', downloadUrl: 'https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Endeavour-Neo-2024.09.22.iso' },
          ],
        },
      ],
    },

  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// REMOTE FETCH
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Fetch the latest catalog from GitHub.
 * Returns the parsed catalog object on success, or null on any failure.
 * Caller falls back to bundledCatalog if this returns null.
 */
export async function fetchRemoteCatalog() {
  try {
    // Cache-bust with current timestamp so we never get a stale GitHub copy
    const url = `${REMOTE_CATALOG_URL}?t=${Date.now()}`
    console.log('[catalog] Fetching remote catalog from GitHub...')
    const res = await fetch(url, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store', 'Pragma': 'no-cache' },
    })
    if (!res.ok) {
      console.warn(`[catalog] Remote returned HTTP ${res.status}`)
      return null
    }
    const data = await res.json()
    if (!data || !Array.isArray(data.catalog)) {
      console.warn('[catalog] Remote returned invalid data')
      return null
    }
    console.log(`[catalog] Loaded ${data.catalog.length} OSes from GitHub (updated ${data.updated})`)
    return data
  } catch (e) {
    console.warn('[catalog] Could not fetch remote:', e.message)
    return null
  }
}