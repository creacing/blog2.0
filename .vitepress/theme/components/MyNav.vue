<template>
  <div class="my-nav-list">
    <div
      class="my-nav-item-cover"
      v-for="nav in navList"
      :key="nav"
      @mouseenter="mouseenter(nav)"
      @mouseleave="mouseleave(nav)"
    >
      <div class="my-nav-item">
        <img :src="nav.icon" alt="" />
        <a class="my-nav-link" :href="nav.link">{{ nav.text }}</a>
        <img :src="nav.pullSrc" alt="" :v-show="nav.pull" />

        <NavDialog
          :children="nav.children"
          class="my-nav-dialog"
          v-show="nav.children.length > 0 && currentNavId === nav.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavDialog from "./NavDialog.vue";
import siteConfig from "./../siteConfig.js";
//pull 0 有 向下, 1 有 向上, -1 没有
const navList = ref(siteConfig.navList);
const pullDic = siteConfig.pullDic;
let currentNavId = ref("");
const mouseenter = (nav) => {
  if (nav.children.length > 0) {
    currentNavId.value = nav.id;
  }
  const id = nav.id;
  for (const nav of navList.value) {
    if (nav.pullSrc && nav.id === id) {
      if (nav.pull === "0") {
        nav.pull = "1";
        nav.pullSrc = pullDic[nav.pull];
      }
    }
  }
};
const mouseleave = (nav) => {
  currentNavId.value = "";
  const id = nav.id;
  for (const nav of navList.value) {
    if (nav.pullSrc && nav.id === id) {
      if (nav.pull === "1") {
        nav.pull = "0";
        nav.pullSrc = pullDic[nav.pull];
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.my-nav-list {
  height: 60px;
  width: 300px;
  display: flex;
  z-index: 1000;
  align-items: center;
  .my-nav-item-cover {
    padding: 10px 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .my-nav-item {
      position: relative;
      min-width: 5rem;
      height: 1.5rem;
      display: flex;
      width: 5rem;
      justify-content: center;
      .my-nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        min-width: 2rem !important;
        color: #fff;
      }
      .my-nav-dialog {
        position: absolute;
        top: 3rem;
        left: -50%;
      }
    }
  }
  .my-nav-item-cover:hover {
    background-color: rgba($color: #fff, $alpha: 0.1);
  }
}
@media (max-width: 1200px) {
  .my-nav-list {
    display: none;
  }
}
</style>

