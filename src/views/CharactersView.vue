<script setup lang="ts">
import PaginatedDisplay from '../components/PaginatedDisplay.vue'
import CharacterDisplay from '../components/CharacterDisplay.vue'
import { Character } from '../models'
</script>

<template>
  <PaginatedDisplay endpoint="character">
    <template v-slot:item="{ item }">
      <CharacterDisplay :data="item as Character" />
    </template>
  </PaginatedDisplay>
</template>
