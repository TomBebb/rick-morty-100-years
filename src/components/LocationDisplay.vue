<script setup lang="ts">
import { Location, ColorKind } from '../models'

defineProps<{ data: Location }>()
</script>
<template>
  <div class="flex flex-col items-center gap-2">
    <div class="font-bold">
      {{ data.name }}
    </div>
    <div>{{ data.dimension }}</div>
    <div>{{ data.type }}</div>
  </div>
</template>
