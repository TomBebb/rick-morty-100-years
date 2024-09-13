<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
    :class="`bg-${color} border-${color}-border text-${color}-text`"
    class="flex flex-row gap-2 items-center px-3 py-2 rounded border-[0.3em] hover:border-4 transition"
    v-bind="props"
  >
    <Icon v-if="icon" :icon />
    <div
      class="flex-1 uppercase first-letter:text-xl"
      :class="`text-${align ?? 'left'}`"
    >
      <slot />
    </div>
  </button>
</template>
