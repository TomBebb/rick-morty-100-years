<script setup lang="ts">
import { routes } from '../routes'

const items = routes.filter((r) => r.path !== '/')
</script>
<template>
  <div class="grid grid-cols-1 gap-3 px-3 md:grid-cols-2">
    <RouterLink
      v-for="item in items"
      :to="item.path"
      class="center flex w-full flex-col rounded border-2 p-8 text-center"
    >
      <div class="font-semibold underline">
        {{ item.name }}
      </div>
      <div>
        {{ item.props.desc }}
      </div>
    </RouterLink>
  </div>
</template>
