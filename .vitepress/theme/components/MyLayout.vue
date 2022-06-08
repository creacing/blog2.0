<template>
  <div style="position: relative">
    <div class="bg-cover"></div>
    <div :class="showNavCover ? 'nav-cover' : ''"></div>
    <Layout>
      <template #navbar-search></template>
      <template #page-top class="page-top">
        <Title v-if="isPost" />
        <Category v-if="isPost" />
      </template>
      <template #page-bottom> </template>
      <!-- Home slot-->
      <template #home-features> <home /></template>
    </Layout>
    <!-- copywright -->
    <CopyWright />
  </div>
</template>
<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
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
// 实时滚动条高度
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  scroll > 0 ? (showNavCover.value = true) : (showNavCover.value = false);
};
</script>
<style lang='scss' scoped>
.nav-cover {
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.3);
}
.bg-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  //   height: 60rem;
  background-image: linear-gradient(to top, #12c0fa 0%, #158df4 100%);
  background-clip: text;
}
</style>