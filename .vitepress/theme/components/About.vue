<template>
  <div class="aboutPage">
    <div class="about">
      <h2><p class="about-header">欢迎来到 ooo 的个人小站</p></h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.aboutPage {
  display: flex;
  justify-content: center;
}
p {
  line-height: 1.6;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: var(--c-color);
}
</style>