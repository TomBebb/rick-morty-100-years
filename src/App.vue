<script setup lang="ts">
import MyButton from './components/MyButton.vue'
</script>

<template>
  <div class="p-2 flex flex-col h-screen w-full b">
    <div>Hellop!</div>
    <MyButton>Defaults</MyButton>
    <MyButton color="primary" align="center" icon="mdi:tick">Primary</MyButton>
    <MyButton color="secondary" align="center" icon="mdi:tick"
      >Secondary</MyButton
    >
    <MyButton color="success" align="center" icon="mdi:tick">Success</MyButton>
    <MyButton color="danger" align="center" icon="mdi:error">Danger</MyButton>
  </div>
</template>
