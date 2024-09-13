<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { routes } from '../routes'
import { useRoute } from 'vue-router'
import MyButton from './MyButton.vue'
import { ref } from 'vue'
const curr = useRoute()
const showMenu = ref<boolean>(false)
</script>
<template>
  <header
    class="sticky top-0 flex h-10 flex-row items-center gap-2 bg-primary px-3 text-primary-text"
  >
    <MyButton class="md:hidden" icon="mdi:menu" @click="showMenu = !showMenu" />
    <div class="flex flex-1 flex-row gap-10 text-lg">
      <RouterLink to="/" class="font-bold"> Rick and Morty DB </RouterLink>
      <div class="font-semibold">{{ curr.name }}</div>
    </div>

    <nav
      :class="{ 'hidden md:flex': !showMenu }"
      class="fixed top-10 z-20 flex-col items-center gap-2 bg-primary text-primary-text md:relative md:top-0 md:flex-row"
    >
      <RouterLink
        v-for="item in routes"
        :to="item.path"
        class="box-content flex flex-row items-center gap-1 border px-5 py-1 md:px-3 md:py-0"
        :class="{ 'opacity-50': item.path === curr.path }"
      >
        <Icon v-if="item.props.icon" :icon="item.props.icon!" />
        {{ item.name }}
      </RouterLink>
    </nav>
  </header>
</template>
