<template>
  <div class="rec-content" style="padding-top: 2rem">
    <div class="rec-path1">
      <div class="rec-title1">
        <img src="/light.svg" class="title1-img" alt="" />
        <span><h1 class="title1-content">宁静致远</h1></span>
      </div>
    </div>
    <div class="rec-path2">
      <div class="rec-intro1">
        <p class="intro1-para">
          __画船听雨：你看得到我打在屏幕上的字，看不到我落在键盘上的泪。 Kali
          Linux：The quieter you become, the more you are able to hear.
          冰心：成功的花，人们只惊羡她现时的明艳！然而当初她的芽儿，浸透了奋斗的泪泉，洒遍了牺牲的血雨。
        </p>
      </div>
    </div>
    <div class="rec-path3">
      <div class="rec-title2">
        <img src="/recommend.svg" class="title2-img" alt="" />
        <span><h1 class="title2-content">推荐文章</h1></span>
      </div>
    </div>
    <div class="rec-path4">
      <div class="path4-content">
        <div class="rec-others"><span @click="getOthers">others</span></div>
        <div class="rec-title3">
          <span><h1 class="title3-content">推荐文章</h1></span>
        </div>
        <div class="rec-intro2">
          <p class="intro2-para">
            __画船听雨：你看得到我打在屏幕上的字，看不到我落在键盘上的泪。 Kali
            Linux：The quieter you become, the more you are able to hear.
            冰心：成功的花，人们只惊羡她现时的明艳！然而当初她的芽儿，浸透了奋斗的泪泉，洒遍了牺牲的血雨。
          </p>
        </div>
        <div class="rec-readmore">
          <button class="readmore-btn">阅读更多</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const getOthers = () => { }
</script>
<style lang='scss' scoped>
.rec-content {
  background-color: #fff;
  height: 40rem;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  .rec-title1,
  .rec-title2 {
    width: 100%;
    display: flex;
    justify-content: center;
    .title1-img,
    .title2-img {
      height: 40px;
      width: 40px;
    }
    .title1-content,
    .title2-content {
      margin-top: unset;
    }
  }
  .rec-path2 {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    .rec-intro1 {
      width: 60%;
      .intro1-para {
        color: grey;
      }
    }
  }
  .rec-path4 {
    width: 100%;
    display: flex;
    justify-content: center;
    .path4-content {
      margin-top: 2rem;
      padding-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      border-radius: 15px;
      height: 20rem;
      width: 80%;
      background-image: url(https://image.3001.net/images/20190330/15539151205245.jpg);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      rec-others: {
      }
      .rec-title3 {
        .title3-content {
          margin-top: 0;
        }
      }
    }
    .rec-intro2 {
      .intro2-para {
        height: 8rem;
        overflow: hidden;
        color: rgba($color: #fff, $alpha: 0.3);
      }
    }
    .rec-readmore {
      .readmore-btn {
        height: 2rem;
        border-radius: 10px;
        color: #fff;
        background-color: rgba(255, 60, 89, 1);
        border: 0;
      }
    }
  }
}
</style>

