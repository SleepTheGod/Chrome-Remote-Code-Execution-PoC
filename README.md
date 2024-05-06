The readme is just an example the files are the poc figure it out

1. Example using Electron
Electron allows you to use web technologies to build desktop applications and can interact with the system. Here’s a basic example of using Electron to open PowerShell

const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');

  // Execute PowerShell command
  exec('powershell', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

app.whenReady().then(createWindow);

2. Server-Side Execution with User Interface on Web
If you need to execute PowerShell commands and have a web interface, you can use a server-side language (e.g., Node.js, Python) to handle the execution safely.

const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/run-powershell', (req, res) => {
  exec('powershell.exe -command "Get-Date"', (err, stdout, stderr) => {
    if (err) {
      return res.send(`Error: ${err}`);
    }
    if (stderr) {
      return res.send(`Stderr: ${stderr}`);
    }
    res.send(`PowerShell Output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

Web Technology with Enhanced Privileges
Technologies like HTA (HTML Applications) for Windows can run HTML applications with more privileges than a typical web page, but this approach is generally not recommended due to security risks and limited scope (Windows only).
