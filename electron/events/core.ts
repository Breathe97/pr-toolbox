import { ipcMain, ipcRenderer, BrowserWindow } from 'electron'
import { action } from './index'

const eventsName = 'vue-event' // 事件集名称

// 视图层监听 在 ./preload.ts 调用 转发到逻辑层
export const ipcRendererlisten = (ev: MessageEvent) => {
  const { data = {} } = ev
  ipcRenderer.send(eventsName, JSON.stringify(data))
}

// 逻辑层监听 在 ./main.ts 调用 处理视图层
export const ipcMainlisten = (win: BrowserWindow) => {
  ipcMain.on(eventsName, (_, data: string) => {
    // console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:data`, data)
    action(win, JSON.parse(data))
  })
}
