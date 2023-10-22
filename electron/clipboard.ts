import { clipboard } from 'electron'

// 复制文本
export const copyText = (text = '') => {
  clipboard.writeText(text, 'selection')
}
