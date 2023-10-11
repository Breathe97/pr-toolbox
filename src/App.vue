<template>
  <div class="menus">
    <div class="menus-item" @click="setTray">最小化</div>
  </div>
</template>
<script setup lang="ts">
// import { Menu, Tray } from 'electron'
const setTray = () => {
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:`)
}
</script>
<style scoped lang="scss">
.menus {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .menus-item {
    padding: 8px 20px;
    background-color: #2b2b2b;
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
