<script setup lang="ts">
import type { ColorKind, TextAlign } from '../models'
import { Icon } from '@iconify/vue'
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
    :class="`bg-${color} border-${color}-border`"
    class="flex flex-row gap-2 items-center px-3 py-2 rounded text-white border-[0.3em] hover:border-4 transition"
    v-bind="props"
  >
    <Icon v-if="icon" icon="mdi:home" />
    <div class="flex-1" :class="`text-${align ?? 'left'}`">
      <slot />
    </div>
  </button>
</template>
