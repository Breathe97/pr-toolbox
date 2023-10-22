import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import { ipcMainlisten } from './events/core'
// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

const icon = `${process.env.VITE_PUBLIC}/pryun_logo.png`
function createWindow() {
  win = new BrowserWindow({
    icon,
    width: 1200,
    height: 720,
    // opacity: 0.7,
    // frame: false, // 无边框
    // frame: false,
    autoHideMenuBar: true, // 取消菜单栏
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // win.setIgnoreMouseEvents(true) // 鼠标事件穿透

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
  ipcMainlisten(win)

  // electronRemote.initialize() // 初始化远端线程监听
  // electronRemote.enable(win.webContents) // 开启远程事件
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)
