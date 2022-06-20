<template>
  <div class="my-left-buttons">
    <div class="dark-or-light" @chick="changeBgColor">
      <img src="/lightMoon.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
</script>
<style lang='scss' scoped>
.dark-or-light {
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>