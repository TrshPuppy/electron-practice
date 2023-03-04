// Preload scripts are injected before the web page loads in the renderer:
const { contextBridge, ipcRenderer } = require("electron");

// contextBridge creates a safe, bidirectional bridge b/w isolated contexts:
// 'exposeInMainWorld' Main World is the JS context that the main renderer code runs in (the page loaded in the renderer executes code here)
contextBridge.exposeInMainWorld("versions", {
  // Expose app's versions into the renderer
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => proccess.versions.electron,
  // To attach this script to the renderer process, the webPreferences.preload option specifies the path in 'main.js'

  // It isn't possible to access the Node.js API from a renderer process. To fix that use ipcMain and ipcRenderer:
  // 'ping' is a global function that will return a string from the main process:
  // THE ipcRenderer MODULE SHOULD ALWAYS BE WRAPPED IN A HELPER FUNCTION (security risk)
  // See the handle listener in main.js
  ping: () => ipcRenderer.invoke("ping"),
});
