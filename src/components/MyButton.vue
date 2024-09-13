<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ColorKind, TextAlign } from '../models'
const { icon, color, align, ...props } = withDefaults(
  defineProps<{
    icon?: string
    color?: ColorKind
    align?: TextAlign
    mdAlign?: TextAlign
    disabled?: boolean
  }>(),
  { color: 'primary', align: 'left', disabled: false }
)

const emit = defineSlots<{ click: [MouseEvent] }>()
</script>
<template>
  <button
    :class="`bg-${color} border-${color}-border text-${color}-text ${disabled && 'pointer-events-none opacity-50'}`"
    :aria-disabled="disabled"
    class="flex flex-row items-center gap-2 rounded border-[0.3em] px-3 py-2 transition hover:border-4"
    v-bind="props"
  >
    <Icon v-if="icon" :icon />
    <div
      class="flex-1 uppercase first-letter:text-xl"
      :class="`text-${align} md:text-${props.mdAlign}`"
    >
      <slot />
    </div>
  </button>
</template>
