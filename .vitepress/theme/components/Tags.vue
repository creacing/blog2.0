<template>
  <div>
    <div class="bg-cover flexXY flexCol absolute">
      <h1 class="tags-header">分类</h1>
      <Motto />
    </div>

    <div class="my-tags bg-white-shadow p-10">
      <div class="tags">
        <div
          v-for="(item, key, index) in data"
          :key="item"
          :style="[
            {
              background:
                index < colorList.length
                  ? colorList[index]
                  : colorList[`${(index + 1) % colorList.length}`],
            },
          ]"
          style="opacity: 1; height: 2rem"
          class="m-5 flexXY"
        >
          <span
            @click="toggleTag(key)"
            class="tag"
            :style="getFontSize(data[key].length)"
            :class="{ activetag: selectTag === key }"
          >
            {{ key }}
            <span class="tag-length">{{ data[key].length }}</span>
          </span>
        </div>
      </div>
      <div class="tags-content">
        <div v-for="(article, index) in data[selectTag]" :key="index">
          <a :href="withBase(article.regularPath)" class="article">
            <div class="title">
              {{ article.frontMatter.title }}
            </div>
            <div class="date">{{ article.frontMatter.date }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script  setup>
import Motto from "./Motto.vue";
import { computed, ref, onMounted } from "vue";
import { useData, withBase } from "vitepress";
import { initTags } from "../utils";
onMounted(() => {
  const content = document.getElementsByClassName("content")[0];
  content.style.position = "unset";
});
//颜色列表
const colorList = [
  "#ff9804",
  "#69b9cd",
  "#60a8d3",
  "#f1a9cc",
  "#caaeff",
  "#45cadd",
  "#b29ddb",
  "#84dcc6",
  "#fcc7f5",
  "#c2f8f6",
  "#b288ff",
  "#9ed8d8",
  "#c2e9e6",
  "#b9f2e7",
  "#2ac6da",
  "#8193f1",
  "#ffcbd5",
];

const { theme } = useData();
const data = computed(() => initTags(theme.value.posts));

let articlesNum = theme.value.postLength;

//给tags设置默认值
const selectTagDefault = Object.keys(data.value)[0];
let selectTag = ref("");
selectTag.value = selectTagDefault;

const toggleTag = (tag) => {
  selectTag.value = tag;
};

// set font-size
const getFontSize = (length) => {
  let size = length * 0.04 + 0.85;
  return { fontSize: `${size}em` };
};
</script>

<style lang='scss' scoped>
.tags-content {
  padding: 5px;
}
.bg-cover {
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 45vh;
  background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  background-clip: text;
  .tags-header {
    font-weight: bold;
    padding-bottom: 14px;
  }
}
.my-tags {
  background-color: #fff;
  border-radius: 10px;
  margin-top: 25vh;
  min-height: 1000px;
  .tags {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;

    margin-bottom: 10px;
    padding-bottom: 20px;
    .tag {
      display: inline-block;
      margin: 6px 8px;
      font-size: 0.85em;
      line-height: 25px;
      transition: 0.4s;
      color: #fff;
      cursor: pointer;
      font-size: 1rem !important;
    }
    .tag:hover {
      color: mediumslateblue;
    }
    .activetag {
      color: #000;
    }
  }
  .header {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: left;
    .fas-icon {
      width: 2rem;
      height: 2rem;
    }
    .header-text {
      padding-left: 10px;
    }
  }
  .article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 10px;
    color: #58bdee;
    font-weight: 600;
    transition: border 0.3s ease, color 0.3s ease;
    .date {
      font-family: Georgia, sans-serif;
    }
  }
  .article:hover {
    text-decoration: none;
    color: mediumslateblue;
  }
}
</style>
