<template>
  <div class="side-index bg-white-shadow" v-if="headers.length > 0">
    <div class="color-black side-index-title">目录</div>
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
}
.side-index-title {
  padding-left: 40px;
  font-weight: 900;
}
.header-h2 {
  text-indent: 2;
}
.header-a {
  color: var(--c-black);
  font-weight: 900;
  display: block;
  padding: 5px 0;
}
.side-index-ul {
  list-style-type: none;
}
</style>

