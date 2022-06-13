<template>
  <div class="my-nav-dialog">
    <div class="my-sub-nav flexXY p-10" v-for="subNav in children">
      <div class="my-sub-nav-item flexX">
        <img :src="subNav.icon" alt="">
        <a :href="subNav.link" class=" color-black">{{subNav.text}}</a>
      </div>
    </div>
    
  </div>
</template>

<script setup>
//  { id: "21", text: "标签x", link: "/archives" },
const props = defineProps({
  children: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
<style lang='scss' scoped>
.my-nav-dialog {
  height: 130px;
  width: 180px;
  border-radius: 10px;
  background-color: rgba($color: #fff, $alpha: 0.3);
  .my-sub-nav-item{
  }
}
</style>
