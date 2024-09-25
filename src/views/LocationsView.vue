<script setup lang="ts">
import PaginatedDisplay from '../components/PaginatedDisplay.vue'
import LocationDisplay from '../components/LocationDisplay.vue'
</script>

<template>
  <PaginatedDisplay endpoint="location">
    <template v-slot:item="{ item }">
      <LocationDisplay :data="item" />
    </template>
  </PaginatedDisplay>
</template>
