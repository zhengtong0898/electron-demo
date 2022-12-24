// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')



contextBridge.exposeInMainWorld('electronAPI', {

  setSize: (width: number, height: number) => {
    console.log("setSize: running")
    ipcRenderer.send('setSize', width, height)
  },

  setTitle: (title) => {
    ipcRenderer.send('setTitle', title)
  }

})
