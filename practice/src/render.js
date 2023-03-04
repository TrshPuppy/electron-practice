const path = require("path");
// const localModule = require

// Buttons
const videoElement = document.querySelector("video");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const videoSelectBtn = document.getElementById("videoSelectBtn");
videoSelectBtn.onclick = getVideoSources;

// Add desktop capture using 'require' (in order to get video sources):
const desktopCapturer = require("electron");
const remote = require("electron");
// Add Menu for frontend use using the remote module (adds a menu for the user to use to manipulate data from inputSources)
const { Menu } = remote;

// Get video sources
async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ["window", "screen"],
  });

  // Add menu for user:
  const videoOptionsMenu = Menu.buildFromTemplate(
    // This method expects an array or objects, ea object being a different menu option:
    // mapping through sources: for ea source in inputSources return an Obj where label = source name, and add click event handler:
    inputSources.map((source) => {
      return {
        label: source.name,
        click: () => selectSource(source),
      };
    })
  );

  // Call popup to make menu appear/ pop up:
  videoOptionsMenu.popup();
}
