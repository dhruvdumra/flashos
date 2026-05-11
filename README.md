<div align="center">

# ⬡ FlashOS

**One-click OS downloader and USB flasher**

[![License: MIT](https://img.shields.io/badge/License-MIT-6c63ff.svg)](LICENSE)
[![Built with Electron](https://img.shields.io/badge/Built%20with-Electron-47848F?logo=electron)](https://electronjs.org)
[![React](https://img.shields.io/badge/UI-React%2018-61DAFB?logo=react)](https://reactjs.org)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

FlashOS lets you pick any operating system, plug in a USB drive, and flash it — all in one click.
No manual ISO downloads, no Rufus, no command line. Just pick and flash.

[**Download**](#download) · [**Screenshots**](#screenshots) · [**Build from source**](#build-from-source) · [**Contributing**](#contributing)

</div>

---

## Features

- **12+ operating systems** — Windows 11/10/7/XP, Ubuntu, Debian, Fedora, Arch, Kali, Mint, Pop!_OS, Manjaro, elementary OS
- **Auto-detects your firmware** — recommends GPT+UEFI or MBR+BIOS automatically
- **Handles the FAT32 4GB limit** — automatically splits `install.wim` using wimlib for large Windows ISOs
- **Proper partitioning** — creates the right partition table, formats correctly, installs bootloader
- **Live progress** — real-time download and flash progress with stage-by-stage feedback
- **USB drive detection** — auto-detects plugged-in drives, refreshes every 5 seconds
- **Cross-platform** — one codebase, runs on Windows, Linux, and macOS

---

## Download

Go to the [**Releases**](../../releases/latest) page and download the installer for your OS:

| Platform | File | Notes |
|----------|------|-------|
| Windows | `FlashOS-Setup-x.x.x.exe` | Run as Administrator |
| Linux | `FlashOS-x.x.x.AppImage` | `chmod +x` then run |
| macOS | `FlashOS-x.x.x.dmg` | Drag to Applications |

> **Antivirus note:** Tools that write to raw disk devices are sometimes flagged as false positives. The full source code is here and auditable. If your antivirus flags it, you can [build from source](#build-from-source) instead.

---

## Screenshots

> <img width="1366" height="729" alt="1" src="https://github.com/user-attachments/assets/a4d7922b-acd4-46d7-aa0d-4befff9c4d88" />
<img width="1365" height="728" alt="2" src="https://github.com/user-attachments/assets/76c1cc20-91ca-433b-b7f0-3425aa516f65" />



---

## How it works

```
User picks OS  →  App downloads ISO  →  Detects USB drives
      ↓
Auto-detects firmware (UEFI/BIOS)
      ↓
Creates partition table (GPT or MBR)
      ↓
Formats USB (FAT32 or NTFS)
      ↓
Copies ISO files  →  Splits install.wim if needed  →  Installs bootloader
      ↓
Done — USB is bootable
```

### Partition logic

| Firmware | Scheme | Filesystem | Notes |
|----------|--------|------------|-------|
| UEFI (modern PC) | GPT | FAT32 | Windows ISOs split via wimlib |
| BIOS (old PC) | MBR | FAT32 or NTFS | NTFS for ISOs > 4 GB |
| macOS | GPT | — | Uses `dd` directly |

---

## Build from source

### Prerequisites

- [Node.js 18+](https://nodejs.org)
- Git

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/flashos.git
cd flashos

# 2. Install dependencies
npm install

# 3. Run in development
npm run dev
```

### Linux — install system tools

```bash
# Ubuntu / Debian / Mint
sudo apt install parted dosfstools ntfs-3g rsync wimtools syslinux syslinux-utils

# Fedora
sudo dnf install parted dosfstools ntfs-3g rsync wimlib syslinux

# Arch
sudo pacman -S parted dosfstools ntfs-3g rsync wimlib syslinux
```

### Windows — wimlib (for large ISO support)

1. Download wimlib from [wimlib.net/downloads](https://wimlib.net/downloads/)
2. Extract `wimlib-imagex.exe` into `tools/windows/wimlib-imagex.exe`

### Build distributables

```bash
npm run build
# Output in dist-electron/
```

---

## Adding your own OS / ISO links

Edit `src/os-catalog.js` and add an entry:

```js
{
  id: 'my-os',
  name: 'My OS',
  version: '1.0',
  category: 'linux',           // 'windows' or 'linux'
  arch: '64-bit',
  size: '2.0 GB',
  sizeBytes: 2150000000,
  description: 'A great OS.',
  color: '#e95420',
  icon: 'ubuntu',              // see src/App.jsx for available icons
  badge: 'stable',             // latest | lts | stable | rolling | legacy | security
  downloadUrl: 'https://your-server.com/myos.iso',
  filename: 'myos-1.0.iso',
}
```

---

## Project structure

```
flashos/
├── .github/
│   └── workflows/
│       └── build.yml          ← GitHub Actions: auto-builds on every release tag
├── electron/
│   ├── main.js                ← Main process: downloads, USB detection, flashing
│   └── preload.js             ← Secure IPC bridge to renderer
├── src/
│   ├── App.jsx                ← Full React UI
│   ├── app.css                ← Styles (dark theme, Syne + DM Mono fonts)
│   ├── main.jsx               ← React entry point
│   └── os-catalog.js          ← All OS entries — edit to add/remove distros
├── tools/
│   └── windows/
│       └── wimlib-imagex.exe  ← (not committed) download separately, see README
├── index.html
├── package.json
└── vite.config.js
```

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Desktop shell | [Electron 28](https://electronjs.org) |
| UI framework | [React 18](https://reactjs.org) |
| Bundler | [Vite 5](https://vitejs.dev) |
| Fonts | Syne + DM Mono (Google Fonts) |
| USB detection | `lsblk` (Linux) · `wmic` (Windows) · `diskutil` (macOS) |
| Partitioning | `parted` / `diskpart` |
| Flashing | `dd` (Linux/macOS) · `robocopy` + `bcdboot` (Windows) |
| WIM splitting | [wimlib](https://wimlib.net) |
| Packaging | [electron-builder](https://electron.build) |

---

## Contributing

Contributions are very welcome. Some ideas:

- Add more Linux distros to `src/os-catalog.js`
- Improve Windows flashing reliability
- Add SHA256 checksum verification after download
- Add VM launch support (open ISO directly in VirtualBox)
- Improve macOS `dd` progress reporting
- Add a settings page (custom download directory, dark/light mode)

### How to contribute

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Make your changes and commit: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

Please open an issue first for large changes so we can discuss.

---

## License

MIT — do whatever you want with it. See [LICENSE](LICENSE).

---

## Disclaimer

FlashOS writes directly to disk devices. **Always double-check you've selected the correct USB drive** before flashing. The authors are not responsible for any data loss. A confirmation prompt is shown before any write operation.
