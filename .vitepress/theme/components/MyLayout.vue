<template>
  <!-- 入口 -->
  <!-- 右侧按钮 -->
  <div class="right-buttons">
    <SideButtons />
  </div>
  <!-- 导航栏底部阴影效果 fixed-->
  <div
    :class="
      showNavCover
        ? isHome === 0
          ? 'nav-cover-home'
          : isHome === 1
          ? 'nav-cover'
          : 'nav-cover-article'
        : ''
    "
  ></div>
  <!-- 文章内容侧边栏 -->
  <div v-if="isPost" class="article-side-bar">
    <SideIndex />
  </div>
  <Layout>
    <!-- 导航栏 -->
    <template #navbar-search style="display: flex">
      <MyNav />
      <Search />
    </template>
    <template #sidebar-top>
      <div :class="isHome === 0 ? 'side-bar-home' : 'side-bar'">
        <SideBar />
      </div>
    </template>
    <template #sidebar-bottom></template>
    <template #page-top>
      <!-- 文章标题背景色 -->
      <div class="article-cover" v-if="isPost">
        <!-- 文章遮罩 -->
        <img
          class="article-bg-img"
          src="https://image.3001.net/images/20220123/16429456471702.png"
          alt=""
        />
        <div class="article-mask"></div>
        <div class="article-title">
          <Title />
        </div>
      </div>
    </template>
    <template #page-bottom> </template>
    <template #home-features> <home /></template>
  </Layout>
  <div class="copy-wright">
    <CopyWright />
  </div>
</template>
<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import SideBar from "./SideBar.vue";
import MyNav from "./MyNav.vue";
import Search from "./Search.vue";
import Recommend from "./Recommend.vue";
import CopyWright from "./CopyWright.vue";
import Card from "./Card.vue";
import Home from "./Home.vue";
import SideIndex from "./SideIndex.vue";
import Title from "./Title.vue";
import SideButtons from "./SideButtons.vue"
import { useData } from "vitepress";
import { computed, ref, onMounted } from "vue";
const showNavCover = ref(false);
const isHome = ref(0);
const isPost = computed(() => {
  const res =
    useData().page.value.relativePath.indexOf("posts") > -1 ? true : false;

  if (res) {
    setTimeout(() => {
      const content = document.getElementsByClassName("content")[0];
      content.style["margin-top"] = "25vh";
      content.style["padding"] = "10px";
      // content.style["background-color"] = "rgba(60, 70, 98, 1)";
      content.style["background-color"] = "#fff";
      content.style["box-shadow"] = "var(--shadow)";
      content.style["min-height"] = "40rem";
      content.style["border-radius"] = "1rem";
      content.style["padding-left"] = "1.5rem";
      content.style["padding-right"] = "1.5rem";
      content.style["position"] = "relative";
      // content.children[0].style["background-color"] = "rgba(60, 70, 98, 1)";
    });
  } else {
    setTimeout(() => {
      const content = document.getElementsByClassName("content")[0];
      content.style["margin-top"] = "unset";
      content.style["padding"] = "unset";
      content.style["background-color"] = "unset";
      content.style["box-shadow"] = "unset";
      content.style["min-height"] = "unset";
      content.style["border-radius"] = "unset";
      content.style["padding-left"] = "unset";
      content.style["padding-right"] = "unset";
      content.style["position"] = "unset";
    });
  }
  //判断是否为文章页面用于控制 <Title/> <Category/> 显示
  return res;
});

onMounted(() => {
  // 监听滚动条位置
  window.addEventListener("scroll", scrollTop, true);
  window.addEventListener("click", () => {
    const href = window.location.href
    if (href.endsWith("/")) {
      isHome.value = 0;
    } else if (href.endsWith("about.html") || href.endsWith("archives.html") || href.endsWith("tags.html")) {
      isHome.value = 1;
    } else {
      isHome.value = -1
    }
  });
});
// 实时滚动条高度 控制 导航栏的样式
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  scroll > 0 ? (showNavCover.value = true) : (showNavCover.value = false);
};
</script>
<style lang='scss' scoped>
.nav-cover-home {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 1;
  // background-color: rgba(59, 238, 238, 0.8);
  // background-color: rgba($color: #12c0fa, $alpha: 0.8);
  background-image: linear-gradient(to top, #12c0fa 0%, #158df4 100%);
  opacity: 0.8;
}
.nav-cover {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 1;
  // background-color: rgba(59, 238, 238, 0.8);
  // background-color: rgba($color: #65d979, $alpha: 0.8);
  background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  opacity: 0.8;
}
.nav-cover-article {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 1;
  // background-color: rgba(59, 238, 238, 0.8);
  // background-color: rgba($color: #65d979, $alpha: 0.8);
  // background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  background-color: rgba(175, 167, 167, 0.8);
  opacity: 0.8;
}
.article-cover {
  height: 45vh;
  // background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.article-mask {
  height: 45vh;
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: -1;
}
.article-bg-img {
  height: 45vh;
  position: absolute;
  width: 100%;
  z-index: -2;
}
.article-title {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
}
.article-side-bar {
  position: fixed;
  z-index: 1000;
  top: 40vh;
  right: 8rem;
}
@media (max-width: 1400px) {
  .article-side-bar {
    display: none;
  }
}
.side-bar {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
}
.side-bar-home {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #12c0fa 0%, #158df4 100%);
}
.right-buttons {
  position: fixed;
  right: 3rem;
  bottom: 20rem;
}
</style>