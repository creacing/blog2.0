<template>
  <div class="my-bg-cover flexXY flexCol absolute">
    <h1 class="my-about-header">欢迎来到 {{ author }} 的个人小站</h1>
    <Motto />
  </div>
  <div class="about-card-content"></div>
</template>
<script setup>
import siteConfig from "./../siteConfig";
import Motto from "./Motto.vue";
import { onMounted } from "vue";
//作者名字
let author = siteConfig.author;

</script>
<style lang='scss' scoped>
.my-bg-cover {
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 45vh;
  background-image: linear-gradient(to top, #65d979 0%, #5ecdb7 100%);
  background-clip: text;
  .my-about-header {
    width: 90%;
    font-weight: bold;
    padding-bottom: 14px;
    text-align: center;
  }
}
.about-card-content {
  position: relative;
  width: 100%;
  min-height: 60vh;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  margin-top: 30vh;
  border-radius: 1rem;
}
.about-card-content::before {
  content: "";
  background-size: 4rem 4rem;
  background-image: url("/avator.jpg");
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  height: 4rem;
  width: 4rem;
  border-radius: 4rem;
}
</style>