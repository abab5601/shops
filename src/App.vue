<template>
  <Vnav />
  <router-view />
</template>
<script setup>
import Vnav from './components/nav.vue';

</script>
<style lang="scss">
body {
  background-color: #ffe6d9;
}

/* 調整滾動條的寬度 */
::-webkit-scrollbar {
  width: 2px;
  height: 11px;
  /* 設定寬度為 2 像素 */
}

/* 調整垂直滾動條的寬度 */
::-webkit-scrollbar-vertical {
  width: 2px;
  /* 設定垂直滾動條的寬度為 2 像素 */
}

/* 調整水平滾動條的寬度 */
::-webkit-scrollbar-horizontal {
  height: 2px;
  /* 設定水平滾動條的高度為 2 像素 */
}

/* 定義滾動條的軌道 */
::-webkit-scrollbar-track {
  background: #E0B89F;
  border-radius: 10px;
}

/* 定義滾動條的滑塊 */
::-webkit-scrollbar-thumb {
  background-color: #BF866D;
  border-radius: 6px;
  border: 3px solid #E0B89F;
}

/* 定義滾動條的角落 */
::-webkit-scrollbar-corner {
  background: #E0B89F;
}</style>
