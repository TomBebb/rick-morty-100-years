<script setup lang="ts" generic="T extends BasePaginatedItem">
import { computedAsync } from '@vueuse/core'
import { BasePaginatedItem, PaginatedResults } from '../models'
import { useRouteQuery } from '@vueuse/router'
import MyButton from './MyButton.vue'
import { computed, ref } from 'vue'
const { endpoint } = defineProps<{ endpoint: string }>()
const currPage = useRouteQuery('page', '1', { transform: Number })
const search = useRouteQuery<string>('search')
const searchInput = ref<string>(String(search.value))
const urlParams = computed<URLSearchParams>(() => {
  const ps = new URLSearchParams()
  ps.set('page', currPage.value.toString())

  if (search.value) ps.set('name', search.value)
  return ps
})
const url = computed(
  () => `https://rickandmortyapi.com/api/${endpoint}?${urlParams.value}`
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
  <div class="flex flex-row gap-2 p-3">
    <input
      class="flex-1 border-2 border-gray-600"
      v-model="searchInput"
      placeholder="Enter search query"
    />
    <MyButton
      icon="mdi:search"
      @click="search = searchInput"
      aria-label="Search"
    />
  </div>
  <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
    <MyButton
      icon="mdi:arrow-left"
      class="md:text-l text-center"
      align="center"
      md-align="left"
      :disabled="currPage === 1"
      @click="currPage--"
      label="Prev"
    />
    <MyButton
      icon="mdi:arrow-right"
      align="center"
      md-align="right"
      class="flex-1"
      :disabled="currPage === data.info.pages"
      @click="currPage++"
      label="Next"
    />
  </div>
  <div
    class="grid grid-cols-1 gap-3 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="item in data.results" class="rounded rounded-sm border p-4">
      <slot name="item" :item="item" />
    </div>
  </div>
</template>
