<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { routes } from '../routes'
</script>
<template>
  <nav
    class="bg-primary text-primary-text h-10 top-0 sticky flex flex-row gap-2 items-center px-3"
  >
    <RouterLink
      v-for="item in routes"
      :to="item.path"
      class="border px-3 flex flex-row gap-1 items-center"
    >
      <Icon v-if="item.props.icon" :icon="item.props.icon!" />
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
