<div align="center">

# ⬡ FlashOS

**One-click OS downloader and USB flasher — GUI and CLI**

[![License: MIT](https://img.shields.io/badge/License-MIT-6c63ff.svg)](LICENSE)
[![Built with Electron](https://img.shields.io/badge/Built%20with-Electron-47848F?logo=electron)](https://electronjs.org)
[![React](https://img.shields.io/badge/UI-React%2018-61DAFB?logo=react)](https://reactjs.org)
[![CLI](https://img.shields.io/badge/Has-CLI-orange)](#cli-usage)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

FlashOS lets you pick any operating system, plug in a USB drive, and flash it — all in one click.
No manual ISO downloads, no Rufus, no command line. Just pick and flash.

[**Download**](#download) · [**Supported OSes**](#supported-operating-systems) · [**CLI**](#cli-usage) · [**Build**](#build-from-source) · [**Contributing**](#contributing)

</div>

---

## Features

- **25+ operating systems** built in — Windows, all major Linux distros, BSDs, and alternative OSes
- **Auto-detects your firmware** — recommends GPT+UEFI or MBR+BIOS automatically
- **Handles the FAT32 4GB limit** — automatically splits `install.wim` using wimlib for large Windows ISOs
- **Manual partition controls** — Rufus-style settings panel (cluster size, volume label, format options) for power users
- **Smart caching** — content-length check skips re-downloading already cached ISOs
- **Live progress** — real-time download and flash progress with stage-by-stage feedback
- **Auto-updating catalog** — new operating systems appear in the app without reinstalling
- **Two ways to use it** — clean GUI for everyday users, full-featured CLI for power users and scripting
- **Cross-platform** — one codebase, runs on Windows, Linux, and macOS

---

## Download

Go to the [**Releases**](../../releases/latest) page and download the installer for your OS:

| Platform | File | Notes |
|----------|------|-------|
| Windows | `FlashOS-Setup-x.x.x.exe` | Run as Administrator |
| Linux | `FlashOS-x.x.x.AppImage` | `chmod +x` then run with `sudo` |
| macOS | `FlashOS-x.x.x.dmg` | Drag to Applications; right-click → Open first time |

> **Antivirus note:** Tools that write to raw disk devices are sometimes flagged as false positives. The full source code is here and auditable.

---

## Supported operating systems

### Windows
| OS | Versions | Source |
|----|----------|--------|
| Windows 11 | Enterprise Eval, IoT LTSC 2024 | Microsoft Evaluation Center |
| Windows 10 | Enterprise Eval 22H2, LTSC 2021 | Microsoft Evaluation Center |
| Windows 8.1 | Pro x64 | Internet Archive |
| Windows 7 | Ultimate SP1, Pro SP1, Home SP1 (all 64-bit) | Internet Archive |
| Windows Vista | Ultimate SP2 64-bit | Internet Archive |
| Windows XP | Professional SP3 32-bit | Internet Archive |
| Windows Server | 2025, 2022, 2019 (all eval editions) | Microsoft Evaluation Center |

### Linux distributions
| OS | Versions / Flavors |
|----|--------------------|
| **Ubuntu** | Desktop 24.04, 22.04, 20.04, 18.04, 16.04, 14.04 LTS · Server (3 versions) |
| **Kubuntu** | 24.04, 22.04 LTS |
| **Xubuntu** | 24.04, 22.04 LTS |
| **Lubuntu** | 24.04 LTS |
| **Ubuntu Studio** | 24.04 LTS |
| **Debian** | 12 Bookworm (GNOME / KDE / XFCE / Cinnamon / MATE) · Netinstall |
| **Fedora** | 41, 40 Workstation · Spins (KDE / XFCE / MATE / Cinnamon) · Server |
| **Arch Linux** | Latest (rolling) |
| **Linux Mint** | 22, 21.3, 20.3 (Cinnamon / XFCE / MATE) · LMDE 6 |
| **Pop!_OS** | 22.04 LTS (Intel/AMD and NVIDIA editions) |
| **Manjaro** | Latest (GNOME / KDE / XFCE) |
| **Kali Linux** | 2024.4, 2024.3 (Installer + Live) |
| **elementary OS** | 7.1 Horus |
| **openSUSE** | Tumbleweed (rolling) · Leap 15.6 |
| **MX Linux** | 23.4 (XFCE / KDE) |
| **Alpine Linux** | 3.20 |
| **EndeavourOS** | Latest |
| **NixOS** | 24.11 (GNOME / KDE Plasma / Minimal) |
| **Tails** | 6.10 (privacy / Tor-based) |
| **Parrot OS** | 6.2 (Security / Home editions) |
| **Rocky Linux** | 9.5, 8.10 (RHEL-compatible) |

### Other operating systems (BSDs, alternative OSes)
| OS | Versions |
|----|----------|
| **FreeBSD** | 14.2, 14.1 (DVD + Bootonly), 13.4 |
| **OpenBSD** | 7.6, 7.5 |
| **NetBSD** | 10.1, 10.0, 9.4 |
| **Haiku** | R1 Beta 5 (BeOS successor) |
| **ReactOS** | 0.4.15 (Boot CD + Live CD) |
| **FreeDOS** | 1.3 (MS-DOS successor for retro / BIOS flashing) |

**Total: 90+ versions across 30+ operating systems.**

> The catalog is hosted at [`catalog.json`](catalog.json). Edit it on GitHub to add new OSes — the change reaches all users automatically without an app update.

---

## CLI usage

FlashOS ships with a full-featured CLI for power users and scripting.

### Quick start

```bash
# Interactive mode — walks you through everything
flashos

# Or jump straight in with commands
flashos flash ubuntu                          # auto-pick + interactive drive
flashos flash arch --device /dev/sdb          # specify drive
flashos flash fedora -e workstation -V 41 -y  # full control, no prompts

# List all available operating systems
flashos list
flashos list --category linux --search server

# Just download an ISO without flashing
flashos download debian --release 12

# See connected USB drives
flashos drives
```

### Install the CLI

After cloning and building from source:

```bash
npm install
npm link
```

Now `flashos` is a global command available from anywhere.

### CLI flags

| Flag | Description |
|------|-------------|
| `--yes`, `-y` | Skip confirmation prompts |
| `--json` | Output as JSON (for scripting) |
| `--device <path>` | Specify USB device path |
| `--edition <name>` | Specify OS edition (e.g. `desktop`, `server`) |
| `--release <ver>` | Specify version (e.g. `24.04`) |

Full CLI documentation in [`cli/README.md`](cli/README.md).

---

## Screenshots

> *(Add screenshots here — drag images into the GitHub editor to upload)*

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
| UEFI (modern PC) | GPT | FAT32 | Windows ISOs split via wimlib if > 4 GB |
| BIOS (old PC) | MBR | FAT32 or NTFS | NTFS for ISOs > 4 GB |
| Windows USB (any) | MBR (single partition, active) | FAT32 | Workaround for Windows' "removable media" restriction |

---

## Build from source

### Prerequisites

- [Node.js 18+](https://nodejs.org)
- Git

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/dhruvdumra/flashos.git
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

### Windows — wimlib (for large Windows ISO support)

1. Download wimlib from [wimlib.net/downloads](https://wimlib.net/downloads/)
2. Extract `wimlib-imagex.exe` into `tools/windows/wimlib-imagex.exe`

### Build distributables

```bash
npm run build       # GUI installers
npm run build:cli   # CLI binaries (Windows / Linux / macOS)
# Output in dist-electron/ and dist-cli/
```

---

## Adding your own OS / ISO links

Edit [`catalog.json`](catalog.json) directly on GitHub and add an entry:

```json
{
  "id": "my-os",
  "name": "My OS",
  "category": "linux",
  "color": "#e95420",
  "icon": "default",
  "description": "A great OS.",
  "editions": [{
    "id": "my-os-desktop",
    "name": "Desktop",
    "badge": "stable",
    "versions": [{
      "id": "myos-1.0",
      "label": "1.0",
      "arch": "64-bit",
      "size": "2.0 GB",
      "sizeBytes": 2150000000,
      "filename": "myos-1.0.iso",
      "downloadUrl": "https://your-server.com/myos.iso"
    }]
  }]
}
```

Commit and push. Within an hour, every FlashOS user sees the new OS — no app update required.

---

## Project structure

```
flashos/
├── .github/
│   └── workflows/
│       └── build.yml          ← GitHub Actions: auto-builds on every release tag
├── electron/                  ← GUI: Electron main process + IPC bridge
│   ├── main.js                ← USB detection, downloads, flashing
│   └── preload.js
├── src/                       ← GUI: React UI
│   ├── App.jsx
│   ├── app.css
│   ├── main.jsx
│   └── os-catalog.js          ← Bundled fallback catalog + remote fetch
├── cli/                       ← CLI: standalone command-line interface
│   ├── index.js               ← CLI entry (commander + inquirer)
│   ├── README.md
│   └── core/                  ← Pure Node modules (no Electron)
│       ├── catalog.js
│       ├── usb.js
│       ├── download.js
│       ├── flash-windows.js
│       └── flash-linux.js
├── tools/
│   └── windows/
│       └── wimlib-imagex.exe  ← (not committed) download separately
├── catalog.json               ← OS catalog (edit to add/update OSes)
├── index.html
├── package.json
└── vite.config.js
```

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| **Desktop shell** | [Electron 28](https://electronjs.org) |
| **UI framework** | [React 18](https://reactjs.org) |
| **Bundler** | [Vite 5](https://vitejs.dev) |
| **Styling** | Vanilla CSS (no framework) |
| **Fonts** | Inter + DM Mono (Google Fonts) |
| **CLI parsing** | [Commander](https://github.com/tj/commander.js) |
| **Interactive prompts** | [Inquirer](https://github.com/SBoudrias/Inquirer.js) |
| **Terminal styling** | [Chalk](https://github.com/chalk/chalk) + [Ora](https://github.com/sindresorhus/ora) |
| **CLI packaging** | [pkg](https://github.com/vercel/pkg) (standalone binaries) |
| **USB detection** | `lsblk` (Linux) · PowerShell `Get-Disk` (Windows) · `diskutil` (macOS) |
| **Partitioning** | `parted` (Linux/macOS) · `diskpart` (Windows) |
| **Flashing** | `dd` (Linux/macOS) · `robocopy` + `bootsect` (Windows) |
| **WIM splitting** | [wimlib](https://wimlib.net) |
| **App packaging** | [electron-builder](https://electron.build) |
| **CI/CD** | GitHub Actions |

---

## Contributing

Contributions are very welcome. Some ideas:

- Add more Linux distros to [`catalog.json`](catalog.json)
- Improve Windows flashing reliability
- Add SHA256 checksum verification after download
- Add VM launch support (open ISO directly in VirtualBox / QEMU)
- Improve macOS `dd` progress reporting
- Add a settings page (custom download directory, themes)
- Geographic mirror selection for faster downloads

### How to contribute

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Make your changes and commit: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

Please open an issue first for large changes so we can discuss.

### Reporting broken download links

The catalog uses official mirrors but URLs do occasionally change. If a download fails, open an issue with:
- The OS name and version
- The error message you see
- The output of `flashos drives` (CLI) if relevant

---

## Acknowledgements
used a little bit ai for debugging and techstack cuz ion know much stuff about diskpart.

Inspired by [Rufus](https://rufus.ie) and [balena Etcher](https://etcher.balena.io). ISOs hosted by their respective projects on official mirrors and the Internet Archive.

---

## License
Copyright (c) 2026 Dhruv Dumra

This source code is made publicly viewable for transparency and learning purposes only.
You may download and use the compiled FlashOS application freely.
You may NOT use, copy, modify, or distribute this source code, in whole or in part,
in your own software projects, products, or services.
For licensing inquiries, contact the author.

---

## Disclaimer

FlashOS writes directly to disk devices. **Always double-check you've selected the correct USB drive** before flashing. The authors are not responsible for any data loss. A confirmation prompt is shown before any write operation.
