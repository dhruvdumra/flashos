const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('flashos', {
  // Window
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close:    () => ipcRenderer.send('window-close'),

  // System detection
  detectFirmware:             ()   => ipcRenderer.invoke('detect-firmware'),
  recommendPartitionSettings: (o)  => ipcRenderer.invoke('recommend-partition-settings', o),
  checkTools:                 ()   => ipcRenderer.invoke('check-tools'),
  getPlatform:                ()   => ipcRenderer.invoke('get-platform'),

  // USB
  getUSBDrives: () => ipcRenderer.invoke('get-usb-drives'),

  // Download
  downloadISO:           (o)  => ipcRenderer.invoke('download-iso', o),
  onDownloadProgress:    (cb) => ipcRenderer.on('download-progress', (_, d) => cb(d)),
  removeDownloadListener: ()  => ipcRenderer.removeAllListeners('download-progress'),

  // Flash
  flashISO:           (o)  => ipcRenderer.invoke('flash-iso', o),
  onFlashProgress:    (cb) => ipcRenderer.on('flash-progress', (_, d) => cb(d)),
  removeFlashListener: ()  => ipcRenderer.removeAllListeners('flash-progress'),

  // Utils
  openFolder: (p) => ipcRenderer.invoke('open-folder', p),
})
