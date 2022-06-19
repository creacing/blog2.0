<template>
  <div class="my-side-bar">
    <div class="my-side-item-cover" v-for="side in navList" :key="side">
      <div class="my-side-item">
        <img :src="side.icon" alt="" />
        <a class="my-side-link" :href="side.link">{{ side.text }}</a>
        <img :src="side.pullSrc" alt="" :v-show="side.pull" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import siteConfig from "./../siteConfig.js";
const navList = ref(siteConfig.navList);
</script>
<style lang='scss' scoped>
.my-side-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  .my-side-item-cover {
    padding: 10px 5px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .my-side-item {
      position: relative;
      min-width: 5rem;
      height: 1.5rem;
      display: flex;
      width: 5rem;
      justify-content: center;
      .my-side-link {
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        min-width: 2rem !important;
        color: #fff;
      }
    }
  }
  .my-side-item-cover:hover {
    background-color: rgba($color: #fff, $alpha: 0.1);
  }
}
</style>

