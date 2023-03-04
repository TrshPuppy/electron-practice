const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    title: "Electron Practice",
    webPreferences: {
      //   // turn off nodeIntegrations:
      //   nodeIntegration: false,
      //   // Protects against prototype pollution:
      //   contextIsolation: true,
      //   // Disable remote:
      //   enableRemoteModule: false,
      //   // Disallow site from loading resources via HTTP:
      //   allowRunningInsecureContent: false,
      // Use a preload script:
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // ipcMain.handle: always call this before loading the HTML so it is ready before the invoke call is sent from the renderer:
  // This defines a ping channel which allows messages to be sent from the renderer to the main process:
  ipcMain.handle("ping", () => "pong");
  mainWindow.loadFile("index.html");
};

app.on("ready", createWindow);
