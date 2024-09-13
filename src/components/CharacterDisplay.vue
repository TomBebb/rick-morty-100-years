<script setup lang="ts">
import { Character, CharacterGender } from '../models'
import { Icon } from '@iconify/vue'
const iconByGender: Record<CharacterGender, string> = {
  Female: 'mdi:gender-female',
  Male: 'mdi:gender-male',
  Genderless: 'mdi:human-genderless',
  unknown: '',
}
defineProps<{ data: Character }>()
</script>
<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex flex-row items-center gap-2 font-bold">
      <Icon
        v-if="data.gender !== 'unknown'"
        :icon="iconByGender[data.gender]"
      />

      {{ data.name }}
    </div>
    <div>{{ data.species }}</div>
    <div>{{ data.location.name }}</div>
    <div>{{ data.origin.name }}</div>
  </div>
</template>
