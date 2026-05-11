// os-catalog.js
//
// Comprehensive catalog of operating systems. Each "OS" can have multiple
// "editions" (e.g. Ubuntu Desktop / Server / Studio) and each edition can
// have multiple "versions" (24.04, 22.04, 20.04, etc).
//
// The UI lets users drill down: pick OS -> pick edition -> pick version
//
// URLs marked YOUR_URL_HERE need to be filled in (typically Windows or
// distros where you want to self-host the ISOs).
//
// All Linux URLs point to official mirrors and are stable.

export const catalog = [

  // ═══════════════════════════════════════════════════════════════════════
  // WINDOWS
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'windows',
    name: 'Windows',
    category: 'windows',
    color: '#0078d4',
    icon: 'windows',
    description: 'Microsoft\'s desktop operating system. Used by billions of people worldwide.',
    editions: [
      {
        id: 'win11',
        name: 'Windows 11',
        badge: 'latest',
        versions: [
          { id: '11-24h2-pro',     label: '24H2 Pro',          arch: '64-bit', size: '5.8 GB', sizeBytes: 6230000000, filename: 'win11-24h2-pro.iso',     downloadUrl: 'YOUR_URL_HERE/win11-24h2-pro.iso' },
          { id: '11-24h2-home',    label: '24H2 Home',         arch: '64-bit', size: '5.8 GB', sizeBytes: 6230000000, filename: 'win11-24h2-home.iso',    downloadUrl: 'YOUR_URL_HERE/win11-24h2-home.iso' },
          { id: '11-24h2-ent',     label: '24H2 Enterprise',   arch: '64-bit', size: '5.9 GB', sizeBytes: 6340000000, filename: 'win11-24h2-ent.iso',     downloadUrl: 'YOUR_URL_HERE/win11-24h2-ent.iso' },
          { id: '11-23h2-pro',     label: '23H2 Pro',          arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'win11-23h2-pro.iso',     downloadUrl: 'YOUR_URL_HERE/win11-23h2-pro.iso' },
          { id: '11-23h2-home',    label: '23H2 Home',         arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'win11-23h2-home.iso',    downloadUrl: 'YOUR_URL_HERE/win11-23h2-home.iso' },
          { id: '11-22h2-pro',     label: '22H2 Pro',          arch: '64-bit', size: '5.1 GB', sizeBytes: 5470000000, filename: 'win11-22h2-pro.iso',     downloadUrl: 'YOUR_URL_HERE/win11-22h2-pro.iso' },
          { id: '11-21h2-pro',     label: '21H2 (original)',   arch: '64-bit', size: '5.0 GB', sizeBytes: 5360000000, filename: 'win11-21h2-pro.iso',     downloadUrl: 'YOUR_URL_HERE/win11-21h2-pro.iso' },
        ],
      },
      {
        id: 'win10',
        name: 'Windows 10',
        badge: 'lts',
        versions: [
          { id: '10-22h2-pro',     label: '22H2 Pro',          arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'win10-22h2-pro.iso',     downloadUrl: 'YOUR_URL_HERE/win10-22h2-pro.iso' },
          { id: '10-22h2-home',    label: '22H2 Home',         arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'win10-22h2-home.iso',    downloadUrl: 'YOUR_URL_HERE/win10-22h2-home.iso' },
          { id: '10-22h2-ent',     label: '22H2 Enterprise',   arch: '64-bit', size: '5.5 GB', sizeBytes: 5910000000, filename: 'win10-22h2-ent.iso',     downloadUrl: 'YOUR_URL_HERE/win10-22h2-ent.iso' },
          { id: '10-ltsc-2021',    label: 'LTSC 2021',         arch: '64-bit', size: '4.5 GB', sizeBytes: 4830000000, filename: 'win10-ltsc-2021.iso',    downloadUrl: 'YOUR_URL_HERE/win10-ltsc-2021.iso' },
          { id: '10-ltsc-2019',    label: 'LTSC 2019',         arch: '64-bit', size: '4.4 GB', sizeBytes: 4720000000, filename: 'win10-ltsc-2019.iso',    downloadUrl: 'YOUR_URL_HERE/win10-ltsc-2019.iso' },
          { id: '10-21h2-pro',     label: '21H2 Pro',          arch: '64-bit', size: '5.3 GB', sizeBytes: 5690000000, filename: 'win10-21h2-pro.iso',     downloadUrl: 'YOUR_URL_HERE/win10-21h2-pro.iso' },
          { id: '10-1809',         label: '1809 Pro',          arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'win10-1809.iso',         downloadUrl: 'YOUR_URL_HERE/win10-1809.iso' },
          { id: '10-1709',         label: '1709 (Fall Creators)', arch: '64-bit', size: '4.4 GB', sizeBytes: 4720000000, filename: 'win10-1709.iso',      downloadUrl: 'YOUR_URL_HERE/win10-1709.iso' },
          { id: '10-rtm',          label: '1507 (RTM)',        arch: '64-bit', size: '3.9 GB', sizeBytes: 4190000000, filename: 'win10-rtm.iso',          downloadUrl: 'YOUR_URL_HERE/win10-rtm.iso' },
        ],
      },
      {
        id: 'win8',
        name: 'Windows 8.1',
        badge: 'legacy',
        versions: [
          { id: '81-pro',          label: '8.1 Pro',           arch: '64-bit', size: '4.1 GB', sizeBytes: 4400000000, filename: 'win81-pro.iso',          downloadUrl: 'YOUR_URL_HERE/win81-pro.iso' },
          { id: '81-core',         label: '8.1 Core',          arch: '64-bit', size: '3.9 GB', sizeBytes: 4190000000, filename: 'win81-core.iso',         downloadUrl: 'YOUR_URL_HERE/win81-core.iso' },
          { id: '81-pro-32',       label: '8.1 Pro (32-bit)',  arch: '32-bit', size: '2.9 GB', sizeBytes: 3110000000, filename: 'win81-pro-32.iso',       downloadUrl: 'YOUR_URL_HERE/win81-pro-32.iso' },
        ],
      },
      {
        id: 'win7',
        name: 'Windows 7',
        badge: 'legacy',
        versions: [
          { id: '7-ultimate-sp1',  label: 'SP1 Ultimate',      arch: '64-bit', size: '3.2 GB', sizeBytes: 3440000000, filename: 'win7-ultimate-sp1.iso',  downloadUrl: 'YOUR_URL_HERE/win7-ultimate-sp1.iso' },
          { id: '7-pro-sp1',       label: 'SP1 Professional',  arch: '64-bit', size: '3.1 GB', sizeBytes: 3330000000, filename: 'win7-pro-sp1.iso',       downloadUrl: 'YOUR_URL_HERE/win7-pro-sp1.iso' },
          { id: '7-home-sp1',      label: 'SP1 Home Premium',  arch: '64-bit', size: '3.0 GB', sizeBytes: 3220000000, filename: 'win7-home-sp1.iso',      downloadUrl: 'YOUR_URL_HERE/win7-home-sp1.iso' },
          { id: '7-starter',       label: 'SP1 Starter',       arch: '32-bit', size: '2.2 GB', sizeBytes: 2360000000, filename: 'win7-starter.iso',       downloadUrl: 'YOUR_URL_HERE/win7-starter.iso' },
          { id: '7-ultimate-32',   label: 'SP1 Ultimate (32-bit)', arch: '32-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'win7-ultimate-32.iso', downloadUrl: 'YOUR_URL_HERE/win7-ultimate-32.iso' },
        ],
      },
      {
        id: 'winvista',
        name: 'Windows Vista',
        badge: 'legacy',
        versions: [
          { id: 'vista-ultimate-sp2', label: 'SP2 Ultimate',    arch: '64-bit', size: '3.5 GB', sizeBytes: 3760000000, filename: 'vista-ultimate-sp2.iso', downloadUrl: 'YOUR_URL_HERE/vista-ultimate-sp2.iso' },
          { id: 'vista-business-sp2', label: 'SP2 Business',    arch: '64-bit', size: '3.3 GB', sizeBytes: 3540000000, filename: 'vista-business-sp2.iso', downloadUrl: 'YOUR_URL_HERE/vista-business-sp2.iso' },
        ],
      },
      {
        id: 'winxp',
        name: 'Windows XP',
        badge: 'legacy',
        versions: [
          { id: 'xp-pro-sp3',      label: 'SP3 Professional',  arch: '32-bit', size: '700 MB', sizeBytes: 730000000,  filename: 'winxp-pro-sp3.iso',      downloadUrl: 'YOUR_URL_HERE/winxp-pro-sp3.iso' },
          { id: 'xp-home-sp3',     label: 'SP3 Home',          arch: '32-bit', size: '650 MB', sizeBytes: 680000000,  filename: 'winxp-home-sp3.iso',     downloadUrl: 'YOUR_URL_HERE/winxp-home-sp3.iso' },
          { id: 'xp-pro-x64-sp2',  label: 'SP2 64-bit',        arch: '64-bit', size: '600 MB', sizeBytes: 630000000,  filename: 'winxp-x64-sp2.iso',      downloadUrl: 'YOUR_URL_HERE/winxp-x64-sp2.iso' },
        ],
      },
      {
        id: 'winserver',
        name: 'Windows Server',
        badge: 'server',
        versions: [
          { id: 'server-2025',     label: '2025 Standard',     arch: '64-bit', size: '5.8 GB', sizeBytes: 6230000000, filename: 'server-2025.iso',        downloadUrl: 'YOUR_URL_HERE/server-2025.iso' },
          { id: 'server-2022',     label: '2022 Standard',     arch: '64-bit', size: '5.4 GB', sizeBytes: 5800000000, filename: 'server-2022.iso',        downloadUrl: 'YOUR_URL_HERE/server-2022.iso' },
          { id: 'server-2019',     label: '2019 Standard',     arch: '64-bit', size: '4.8 GB', sizeBytes: 5150000000, filename: 'server-2019.iso',        downloadUrl: 'YOUR_URL_HERE/server-2019.iso' },
          { id: 'server-2016',     label: '2016 Standard',     arch: '64-bit', size: '5.6 GB', sizeBytes: 6010000000, filename: 'server-2016.iso',        downloadUrl: 'YOUR_URL_HERE/server-2016.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // UBUNTU
  // ═══════════════════════════════════════════════════════════════════════
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
          { id: 'u-24.04',  label: '24.04 LTS (Noble)',     arch: '64-bit', size: '6.0 GB', sizeBytes: 6440000000, filename: 'ubuntu-24.04-desktop.iso',   downloadUrl: 'https://releases.ubuntu.com/24.04/ubuntu-24.04.1-desktop-amd64.iso' },
          { id: 'u-22.04',  label: '22.04 LTS (Jammy)',     arch: '64-bit', size: '4.7 GB', sizeBytes: 5050000000, filename: 'ubuntu-22.04-desktop.iso',   downloadUrl: 'https://releases.ubuntu.com/22.04/ubuntu-22.04.5-desktop-amd64.iso' },
          { id: 'u-20.04',  label: '20.04 LTS (Focal)',     arch: '64-bit', size: '3.4 GB', sizeBytes: 3650000000, filename: 'ubuntu-20.04-desktop.iso',   downloadUrl: 'https://releases.ubuntu.com/20.04/ubuntu-20.04.6-desktop-amd64.iso' },
          { id: 'u-18.04',  label: '18.04 LTS (Bionic)',    arch: '64-bit', size: '2.0 GB', sizeBytes: 2150000000, filename: 'ubuntu-18.04-desktop.iso',   downloadUrl: 'https://releases.ubuntu.com/18.04/ubuntu-18.04.6-desktop-amd64.iso' },
          { id: 'u-16.04',  label: '16.04 LTS (Xenial)',    arch: '64-bit', size: '1.6 GB', sizeBytes: 1720000000, filename: 'ubuntu-16.04-desktop.iso',   downloadUrl: 'https://releases.ubuntu.com/16.04/ubuntu-16.04.7-desktop-amd64.iso' },
          { id: 'u-14.04',  label: '14.04 LTS (Trusty)',    arch: '64-bit', size: '1.1 GB', sizeBytes: 1180000000, filename: 'ubuntu-14.04-desktop.iso',   downloadUrl: 'https://releases.ubuntu.com/14.04/ubuntu-14.04.6-desktop-amd64.iso' },
        ],
      },
      {
        id: 'ubuntu-server',
        name: 'Server',
        badge: 'server',
        versions: [
          { id: 'us-24.04', label: '24.04 LTS Server',      arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'ubuntu-24.04-server.iso',    downloadUrl: 'https://releases.ubuntu.com/24.04/ubuntu-24.04.1-live-server-amd64.iso' },
          { id: 'us-22.04', label: '22.04 LTS Server',      arch: '64-bit', size: '2.0 GB', sizeBytes: 2150000000, filename: 'ubuntu-22.04-server.iso',    downloadUrl: 'https://releases.ubuntu.com/22.04/ubuntu-22.04.5-live-server-amd64.iso' },
          { id: 'us-20.04', label: '20.04 LTS Server',      arch: '64-bit', size: '1.3 GB', sizeBytes: 1390000000, filename: 'ubuntu-20.04-server.iso',    downloadUrl: 'https://releases.ubuntu.com/20.04/ubuntu-20.04.6-live-server-amd64.iso' },
        ],
      },
      {
        id: 'kubuntu',
        name: 'Kubuntu (KDE)',
        badge: 'stable',
        versions: [
          { id: 'k-24.04',  label: '24.04 LTS',             arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'kubuntu-24.04.iso',          downloadUrl: 'https://cdimage.ubuntu.com/kubuntu/releases/24.04/release/kubuntu-24.04.1-desktop-amd64.iso' },
          { id: 'k-22.04',  label: '22.04 LTS',             arch: '64-bit', size: '4.0 GB', sizeBytes: 4290000000, filename: 'kubuntu-22.04.iso',          downloadUrl: 'https://cdimage.ubuntu.com/kubuntu/releases/22.04/release/kubuntu-22.04.5-desktop-amd64.iso' },
        ],
      },
      {
        id: 'xubuntu',
        name: 'Xubuntu (XFCE)',
        badge: 'stable',
        versions: [
          { id: 'x-24.04',  label: '24.04 LTS',             arch: '64-bit', size: '3.5 GB', sizeBytes: 3760000000, filename: 'xubuntu-24.04.iso',          downloadUrl: 'https://cdimage.ubuntu.com/xubuntu/releases/24.04/release/xubuntu-24.04.1-desktop-amd64.iso' },
          { id: 'x-22.04',  label: '22.04 LTS',             arch: '64-bit', size: '2.8 GB', sizeBytes: 3010000000, filename: 'xubuntu-22.04.iso',          downloadUrl: 'https://cdimage.ubuntu.com/xubuntu/releases/22.04/release/xubuntu-22.04.5-desktop-amd64.iso' },
        ],
      },
      {
        id: 'lubuntu',
        name: 'Lubuntu (LXQt, lightweight)',
        badge: 'stable',
        versions: [
          { id: 'l-24.04',  label: '24.04 LTS',             arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'lubuntu-24.04.iso',          downloadUrl: 'https://cdimage.ubuntu.com/lubuntu/releases/24.04/release/lubuntu-24.04.1-desktop-amd64.iso' },
        ],
      },
      {
        id: 'ubuntu-studio',
        name: 'Ubuntu Studio (creative)',
        badge: 'stable',
        versions: [
          { id: 'us-24.04', label: '24.04 LTS',             arch: '64-bit', size: '5.6 GB', sizeBytes: 6010000000, filename: 'ubuntustudio-24.04.iso',     downloadUrl: 'https://cdimage.ubuntu.com/ubuntustudio/releases/24.04/release/ubuntustudio-24.04.1-dvd-amd64.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // DEBIAN
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'debian',
    name: 'Debian',
    category: 'linux',
    color: '#a80030',
    icon: 'debian',
    description: 'The universal OS. Free, stable, and the foundation many other distros are built on.',
    editions: [
      {
        id: 'debian-live',
        name: 'Live (with installer)',
        badge: 'stable',
        versions: [
          { id: 'd-12-gnome',   label: '12 Bookworm (GNOME)',      arch: '64-bit', size: '2.8 GB', sizeBytes: 3010000000, filename: 'debian-12-gnome.iso',     downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-gnome.iso' },
          { id: 'd-12-kde',     label: '12 Bookworm (KDE)',        arch: '64-bit', size: '3.1 GB', sizeBytes: 3330000000, filename: 'debian-12-kde.iso',       downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-kde.iso' },
          { id: 'd-12-xfce',    label: '12 Bookworm (XFCE)',       arch: '64-bit', size: '2.5 GB', sizeBytes: 2680000000, filename: 'debian-12-xfce.iso',      downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-xfce.iso' },
          { id: 'd-12-cinnamon',label: '12 Bookworm (Cinnamon)',   arch: '64-bit', size: '2.8 GB', sizeBytes: 3010000000, filename: 'debian-12-cinnamon.iso',  downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-cinnamon.iso' },
          { id: 'd-12-mate',    label: '12 Bookworm (MATE)',       arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'debian-12-mate.iso',      downloadUrl: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.7.0-amd64-mate.iso' },
        ],
      },
      {
        id: 'debian-netinst',
        name: 'Netinstall (small)',
        badge: 'stable',
        versions: [
          { id: 'dn-12',        label: '12 Bookworm',              arch: '64-bit', size: '630 MB', sizeBytes: 660000000,  filename: 'debian-12-netinst.iso',   downloadUrl: 'https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.7.0-amd64-netinst.iso' },
          { id: 'dn-11',        label: '11 Bullseye',              arch: '64-bit', size: '410 MB', sizeBytes: 430000000,  filename: 'debian-11-netinst.iso',   downloadUrl: 'https://cdimage.debian.org/cdimage/archive/11.11.0/amd64/iso-cd/debian-11.11.0-amd64-netinst.iso' },
          { id: 'dn-10',        label: '10 Buster',                arch: '64-bit', size: '350 MB', sizeBytes: 370000000,  filename: 'debian-10-netinst.iso',   downloadUrl: 'https://cdimage.debian.org/cdimage/archive/10.13.0/amd64/iso-cd/debian-10.13.0-amd64-netinst.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // FEDORA
  // ═══════════════════════════════════════════════════════════════════════
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
          { id: 'f-41',  label: '41',  arch: '64-bit', size: '2.3 GB', sizeBytes: 2470000000, filename: 'fedora-41-workstation.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-41-1.4.iso' },
          { id: 'f-40',  label: '40',  arch: '64-bit', size: '2.3 GB', sizeBytes: 2470000000, filename: 'fedora-40-workstation.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/40/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-40-1.14.iso' },
          { id: 'f-39',  label: '39',  arch: '64-bit', size: '2.1 GB', sizeBytes: 2260000000, filename: 'fedora-39-workstation.iso', downloadUrl: 'https://archives.fedoraproject.org/pub/archive/fedora/linux/releases/39/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-39-1.5.iso' },
        ],
      },
      {
        id: 'fedora-spins',
        name: 'Spins (alternate DEs)',
        badge: 'stable',
        versions: [
          { id: 'f-41-kde',     label: '41 KDE Plasma',  arch: '64-bit', size: '2.4 GB', sizeBytes: 2580000000, filename: 'fedora-41-kde.iso',      downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-KDE-Live-x86_64-41-1.4.iso' },
          { id: 'f-41-xfce',    label: '41 XFCE',        arch: '64-bit', size: '1.8 GB', sizeBytes: 1930000000, filename: 'fedora-41-xfce.iso',     downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-Xfce-Live-x86_64-41-1.4.iso' },
          { id: 'f-41-mate',    label: '41 MATE',        arch: '64-bit', size: '2.1 GB', sizeBytes: 2260000000, filename: 'fedora-41-mate.iso',     downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-MATE_Compiz-Live-x86_64-41-1.4.iso' },
          { id: 'f-41-cinnamon',label: '41 Cinnamon',    arch: '64-bit', size: '2.2 GB', sizeBytes: 2360000000, filename: 'fedora-41-cinnamon.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Spins/x86_64/iso/Fedora-Cinnamon-Live-x86_64-41-1.4.iso' },
        ],
      },
      {
        id: 'fedora-server',
        name: 'Server',
        badge: 'server',
        versions: [
          { id: 'fs-41', label: '41 Server',  arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'fedora-41-server.iso', downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/41/Server/x86_64/iso/Fedora-Server-dvd-x86_64-41-1.4.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ARCH LINUX
  // ═══════════════════════════════════════════════════════════════════════
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

  // ═══════════════════════════════════════════════════════════════════════
  // LINUX MINT
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'mint',
    name: 'Linux Mint',
    category: 'linux',
    color: '#87cf3e',
    icon: 'mint',
    description: 'Elegant and familiar. The most popular pick for people switching from Windows.',
    editions: [
      {
        id: 'mint-cinnamon',
        name: 'Cinnamon (flagship)',
        badge: 'lts',
        versions: [
          { id: 'm-22-cinnamon',   label: '22 Wilma',          arch: '64-bit', size: '2.9 GB', sizeBytes: 3110000000, filename: 'mint-22-cinnamon.iso',     downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/22/linuxmint-22-cinnamon-64bit.iso' },
          { id: 'm-21.3-cinnamon', label: '21.3 Virginia',     arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'mint-21.3-cinnamon.iso',   downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/21.3/linuxmint-21.3-cinnamon-64bit.iso' },
          { id: 'm-20.3-cinnamon', label: '20.3 Una',          arch: '64-bit', size: '2.2 GB', sizeBytes: 2360000000, filename: 'mint-20.3-cinnamon.iso',   downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/20.3/linuxmint-20.3-cinnamon-64bit.iso' },
        ],
      },
      {
        id: 'mint-xfce',
        name: 'XFCE (lightweight)',
        badge: 'stable',
        versions: [
          { id: 'm-22-xfce',       label: '22 Wilma',          arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'mint-22-xfce.iso',         downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/22/linuxmint-22-xfce-64bit.iso' },
          { id: 'm-21.3-xfce',     label: '21.3 Virginia',     arch: '64-bit', size: '2.4 GB', sizeBytes: 2580000000, filename: 'mint-21.3-xfce.iso',       downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/21.3/linuxmint-21.3-xfce-64bit.iso' },
        ],
      },
      {
        id: 'mint-mate',
        name: 'MATE (classic)',
        badge: 'stable',
        versions: [
          { id: 'm-22-mate',       label: '22 Wilma',          arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'mint-22-mate.iso',         downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/stable/22/linuxmint-22-mate-64bit.iso' },
        ],
      },
      {
        id: 'lmde',
        name: 'LMDE (Debian Edition)',
        badge: 'stable',
        versions: [
          { id: 'lmde-6',          label: '6 Faye',            arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'lmde-6.iso',               downloadUrl: 'https://mirrors.edge.kernel.org/linuxmint/debian/lmde-6-cinnamon-64bit.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // POP!_OS
  // ═══════════════════════════════════════════════════════════════════════
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
          { id: 'p-22.04',     label: '22.04 LTS',           arch: '64-bit', size: '2.6 GB', sizeBytes: 2790000000, filename: 'pop-22.04-intel.iso',      downloadUrl: 'https://iso.pop-os.org/22.04/amd64/intel/49/pop-os_22.04_amd64_intel_49.iso' },
          { id: 'p-20.04',     label: '20.04 LTS',           arch: '64-bit', size: '2.4 GB', sizeBytes: 2580000000, filename: 'pop-20.04-intel.iso',      downloadUrl: 'https://iso.pop-os.org/20.04/amd64/intel/45/pop-os_20.04_amd64_intel_45.iso' },
        ],
      },
      {
        id: 'pop-nvidia',
        name: 'NVIDIA (drivers included)',
        badge: 'lts',
        versions: [
          { id: 'p-22.04-nv',  label: '22.04 LTS NVIDIA',    arch: '64-bit', size: '3.0 GB', sizeBytes: 3220000000, filename: 'pop-22.04-nvidia.iso',     downloadUrl: 'https://iso.pop-os.org/22.04/amd64/nvidia/49/pop-os_22.04_amd64_nvidia_49.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MANJARO
  // ═══════════════════════════════════════════════════════════════════════
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
          { id: 'manj-gnome',  label: 'Latest',              arch: '64-bit', size: '3.6 GB', sizeBytes: 3870000000, filename: 'manjaro-gnome.iso',         downloadUrl: 'https://download.manjaro.org/gnome/24.2.1/manjaro-gnome-24.2.1-241216-linux612.iso' },
        ],
      },
      {
        id: 'manjaro-kde',
        name: 'KDE',
        badge: 'rolling',
        versions: [
          { id: 'manj-kde',    label: 'Latest',              arch: '64-bit', size: '3.7 GB', sizeBytes: 3970000000, filename: 'manjaro-kde.iso',           downloadUrl: 'https://download.manjaro.org/kde/24.2.1/manjaro-kde-24.2.1-241216-linux612.iso' },
        ],
      },
      {
        id: 'manjaro-xfce',
        name: 'XFCE',
        badge: 'rolling',
        versions: [
          { id: 'manj-xfce',   label: 'Latest',              arch: '64-bit', size: '3.4 GB', sizeBytes: 3650000000, filename: 'manjaro-xfce.iso',          downloadUrl: 'https://download.manjaro.org/xfce/24.2.1/manjaro-xfce-24.2.1-241216-linux612.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KALI LINUX
  // ═══════════════════════════════════════════════════════════════════════
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
          { id: 'k-2024.4',    label: '2024.4',              arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'kali-2024.4-installer.iso', downloadUrl: 'https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso' },
          { id: 'k-2024.3',    label: '2024.3',              arch: '64-bit', size: '4.4 GB', sizeBytes: 4720000000, filename: 'kali-2024.3-installer.iso', downloadUrl: 'https://cdimage.kali.org/kali-2024.3/kali-linux-2024.3-installer-amd64.iso' },
        ],
      },
      {
        id: 'kali-live',
        name: 'Live (try without install)',
        badge: 'security',
        versions: [
          { id: 'k-2024.4-live', label: '2024.4 Live',       arch: '64-bit', size: '4.2 GB', sizeBytes: 4510000000, filename: 'kali-2024.4-live.iso',      downloadUrl: 'https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-live-amd64.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ELEMENTARY OS
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'elementary',
    name: 'elementary OS',
    category: 'linux',
    color: '#64baff',
    icon: 'elementary',
    description: 'Beautiful, polished, and macOS-like. Privacy-focused with a pay-what-you-want model.',
    editions: [
      {
        id: 'eos',
        name: 'Desktop',
        badge: 'stable',
        versions: [
          { id: 'eos-8',       label: '8 Circe',             arch: '64-bit', size: '2.7 GB', sizeBytes: 2900000000, filename: 'elementary-8.iso',          downloadUrl: 'YOUR_URL_HERE/elementary-8.iso' },
          { id: 'eos-7.1',     label: '7.1 Horus',           arch: '64-bit', size: '2.0 GB', sizeBytes: 2150000000, filename: 'elementary-7.1.iso',        downloadUrl: 'YOUR_URL_HERE/elementary-7.1.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // OPENSUSE
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'opensuse',
    name: 'openSUSE',
    category: 'linux',
    color: '#73ba25',
    icon: 'default',
    description: 'A solid Linux distribution from Germany. YaST is famously good for system config.',
    editions: [
      {
        id: 'tumbleweed',
        name: 'Tumbleweed (rolling)',
        badge: 'rolling',
        versions: [
          { id: 'ts-latest',   label: 'Latest snapshot',     arch: '64-bit', size: '4.5 GB', sizeBytes: 4830000000, filename: 'opensuse-tumbleweed.iso',   downloadUrl: 'https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-DVD-x86_64-Current.iso' },
        ],
      },
      {
        id: 'leap',
        name: 'Leap (stable)',
        badge: 'lts',
        versions: [
          { id: 'leap-15.6',   label: '15.6',                arch: '64-bit', size: '4.6 GB', sizeBytes: 4940000000, filename: 'opensuse-leap-15.6.iso',    downloadUrl: 'https://download.opensuse.org/distribution/leap/15.6/iso/openSUSE-Leap-15.6-DVD-x86_64-Current.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ZORIN OS
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'zorin',
    name: 'Zorin OS',
    category: 'linux',
    color: '#15a6f0',
    icon: 'default',
    description: 'Designed to make Linux feel like Windows. Ideal for new users switching over.',
    editions: [
      {
        id: 'zorin-core',
        name: 'Core (free)',
        badge: 'stable',
        versions: [
          { id: 'z-17',        label: '17.2 Core',           arch: '64-bit', size: '3.8 GB', sizeBytes: 4080000000, filename: 'zorin-17-core.iso',         downloadUrl: 'YOUR_URL_HERE/zorin-17-core.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GARUDA LINUX
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'garuda',
    name: 'Garuda Linux',
    category: 'linux',
    color: '#9d4edd',
    icon: 'default',
    description: 'Arch-based, gamer-focused, with stunning visual effects out of the box.',
    editions: [
      {
        id: 'garuda-dragonized',
        name: 'Dragonized (KDE)',
        badge: 'rolling',
        versions: [
          { id: 'g-dragonized', label: 'Latest',             arch: '64-bit', size: '3.7 GB', sizeBytes: 3970000000, filename: 'garuda-dragonized.iso',     downloadUrl: 'https://iso.builds.garudalinux.org/iso/latest/garuda/dr460nized/latest.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ENDEAVOUR OS
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'endeavour',
    name: 'EndeavourOS',
    category: 'linux',
    color: '#7f3f97',
    icon: 'default',
    description: 'Arch made easy. Comes with a friendly installer but stays close to vanilla Arch.',
    editions: [
      {
        id: 'eos-latest',
        name: 'Installer',
        badge: 'rolling',
        versions: [
          { id: 'endeavour-latest', label: 'Latest',         arch: '64-bit', size: '2.3 GB', sizeBytes: 2470000000, filename: 'endeavouros.iso',           downloadUrl: 'https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Endeavour-Neo-2024.09.22.iso' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MX LINUX
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'mxlinux',
    name: 'MX Linux',
    category: 'linux',
    color: '#000000',
    icon: 'default',
    description: 'Debian-based with XFCE. Consistently rated #1 on DistroWatch for years.',
    editions: [
      {
        id: 'mx-xfce',
        name: 'XFCE',
        badge: 'stable',
        versions: [
          { id: 'mx-23',       label: '23.4 Libretto',       arch: '64-bit', size: '1.9 GB', sizeBytes: 2040000000, filename: 'mx-23-xfce.iso',            downloadUrl: 'https://sourceforge.net/projects/mx-linux/files/Final/Xfce/MX-23.4_x64.iso/download' },
        ],
      },
      {
        id: 'mx-kde',
        name: 'KDE',
        badge: 'stable',
        versions: [
          { id: 'mx-23-kde',   label: '23.4 Libretto',       arch: '64-bit', size: '2.5 GB', sizeBytes: 2680000000, filename: 'mx-23-kde.iso',             downloadUrl: 'https://sourceforge.net/projects/mx-linux/files/Final/KDE/MX-23.4_KDE_x64.iso/download' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ALPINE LINUX
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'alpine',
    name: 'Alpine Linux',
    category: 'linux',
    color: '#0d597f',
    icon: 'default',
    description: 'Tiny, secure Linux distro popular for containers. The full ISO is ~150 MB.',
    editions: [
      {
        id: 'alpine-standard',
        name: 'Standard',
        badge: 'stable',
        versions: [
          { id: 'a-3.20',      label: '3.20',                arch: '64-bit', size: '210 MB', sizeBytes: 220000000,  filename: 'alpine-3.20.iso',           downloadUrl: 'https://dl-cdn.alpinelinux.org/alpine/v3.20/releases/x86_64/alpine-standard-3.20.3-x86_64.iso' },
        ],
      },
    ],
  },

]

// ═══════════════════════════════════════════════════════════════════════════
// FILTERS / METADATA
// ═══════════════════════════════════════════════════════════════════════════
export const categories = [
  { id: 'all',     label: 'All' },
  { id: 'windows', label: 'Windows' },
  { id: 'linux',   label: 'Linux' },
]

export const badgeColors = {
  latest:   { bg: '#1a1530', text: '#a78bfa' },
  lts:      { bg: '#0a1e35', text: '#60a5fa' },
  stable:   { bg: '#0e2e1a', text: '#4ade80' },
  rolling:  { bg: '#1a2010', text: '#86efac' },
  legacy:   { bg: '#2a1f10', text: '#fbbf24' },
  security: { bg: '#1a1020', text: '#f472b6' },
  server:   { bg: '#101a24', text: '#7dd3fc' },
}

// Helper: flatten the catalog into a list of selectable items
// Each item has: os, edition, version - so the UI can display them
export function getAllVersions() {
  const all = []
  for (const os of catalog) {
    for (const edition of (os.editions || [])) {
      for (const version of (edition.versions || [])) {
        all.push({
          // OS-level info
          osId: os.id,
          osName: os.name,
          category: os.category,
          color: os.color,
          icon: os.icon,
          description: os.description,
          // Edition + version info
          editionId: edition.id,
          editionName: edition.name,
          badge: edition.badge,
          // Version specifics
          ...version,
          // Composite ID for unique tracking
          fullId: `${os.id}/${edition.id}/${version.id}`,
        })
      }
    }
  }
  return all
}