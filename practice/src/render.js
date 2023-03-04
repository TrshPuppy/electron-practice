// Buttons
const videoElement = document.querySelector("video");
const startBtn = document.getElementByID("startBtn");
const stopBtn = document.getElementByID("stopBtn");
const videoSelectBtn = document.getElementByID("videoSelectBtn");
videoSelectBtn.onclick = getVideoSources;

// Add desktop capture using 'require' (in order to get video sources):
const { desktopCapturer } = require("electron");

// Get video sources
async function getVideoSources() {}
