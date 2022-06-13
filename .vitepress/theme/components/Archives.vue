<template>
  <div class="bg-cover flexXY flexCol absolute">
    <Motto />
  </div>
  <div class="archives">
    <div class="calender bg-white-shadow p-5">
      <Calender style="height: 200px; width: 100%" />
    </div>
    <div class="archives-years">
      <div class="years">
        <div
          v-for="(yearList, index) in data"
          :key="yearList"
          class="year"
          @click="yearClick(index)"
        >
          <div
            :class="yearColorFlag === index ? 'year-nameActive' : 'year-name'"
            @click="showArchivesByYear(index)"
          >
            {{ yearList[0].frontMatter.date.split("-")[0] }}
            <span class="year-num">{{ yearList.length }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="archives-content">
      <div
        class="archives-article"
        v-for="(article, index) in year_archives"
        :key="index"
      >
        <a :href="withBase(article.regularPath)" class="article">
          <div class="title">
            <div class="title-o"></div>
            {{ article.frontMatter.title }}
          </div>
          <div class="date">
            {{ article.frontMatter.date.slice(5) }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script  setup>
import Motto from "./Motto.vue";
import Calender from './Calender.vue'
import { useData, withBase } from "vitepress";
import { computed, onMounted, ref } from "vue";
import { useYearSort } from "../utils";
const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
const year_archives = ref([]);
onMounted(() => {
  const content = document.getElementsByClassName('content')[0]
  content.style.position = 'unset'

  year_archives.value = data.value[0];
});
const showArchivesByYear = (index) => {
  year_archives.value = data.value[index];
};
const yearColorFlag = ref("0");
const yearClick = (index) => {
  yearColorFlag.value = index;
};
</script>

<style lang='scss' scoped>
.bg-cover {
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 45vh;
  background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  background-clip: text;
}

.years {
  display: flex;
  .year {
    margin: 0.2rem;
    padding: 0 0.2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    .year-name {
      font-size: 1.3rem;
      font-weight: 600;
      color: rgb(176, 166, 165);
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(249, 235, 234);
    }
    .year-nameActive {
      padding: 0.2rem 0;
      font-size: 1.3rem;
      font-weight: 600;
      color: rbaa(255, 255, 255, 1);
      background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .year-num {
      color: var(--c-blue);
      font-size: 12px !important;
      position: relative;
      top: -8px;
    }
  }
  .year :hover {
    color: var(--c-blue);
  }
}

//yj
.archives {
  margin-top: 25vh;
  .calender {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
  }
  .archives-years {
    display: flex;
    justify-content: flex-start;
    // background-color: rgba($color: #fff, $alpha: 0.3);
    width: 100%;
    // border-radius: 1rem;
    margin-bottom: 1rem;

    // box-shadow: 2px 2px 10px 2px rgba($color: #000, $alpha: 0.1);
  }
  .archives-content {
    box-shadow: 2px 2px 10px 2px rgba($color: #000, $alpha: 0.1);
    background-color: rgba($color: #fff, $alpha: 1);
    width: 100%;
    border-radius: 1rem;
    padding: 5px 10px;
    padding-top: 15px;
    .archives-article {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0.3rem;
      border-radius: 1rem;
      margin: 0.1rem 0;
      .article {
        width: 100%;
        margin: 0.2rem;
        color: #000;
        padding: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 10px;
        color: rgba(89, 189, 238, 1);
        font-weight: 600;
        transition: border 0.3s ease, color 0.3s ease;
        .date {
          color: rgba(18, 161, 231, 1);
          font-family: Georgia, sans-serif;
        }
      }
      .article:hover {
        text-decoration: none;
        color: var(--c-blue);
      }
    }
  }
}
</style>
