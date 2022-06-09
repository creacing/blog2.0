<template>
  <div>
    <div class="bg-cover">
      <Motto />
    </div>
    <div class="archives">
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
  </div>
</template>

<script  setup>
import Motto from './Motto.vue'
import { useData, withBase } from "vitepress";
import { computed, onMounted, ref } from "vue";
import { useYearSort } from "../utils";
const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
const year_archives = ref([]);
onMounted(() => {
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

.years {
  display: flex;
  .year {
    margin: 0.2rem;
    padding: 0 0.2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    .year-name {
      padding: 0.2rem 0;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--c-color);
      width: 5rem;
    }
    .year-nameActive {
      padding: 0.2rem 0;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--c-brand);
      width: 5rem;
    }
    .year-num {
      color: var(--c-brand);
      font-size: 12px !important;
      position: relative;
      top: -8px;
    }
  }
  .year :hover {
    color: var(--c-brand);
  }
}

//yj
.archives {
  margin-top: 25vh;
  .archives-years {
    display: flex;
    justify-content: center;
    background-color: rgba($color: #fff, $alpha: 0.3);
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  .archives-content {
    background-color: rgba($color: #fff, $alpha: 1);
    width: 100%;
    border-radius: 1rem;
    padding: 5px 10px;
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
        color: #000;
        font-weight: 600;
        transition: border 0.3s ease, color 0.3s ease;
        .date {
          font-family: Georgia, sans-serif;
        }
      }
      .article:hover {
        text-decoration: none;
        color: var(--c-brand);
      }
    }
  }
}
</style>
