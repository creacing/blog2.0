<template>
  <div>
    <MyCard />
    <div class="blog-list">
      <div class="blog-bg">
        <a
          class="blog-item"
          v-for="item in posts"
          :href="withBase(item.regularPath)"
          :key="item"
        >
          <Card />
        </a>
      </div>
    </div>
    <div class="pagination">
      <div
        class="link"
        :class="{ activeLink: pageCurrent === i }"
        v-for="i in pagesNum"
        :key="i"
        @click="go(i)"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface post {
  regularPath: string;
  frontMatter: object;
}
import Card from "./Card.vue";
import { onMounted, ref, reactive } from "vue";
import MyCard from "./MyCard.vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();

// get posts
let postsAll = theme.value.posts || [];
// get postLength
let postLength = theme.value.postLength;
// get pageSize
let pageSize = theme.value.pageSize + 4;
//  pagesNum
let pagesNum =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;
pagesNum = parseInt(pagesNum.toString());
//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});
// pagination
let allMap = {};
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = [];
}
let index = 0;
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1;
  }
  allMap[index].push(postsAll[i]);
}
// set posts
let posts = ref([]);
posts.value = allMap[pageCurrent.value - 1];

// click pagination
const go = (i) => {
  pageCurrent.value = i;
  posts.value = allMap[pageCurrent.value - 1];
};
// timestamp transform
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  switch (dateArray[1]) {
    case "1":
    case "01":
      month = `Jan`;
      break;
    case "2":
    case "02":
      month = `Feb`;
      break;
    case "3":
    case "03":
      month = `Mar`;
      break;
    case "4":
    case "04":
      month = `Apr`;
      break;
    case "5":
    case "05":
      month = `May`;
      break;
    case "6":
    case "06":
      month = `Jun`;
      break;
    case "7":
    case "07":
      month = `Jul`;
      break;
    case "8":
    case "08":
      month = `Aug`;
      break;
    case "9":
    case "09":
      month = `Sep`;
      break;
    case "10":
      month = `Oct`;
      break;
    case "11":
      month = `Nov`;
      break;
    case "12":
      month = `Dec`;
      break;
    default:
      month = `Month`;
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped lang='scss'>
.blog-list {
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .blog-bg {
    display: flex;
    max-width: 70rem;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog-item {
      margin: 1rem;
      display: block;
      cursor: pointer;
    }
    .blog-item:hover {
      text-decoration: none;
    }
  }
  @media (max-width: 1000px) {
    .blog-bg {
      width: 100%;
      justify-content: center;
    }
  }
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 70px;
  width: 100%;
}
.link {
  margin-right: 5px;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.link:hover {
  transform: translate(-1px, -1px);
}
.activeLink {
  background-color: mediumslateblue;
  color: white;
}
</style>
