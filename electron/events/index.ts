import { Menu, Tray, clipboard, BrowserWindow } from 'electron'
import { user32 } from 'win32-api'
interface EventVue2Electron {
  method: string
  data: {
    [key: string]: any
  }
}

// 事件处理
export const action = async (win: BrowserWindow, e: EventVue2Electron) => {
  const { method = '', data = {} } = e
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:action:${method}`, data)
  switch (method) {
    case 'getW': {
      const hWnd = user32.FindWindowExW('')
      console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:hWnd`, hWnd)
      break
    }
    case 'copyText': {
      const { text = '' } = data
      clipboard.writeText(text, 'selection')
      break
    }
    case 'setTray': {
      let tray = null
      const icon = `${process.env.VITE_PUBLIC}/pryun_logo.png`
      tray = new Tray(icon)
      const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' },
      ])
      tray.setToolTip('This is my application.')
      tray.setContextMenu(contextMenu)
      break
    }
    case 'showDevTools': {
      const { action = true } = data
      if (action) {
        win.webContents.openDevTools() // 开启调试控制台
      } else {
        win.webContents.closeDevTools()
      }
      break
    }

    default:
      break
  }
}
