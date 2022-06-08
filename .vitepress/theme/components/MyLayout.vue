<template>
  <div style="position: relative">
    <div class="bg-cover"></div>
    <div class="nav-cover"></div>
    <Layout>
      <!-- <template #navbar-search></template> -->
      <!-- <template #page-top class="page-top">
        <Title v-if="isPost" />
        <Category v-if="isPost" />
      </template> -->
      <template #page-bottom><Card /> </template>
      <!-- Home slot-->
      <template #home-features> <Page /></template>
    </Layout>
    <!-- copywright -->
    <CopyWright />
  </div>
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import CopyWright from "./CopyWright.vue";
import Card from "./Card.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
import { useData } from "vitepress";
import { computed } from "vue";
const isPost = computed(() => {
  //判断是否为文章页面用于控制 <Title/> <Category/> 显示
  return useData().page.value.relativePath.indexOf("posts") > -1 ? true : false;
});
</script>
<style lang='scss' scoped>
.nav-cover {
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  width: 100%;
border-bo}
.bg-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100vh;
  height: 953px;
  background-image: linear-gradient(to top, #12c0fa 0%, #158df4 100%);
  background-clip: text;
}
</style>