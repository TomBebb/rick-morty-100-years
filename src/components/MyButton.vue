<script setup lang="ts">
import type { ColorKind } from '../models';

const {icon, color = "primary", ...props} = defineProps<{ icon?: string, color?: ColorKind }>()

const emit = defineSlots<{ click: [MouseEvent] }>()
console.info({color})
</script>
<template>
  <button v-bind="props" :class="`bg-${color} border-${color}-border`" class=" px-3 py-2 rounded text-white border-[0.3em] hover:border-4 transition">
    <slot/>
  </button>
</template>
