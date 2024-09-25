<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
const curr = useRoute()
</script>

<template>
  <NavBar />

  <RouterView />
</template>
