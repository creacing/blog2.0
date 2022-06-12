<template>
  <div class="card">
    <div class="card-body">
      <div class="card-part1">
        <div class="card-bg">
          <img
            src="https://image.3001.net/images/20220123/16429456471702.png"
            alt=""
            style="height: 100%; width: 100%"
          />
        </div>
        <div class="card-title">{{ demoArticle.title }}</div>
      </div>
      <div class="card-part2">
        <div class="card-intro">{{ demoArticle.intro }}</div>
      </div>
      <div class="card-part3">
        <div class="card-timezone">⏳ {{ demoArticle.time }}</div>
        <div class="card-types">
          <div class="card-type" v-for="type in demoArticle.type" :key="type">
            <a>🏷️ {{ type }}</a>
          </div>
        </div>
      </div>
      <div class="card-part4">
        <div class="card-tags">
          <div class="card-tag" v-for="tag in demoArticle.tag" :key="tag">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs, onMounted, onUnmounted, watch } from "vue";

const checkScrollHeightAndLoadAnimation = () => {
  const windowHeight = window.innerHeight;
  const cardBodys = document.getElementsByClassName("card-body");
  //窗口的高度加上滚动条的高度与 cardBody 到页面顶部的距离
  for (const cardBody of cardBodys) {
    if (window.pageYOffset + windowHeight > cardBody.offsetTop) {
      cardBody.style.animation = "smallToLarge 2s forwards"; //添加动画
    } else {
      cardBody.style.animation = "";
    }
  }
};
const bindHandleScroll = () => {
  checkScrollHeightAndLoadAnimation();
};
onMounted(() => {
  checkScrollHeightAndLoadAnimation();
  window.addEventListener("scroll", bindHandleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", bindHandleScroll);
});
const props = defineProps({
  cardValue: {
    type: Object,
    default() {
      return {
        title: "",
        items: [],
      };
    },
  },
});
const { cardValue } = props;
// console.log("cardValue.value", cardValue.frontMatter);
const values = cardValue.frontMatter;
const demoArticle = {
  title: values.title,
  bg: "",
  intro: values.description,
  type: values.tags, //类型 大概类
  tag: values.tags, // 细分
  time: values.date,
};
</script>
<style lang='scss' scope>
.card {
  width: 100%;
}
.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .card-part1 {
    height: 12rem;
    background: rgba(236, 231, 231, 0.2);
    position: relative;
    .card-bg {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      background-color: blue;
    }
    .card-title {
      min-height: 30%;
      width: 80%;
      position: absolute;
      z-index: 1;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      padding-left: 5px;
      padding-right: 5px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .card-part2 {
    height: 7rem;
    padding: 5px 10px;
  }
  .card-part3 {
    padding: 5px;
    display: flex;
    height: 3rem;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    .card-types {
      display: flex;
      .card-type {
        padding: 2px;
      }
    }
  }
  .card-part4 {
    height: 3rem;
    padding-left: 10px;
    display: flex;
    align-items: center;
    .card-tags {
      display: flex;
      .card-tag {
        border-radius: 10px;
        padding: 4px 6px;
        background-color: rgb(127, 189, 255);
        text-align: center;
        line-height: 1rem;
        margin: 0 1px;
      }
    }
  }
}
@media (min-width: 1000px) {
  .card-body {
    height: 25rem;
  }
}
.card:hover {
  border-radius: 5px;
  animation: smallToLargeHover 0.5s;
  //   animation-direction: alternate;
}
</style>

<style lang='scss'>
@keyframes smallToLargeHover {
  /*这个就是要执行的动画*/
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes smallToLarge {
  /*这个就是要执行的动画*/
  from {
    transform: scale(0.5);
  }

  /*从它到它，scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数，这个是css3中2D的转换方法。*/
  to {
    transform: scale(1);
  }
}
</style>

