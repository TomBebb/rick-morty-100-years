<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { routes } from '../routes'
import { useRoute } from 'vue-router'
const curr = useRoute()
</script>
<template>
  <nav
    class="bg-primary text-primary-text h-10 top-0 sticky flex flex-row gap-2 items-center px-3"
  >
    <RouterLink
      v-for="item in routes"
      :to="item.path"
      class="border px-3 flex flex-row gap-1 items-center"
      :class="{ 'opacity-50': item.path === curr.path }"
    >
      <Icon v-if="item.props.icon" :icon="item.props.icon!" />
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
