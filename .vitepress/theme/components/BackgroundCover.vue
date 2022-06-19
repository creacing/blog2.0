<template>
  <div class="bg-cover">
    <slot name="bg-cover-title" />
    <Motto />
  </div>
</template>
<script setup>
import Motto from "./Motto.vue";
</script>