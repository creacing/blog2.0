<template>
  <!-- 入口 -->
  <div :class="showNavCover ? 'nav-cover' : ''"></div>
  <Layout>
    <template #navbar-search style="display: flex">
      <MyNav />
      <Search />
    </template>
    <template #page-top>
      <div v-if="isPost">
        <Title />
        <Category />
      </div>
    </template>
    <template #page-bottom> </template>
    <template #home-features> <home /></template>
  </Layout>
  <CopyWright />
</template>
<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import MyNav from "./MyNav.vue";
import Search from "./Search.vue";
import Recommend from "./Recommend.vue";
import CopyWright from "./CopyWright.vue";
import Card from "./Card.vue";
import Home from "./Home.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
import { useData } from "vitepress";
import { computed, ref, onMounted } from "vue";
const showNavCover = ref(false);
const isPost = computed(() => {
  //判断是否为文章页面用于控制 <Title/> <Category/> 显示
  return useData().page.value.relativePath.indexOf("posts") > -1 ? true : false;
});
onMounted(() => {
  // 监听滚动条位置
  window.addEventListener("scroll", scrollTop, true);
});
// 实时滚动条高度 控制 导航栏的样式
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  scroll > 0 ? (showNavCover.value = true) : (showNavCover.value = false);
};
</script>
<style lang='scss' scoped>
.nav-cover {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
:deep .content {
  // padding: 10px;
  // background-color: #fff;
  // box-shadow: 2px 2px 10px 2px rgba($color: #000, $alpha: 0.3);
  // min-height: 40rem;
}
</style>