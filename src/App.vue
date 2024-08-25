<script setup lang="ts">
import MyButton from './components/MyButton.vue'
import type { ColorKind } from './models';
</script>

<template>
  <div class="p-2 flex flex-col h-screen w-full b ">
    <div>Hellop!</div>
    <MyButton color="primary">Demo</MyButton>
  </div>
</template>
