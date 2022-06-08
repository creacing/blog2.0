<template>
  <div class="bg-cover">
    <div>///////////////////////////////</div>
  </div>
  <!-- <div class="card1"></div> -->
  <div class="card-group">
    <div class="card2"></div>
    <div class="card3"></div>
  </div>

  <!-- <div style="padding-top: 10px">
    <div v-for="yearList in data" class="yearItem" :key="yearList">
      <div class="year">
        {{ yearList[0].frontMatter.date.split("-")[0] }}
      </div>
      <a
        :href="withBase(article.regularPath)"
        v-for="(article, index) in yearList"
        :key="index"
        class="article"
      >
        <div class="title">
          <div class="title-o"></div>
          {{ article.frontMatter.title }}
        </div>
        <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
      </a>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { computed } from "vue";
import { useYearSort } from "../utils";

const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
console.log(data, "data");
</script>

<style lang='scss' scoped>
.bg-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 45vh;
  background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  background-clip: text;
}
.card1 {
}
.card-group {
  height: 10vh;
  width: 100%;
  background-color: blue;
  margin-top: 30vh;
}
/////////////////////
.yearItem {
  border-bottom: 1px dashed #c7c7c7;
}
.yearItem:last-child {
  border: none;
}
.year {
  padding: 16px 0 8px 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-color);
}

.article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  /* color: #666; */
  color: #000;
  font-weight: 600;
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: var(--c-brand);
}
.date {
  font-family: Georgia, sans-serif;
}
</style>
