<template>
  <footer>
    Powered by
    <a href="" target="_blank" title="作者">ooo</a>
    | Copyright © 2022-{{ date }} | MIT License
  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear();
</script>
<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 20px;
  /* background: var(--c-bg); */
  background-color: rgba(62, 69, 80, 1);
  /* color: var(--c-text); */
  color: #fff;
}
a {
  color: var(--c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--c-hover);
}
</style>

