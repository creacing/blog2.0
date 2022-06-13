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
//pull 0 有 向下, 1 有 向上, -1 没有
const pullDic = { 0: "/navDown.svg", 1: "navUp.svg" };
const navList = ref([
  {
    id: "1",
    text: "首页",
    link: "/",
    icon: "/home.svg",
    pull: "-1",
    pullSrc: "",
    children: [],
  },
  {
    id: "2",
    text: "文章",
    link: "/archives",
    icon: "/article.svg",
    pull: "0",
    pullSrc: pullDic[0],
    children: [
      { id: "21", text: "标签", link: "/archives", icon: "/tag.svg" },
      { id: "22", text: "分类", link: "/archives", icon: "/tag.svg" },
      { id: "23", text: "归档", link: "/archives", icon: "/tag.svg" },
    ],
  },
  {
    id: "3",
    text: "分类",
    link: "/tags",
    icon: "/tag.svg",
    pull: "0",
    pullSrc: pullDic[0],
    children: [
      { id: "31", text: "标签x", link: "/archives", icon: "/tag.svg" },
      { id: "32", text: "分类x", link: "/archives", icon: "/tag.svg" },
      { id: "33", text: "归档x", link: "/archives", icon: "/tag.svg" },
    ],
  },
  {
    id: "4",
    text: "关于",
    link: "/about",
    icon: "/about.svg",
    pull: "-1",
    pullSrc: "",
    children: [],
  },
  //   { text: "", link: "", icon: "/search.svg", child: [] },
]);
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
      justify-content: space-between;
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
      .my-nav-dialog::before {
        content: "";
        position: absolute;
        // height: 15px;
        // width: 15px;
        // background-color: green;

        top: -30px;
        left: 50%;
        border: 15px solid;
        border-color: transparent transparent rgba($color: #fff, $alpha: 0.3);
        transform: translateX(-50%);
      }
    }
  }
  .my-nav-item-cover:hover {
    background-color: rgba($color: #fff, $alpha: 0.1);
  }
}
@media (max-width: 1000px) {
  .my-nav-list {
    display: none;
  }
}
</style>

