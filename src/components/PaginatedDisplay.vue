<script setup lang="ts" generic="T">
import { computedAsync } from '@vueuse/core'
import { PaginatedResults } from '../models'
import { useRouteQuery } from '@vueuse/router'
import MyButton from './MyButton.vue'
import { computed } from 'vue'
const { endpoint } = defineProps<{ endpoint: string }>()
const currPage = useRouteQuery('page', '1', { transform: Number })
const url = computed(
  () => `https://rickandmortyapi.com/api/${endpoint}?page=${currPage.value}`
)

const data = computedAsync<PaginatedResults<T>>(
  async () => {
    const res = await fetch(url.value)
    return await res.json()
  },
  {
    info: { count: 0, pages: 0 },
    results: [],
  }
)
</script>
<template>
  <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
    <MyButton
      icon="mdi:arrow-left"
      class="md:text-l text-center"
      align="center"
      md-align="left"
      :disabled="currPage === 1"
      @click="currPage--"
      >Prev</MyButton
    >
    <MyButton
      icon="mdi:arrow-right"
      align="center"
      md-align="right"
      class="flex-1"
      :disabled="currPage === data.info.pages"
      @click="currPage++"
      >Next</MyButton
    >
  </div>
  <div
    class="grid grid-cols-1 gap-3 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="item in data.results" class="rounded rounded-sm border p-4">
      <slot name="item" :item="item" />
    </div>
  </div>
</template>
