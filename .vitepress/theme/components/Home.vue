<template>
  <div class="bg-cover"></div>
  <div>
    <Home-head />
    <div class="blog-list">
      <Recommend class="recommend" />
      <div class="blog-bg">
        <a
          class="blog-item"
          v-for="item in posts"
          :href="withBase(item.regularPath)"
          :key="item"
        >
          <Card :card-value="item" />
        </a>
      </div>
    </div>
    <div class="pagination">
      <button class="page-btn link" v-show="pagesNum > 5" @click="getPrePages">
        &lt;
      </button>
      <div class="pages">
        <div
          class="link"
          :class="{ activeLink: pageCurrent === i }"
          v-for="i in pagesQueue"
          :key="i"
          @click="go(i)"
        >
          {{ i }}
        </div>
      </div>

      <button
        class="page-btn link"
        v-show="pagesNum > 5"
        @click="getAfterPages"
      >
        &gt;
      </button>
    </div>
  </div>
</template>
<script  setup>
import Card from "./Card.vue";
import Recommend from "./Recommend.vue";
import HomeHead from "./HomeHead.vue";
import { ref } from "vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();
const getPage = () => { };
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

//pagesQueue当前可以看到的pages页码有哪些
const pagesQueueValue = [];
const pagesQueue = ref(pagesQueueValue);

pagesNum = parseInt(pagesNum.toString());

//初始化pageQueue
if (pagesNum > 5) {
  for (let i = 0; i < 5; i++) {
    pagesQueue.value.push(i + 1);
  }
} else {
  for (let i = 0; i < pagesNum; i++) {
    pagesQueue.value.push(i + 1);
  }
}
/***需求 页面导航每次显示五个页面 ***/
/***数据结构 队列 ***/
//获取前面的页数
const getPrePages = function () {
  //页面队列的第一个值减去五小于1就返回
  if (pagesQueue.value[0] - 5 < 1) {
    return;
  } else {
    //获取页面队列的第一个值
    const startPageValue = pagesQueue.value[0];
    //清空队列
    pagesQueue.value.splice(0);
    //填充较小的五个值
    for (let k = startPageValue - 1; k >= startPageValue - 5; k--) {
      pagesQueue.value.unshift(k);
    }
  }
};
//获取后面的页数
const getAfterPages = function () {
  //最后一页的页码与总共的页数相等就返回

  if (pagesNum - 1 === pagesQueue.value[pagesQueue.value.length - 1]) {
    return;
  }
  //下一个队列的开始值
  const startPageValue = pagesQueue.value[pagesQueue.value.length - 1] + 1;
  //清空队列
  pagesQueue.value.splice(0);
  //下下个个队列的开始值是否小于等于pagesNum 符合就加五个 不符合就剩下的全部加入
  if (startPageValue + 5 <= pagesNum) {
    for (let k = startPageValue; k < startPageValue + 5; k++) {
      pagesQueue.value.push(k);
    }
  } else {
    for (let k = startPageValue; k < pagesNum; k++) {
      pagesQueue.value.push(k);
    }
  }
};
//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item) => {
  return item.regularPath.indexOf("index") < 0;
});
//按时间排序
postsAll.sort((a, b) => {
  return (
    Number(b.frontMatter.date.split("-").join("")) -
    Number(a.frontMatter.date.split("-").join(""))
  );
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
const monthDic = {
  1: `Jan`,
  "01": `Jan`,
  2: `Feb`,
  "02": `Feb`,
  3: `Mar`,
  "03": `Mar`,
  4: `Apr`,
  "04": `Apr`,
  5: `May`,
  "05": `May`,
  6: `Jun`,
  "06": `Jun`,
  7: `Jul`,
  "07": `Jul`,
  8: `Aug`,
  "08": `Aug`,
  9: `Sep`,
  "09": `Sep`,
  10: `Oct`,
  11: `Nov`,
  12: `Dec`,
};
const transDate = (date) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  if (Object.keys(monthDic).includes(dateArray[1])) {
    month = monthDic[dateArray[1]];
  } else {
    month = "";
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped lang='scss'>
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
.recommend {
  width: 55%;
  margin: 0 1rem;
}
@media (max-width: 1000px) {
  .recommend {
    width: 95%;
  }
}
.blog-list {
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .blog-bg {
    display: flex;
    width: 55%;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog-item {
      width: 32%;
      margin: 1rem 0;
      display: block;
      cursor: pointer;
    }
    @media (max-width: 1000px) {
      .blog-item {
        width: 100%;
      }
    }
    .blog-item:hover {
      text-decoration: none;
    }
  }
  @media (max-width: 1000px) {
    .blog-bg {
      width: 95%;
      justify-content: center;
    }
  }
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 100px;
  width: 60%;
  left: 50%;
  transform: translateX(-50%);
  //   .page-btn {
  //     height: 2rem;
  //     width: 2rem;
  //     border-radius: 1rem;
  //   }
  .pages {
    display: flex;
  }
}
@media (max-width: 1000px) {
  .pagination {
    width: 95%;
  }
}
.link {
  border-radius: 0.5rem;
  margin-right: 5px;
  width: 2.5rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
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
