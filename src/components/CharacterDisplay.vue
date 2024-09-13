<script setup lang="ts">
import { Character } from '../models'

defineProps<{ data: Character }>()
</script>
<template>
  <div class="flex flex-col items-center gap-2">
    <div class="font-bold">{{ data.name }}</div>
    <div>{{ data.species }}</div>
    <div>{{ data.gender }}</div>
  </div>
</template>
