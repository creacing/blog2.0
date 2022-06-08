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
        <div class="card-timezone">{{ demoArticle.time }}</div>
        <div class="card-types">
          <div class="card-type" v-for="type in demoArticle.type" :key="type">
            <a>{{ type }}</a>
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
import { ref } from 'vue'
const demoArticle = {
  title: '手把手带你用 SSRF 打穿内网',
  bg: '',
  intro: 'SSRF 以前没有单独总结过相关的姿势点，去年的时候国光就已经写了一大半了，但是后面由于经常赶项目的原因，所以这篇文章就拖延到今天',
  type: ['web', 'vue', 'js'], //类型 大概类
  tag: ['http', 'xss'], // 细分
  time: '2021-1-1'
}
</script>
<style lang='scss' scoped>
.card-body {
  animation: smallToLarge 2s;
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
        padding: 2px 0;
        background-color: rgb(221, 217, 217);
        width: 3rem;
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
    width: 22rem;
  }
}
.card-body:hover {
  padding: 5px;
}
@keyframes smallToLarge {
  /*这个就是要执行的动画*/
  from {
    transform: scale(0);
  }

  /*从它到它，scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数，这个是css3中2D的转换方法。*/
  to {
    transform: scale(1);
  }
}
</style>

