<script setup lang="ts">
import { Episode } from '../models.ts'
import { computed } from 'vue'

const props = defineProps<{ data: Episode }>()
const episodeParts = computed<string[]>(() =>
  /^S([0-9]{2})E([0-9]{2})$/.exec(props.data.episode)
)
const releaseSeason = computed<number>(() => parseInt(episodeParts.value[1]))
const releaseEpisode = computed<number>(() => parseInt(episodeParts.value[2]))
</script>

<template>
  <div class="grid grid-cols-3 justify-center gap-8">
    <div class="text-right font-semibold">Name</div>
    <div class="col-span-2">{{ data.name }}</div>
    <div class="text-right font-semibold">Release Date</div>
    <div class="col-span-2">{{ data.air_date }}</div>
    <div class="text-right font-semibold">Season</div>
    <div class="col-span-2">{{ releaseSeason }}</div>
    <div class="text-right font-semibold">Episode</div>
    <div class="col-span-2">{{ releaseEpisode }}</div>
  </div>
</template>
