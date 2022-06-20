<template>
  <div class="my-right-buttons">
    <div class="dark-or-light" @chick="changeBgColor">
      <img src="/lightMoon.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
</script>
<style lang='scss' scoped>
.dark-or-light {
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  // background-color: #000;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>