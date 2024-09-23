<script setup lang="ts">
import PaginatedDisplay from '../components/PaginatedDisplay.vue'
import EpisodeDisplay from '../components/EpisodeDisplay.vue'
</script>

<template>
  <PaginatedDisplay endpoint="episode">
    <template v-slot:item="{ item }">
      <EpisodeDisplay :data="item" />
    </template>
  </PaginatedDisplay>
</template>
