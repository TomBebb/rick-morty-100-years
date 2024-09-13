<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { routes } from '../routes'
import { useRoute } from 'vue-router'
const curr = useRoute()
</script>
<template>
  <nav
    class="sticky top-0 flex h-10 flex-row items-center gap-2 bg-primary px-3 text-primary-text"
  >
    <RouterLink
      v-for="item in routes"
      :to="item.path"
      class="flex flex-row items-center gap-1 border px-3"
      :class="{ 'opacity-50': item.path === curr.path }"
    >
      <Icon v-if="item.props.icon" :icon="item.props.icon!" />
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
