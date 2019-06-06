const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
    win = new BrowserWindow({width: 340, height: 510, icon: ""});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Open devTools
    //win.webContents.openDevTools();
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})