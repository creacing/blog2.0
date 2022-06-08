<template>
  <div class="my-card">
    <div class="my-info">
      <span class="my-title"
        ><h1 style="font-size: 4rem; color: #fff">分享与收获</h1></span
      >
      <div style="display: flex">
        <p class="my-motto">{{ myMotto }}</p>
        <p class="my-input-symbol" style="color: #fff">|</p>
      </div>
      <img class="go-down" src="/down.svg" @click="goDown" />

      <div class="my-platforms">
        <div
          class="my-platform"
          v-for="platform in platforms"
          @click="go(platform)"
          :key="platform"
        >
          <img :src="platform.icon" width="30" height="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const myMotto = ref("");

const showMotto = () => {
  const mottoList = [
    "The quieter you become, the more you are able to hear.",
    "宁静致远",
  ];
  let timer = null,
    count = 1,
    reverseFlag = false,
    currentMotto = 0;
  const mottoListLen = mottoList.length;

  timer = setInterval(() => {
    const motto = mottoList[currentMotto];
    const mottoLen = motto.length;
    myMotto.value = motto.slice(0, count);

    count === mottoLen ? (reverseFlag = true) : null;

    if (count === 0) {
      reverseFlag = false;
      currentMotto++;

      if (currentMotto === mottoListLen) {
        currentMotto = 0;
      }
    }

    !reverseFlag ? count++ : count--;
  }, 200);
};
showMotto();

const goDown = () => {
  document.documentElement.scrollTop = window.innerHeight;
};

const platforms = [
  {
    text: "Github",
    icon: `/github.svg`,
    url: "https://github.com/",
  },
  {
    text: "BiliBili",
    icon: `/bilibili.svg`,
    url: "https://bilibili.com/",
  },
  {
    text: "Email",
    icon: `/mail.svg`,
    url: "mailto:yj@gmail.com",
  },
];
const go = (platform) => {
  window.location.href = platform.url;
};
</script>
<style lang='scss' scoped>
.my-card {
  min-height: 100vh;
  //   height: 58rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .my-info {
    height: 100vh;
    min-width: 60%;
    .my-motto {
      color: #fff;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30vh;
    .go-down {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      position: relative;
      animation: moveDown 2s infinite;
      animation-direction: alternate;
      margin-top: 10vh;
    }
    @keyframes moveDown {
      from {
        opacity: 1;
        top: 0px;
      }
      to {
        opacity: 0.5;
        top: 30px;
      }
    }
    .my-platforms {
      display: flex;
      margin-top: 15vh;
      width: 30%;
      justify-content: space-around;
      .my-platform {
        cursor: pointer;
      }
      .my-platform:hover {
        transform: translate(-2px, -2px);
      }
    }
  }
}
</style>

