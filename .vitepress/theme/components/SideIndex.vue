<template>
  <div class="side-index bg-white-shadow" v-if="headers.length > 0">
    <div class="color-black side-index-title">
      <img src="" class="side-index-title-icon" alt="">
      <span class="side-index-title-name">目录</span>
      </div>
    <ul class="side-index-ul">
      <li class="header" v-for="(item, index) in headers" :key="item">
        <a
          :href="`#${item.slug}`"
          class="header-h1 header-a"
          v-if="item.level === 2"
          >{{ `${index + 1}. ${item.title}` }}
        </a>
        <ul v-if="item.level === 3">
          <li>
            <a :href="`#${item.slug}`" class="header-h2 header-a">{{
              item.title
            }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";
const pageData = useData();
const headers = pageData.page.value.headers;
console.log(headers, "pageData");
</script>
<style scoped>
.side-index {
  width: 20rem;
  border-radius: 1rem;
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 30rem;
}
.side-index-title-name{
  font-size: 1.5rem;
  font-weight: 900;
}
.side-index-title {
  padding-left: 40px;
  font-weight: 900;
}
.header-h2 {
  text-indent: 2;
}
.header-a {
  color: rgb(0, 0, 0);
  /* font-weight: 900; */
  display: block;
  padding: 5px 0;
}
.side-index-ul {
  margin: 0;
  list-style-type: none;
}
</style>

