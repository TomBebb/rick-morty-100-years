<script setup lang="ts" generic="T">
import { useFetch } from '@vueuse/core'
import { PaginatedResults } from '../models'
import { useRouteQuery } from '@vueuse/router'
import MyButton from './MyButton.vue'
import { computed } from 'vue'
const { endpoint } = defineProps<{ endpoint: string }>()
const currPage = useRouteQuery('page', '1', { transform: Number })
const url = computed(
  () => `https://rickandmortyapi.com/api/${endpoint}?page=${currPage.value}`
)
const { isFetching, error, data } = useFetch<PaginatedResults<T>>(url, {
  refetch: true,
})
</script>
<template>
  <div class="flex flex-row gap-2">
    <MyButton
      align="left"
      class="flex-1"
      :disabled="currPage === 1"
      @click="currPage--"
      >Prev</MyButton
    >
    <MyButton align="right" class="flex-1" @click="currPage++">Next</MyButton>
  </div>
  <template v-if="data">
    {{ data }}
  </template>
</template>
