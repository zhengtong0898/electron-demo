// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')



contextBridge.exposeInMainWorld('electronAPI', {

  setSize: (width: number, height: number) => {
    ipcRenderer.send('setSize', width, height)
  },

  setTitle: (title: string) => {
    ipcRenderer.send('setTitle', title)
  }

})
