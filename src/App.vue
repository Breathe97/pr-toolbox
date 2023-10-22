<template>
  <div class="home">
    <div class="title">张文鑫是傻呗！！！</div>
    <div class="menus">
      <div class="menus-item" @click="copyText">复制内容</div>
      <div class="menus-item" @click="setTray">托盘</div>
      <div class="menus-item" @click="showDevTools(true)">打开调试</div>
      <div class="menus-item" @click="showDevTools(false)">关闭调试</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const copyText = () => {
  let text = '123'
  postMessage({ method: 'copyText', data: { text } }, '*')
}
const setTray = () => {
  postMessage({ method: 'setTray', data: {} }, '*')
}
const showDevTools = (action = true) => {
  postMessage({ method: 'showDevTools', data: { action } }, '*')
}
</script>
<style scoped lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  flex: 1;
  color: #ffffff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menus {
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .menus-item {
    padding: 8px 20px;
    background-color: var(--color-sider);
    color: #ffffff;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #0097ff;
    }
  }
}
</style>
