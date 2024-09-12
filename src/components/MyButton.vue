<script setup lang="ts">
import type { ColorKind, TextAlign } from '../models'

const {
  icon,
  color = 'primary',
  align = 'left',
  ...props
} = defineProps<{ icon?: string; color?: ColorKind; align?: TextAlign }>()

const emit = defineSlots<{ click: [MouseEvent] }>()
</script>
<template>
  <button
    :class="`bg-${color} border-${color}-border text-${align ?? 'left'}`"
    class="px-3 py-2 rounded text-white border-[0.3em] hover:border-4 transition"
    v-bind="props"
  >
    <slot />
  </button>
</template>
