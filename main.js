const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      // turn off nodeIntegrations:
      nodeIntegration: false,
      // Protects against prototype pollution:
      contextIsolation: true,
      // Disable remote:
      enableRemoteModule: false,
      // Use a preload script:
      preload: path.join(__dirname, "preload.js"),
    },
  });
};

app.on("ready", createWindow);
