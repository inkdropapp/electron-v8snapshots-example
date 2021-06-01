const { app, BrowserWindow } = require('electron')

if (typeof snapshotResult !== 'undefined') {
  console.log('snapshotResult available!', snapshotResult)
}

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
