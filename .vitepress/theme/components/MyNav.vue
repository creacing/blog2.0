<template>
  <div class="my-nav-list">
    <a :href="nav.link" v-for="nav in navList" :key="nav">{{ nav.text }}</a>
  </div>
</template>

<script setup>
const navList = [
  { text: "首页", link: "/", icon: "", child: [] },
  { text: "文章", link: "/archives", icon: "", child: [] },
  { text: "分类", link: "/tags", icon: "", child: [] },
  { text: "关于", link: "/about", icon: "", child: [] },
];
</script>
<style lang='scss' scoped>
.my-nav-list {
  min-width: 40rem;
  color: black;
  height: 60px;
  width: 300px;
  display: flex;
  z-index: 10000;
}
</style>

