const info = document.getElementById("info");
info.innerText = `Chrome: ${versions.chrome()}`;

// With the ping handler set up (see main.js, preload.js for ipcMain and ipcRenderer) a message can now be sent from renderer to main:
const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // should print 'pong'
};

func();
