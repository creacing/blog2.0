<template>
  <div class="search">
    <div class="search-btn" @click="isShowSearchDiolag">
      <img src="/search.svg" alt="" />
    </div>

    <div
      class="search-dialog"
      v-show="showSearchDiolag"
      :class="
        searchRes.length > 8 ? 'higher-search-dialog' : 'lower-search-dialog'
      "
    >
      <div style="display: flex">
        <img src="/search.svg" alt="" style="width: 2rem; width: 2rem" />
        <div @click="searchForValue" class="search-input-btn">搜索</div>
      </div>
      <input v-model="inputValue" class="search-input-text" type="text" />
      <ul class="search-list">
        <li v-for="item in searchRes" :key="item" class="search-list-item">
          <div class="search-content">
            <a
              :href="withBase(item.regularPath)"
              @click="goToArticle"
              style="
                color: rgb(65, 185, 131);
                height: 3rem;
                display: block;
                display: flex;
                align-items: center;
              "
              >{{ item.frontMatter.title }}</a
            >
          </div>
          <div class="row-space-line"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();

let inputValue = ref("");

let postsAll = theme.value.posts || [];
const searchRes = ref([]);

const searchForValue = () => {
  if (inputValue.value === "") {
    return;
  }
  searchRes.value = [];
  for (const e of postsAll) {
    if (e.frontMatter.title.includes(inputValue.value)) {
      searchRes.value.push(e);
    }
  }
};

const goToArticle = () => {
  showSearchDiolag.value = false;
};

let showSearchDiolag = ref(false);
const isShowSearchDiolag = () => {
  console.log("isShowSearchDiolag");
  showSearchDiolag.value = !showSearchDiolag.value;
};

onBeforeMount(() => {
  (function () {
    document.addEventListener("click", (e) => {
      showSearchDiolag.value = false;
    });
    setTimeout(() => {
      const dialog = document.getElementsByClassName("search-dialog")[0];
      dialog.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      const searchBtn = document.getElementsByClassName("search-btn")[0];
      searchBtn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  })();
});
</script>
<style lang='scss' scoped>
//隐藏滚动条
::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}

.row-space-line {
  border-bottom: 1px solid rgb(229, 229, 229, 1);
}
/* 搜索图标 */
.search-btn {
  width: 1.5rem;
  z-index: 1000;
  /* 搜索图标与左侧距离 */
  margin-left: 4rem;
  cursor: pointer;
  margin-top: 2px;
}
.search-dialog {
  width: 90vw;
  position: fixed;
  top: 15vh;
  left: 50%;
  z-index: 1000;
  background-color: #fff;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  background-color: #12121c;
}
.higher-search-dialog {
  height: 800px;
}
.lower-search-dialog {
  height: 500px;
}

.search-input-text {
  width: 100%;
  min-height: 3rem;
  padding: 0;
  border: none;
  background-color: rgba(18, 18, 28, 0);
  border-bottom: 1px solid rgb(158, 158, 158);
  font-size: 1rem;
  color: #43b672;
}
.search-input-btn {
  margin-left: 10px;
  color: rgb(255, 255, 255);
  font-size: 20px;
}
.search-input-text:focus {
  outline: none;
}
.search-list {
  list-style: none;
  padding: 0;
  overflow: auto;
}
.search-content > a {
  text-decoration: none;
  color: black;
}
.search-content > a:hover {
  color: mediumslateblue;
}
/* 搜索弹框滚动条样式 */
/* 滚动条的宽度 */
::-webkit-scrollbar {
  width: 5px;
}
/* 滚动条的按钮 */
::-webkit-scrollbar-button {
  display: none;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 5px;
}
</style>