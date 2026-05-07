# tools/

This folder holds bundled third-party tools that FlashOS uses at runtime.
electron-builder automatically copies this whole folder into the app package.

---

## tools/windows/  (Windows only)

### wimlib-imagex.exe

Required for splitting Windows ISOs > 4 GB when using FAT32 filesystem.

**Download:**
1. Go to https://wimlib.net/downloads/
2. Download the latest Windows binary zip (e.g. `wimlib-1.14.4-windows-x86_64-bin.zip`)
3. Extract it
4. Copy `wimlib-imagex.exe` into this folder: `tools/windows/wimlib-imagex.exe`

That's all. FlashOS will call it automatically when needed.

---

## Linux dependencies  (installed by user, not bundled)

On Linux, FlashOS calls system tools via pkexec (polkit). The user needs these installed:

```bash
# Ubuntu / Debian / Mint
sudo apt install parted dosfstools ntfs-3g rsync wimtools syslinux syslinux-utils

# Fedora
sudo dnf install parted dosfstools ntfs-3g rsync wimlib syslinux

# Arch
sudo pacman -S parted dosfstools ntfs-3g rsync wimlib syslinux
```

FlashOS will check for these on startup via the `check-tools` IPC call
and show a warning in the UI if any are missing before flashing.

---

## macOS

No additional tools needed. macOS uses `dd` (built-in) and `diskutil` (built-in).
