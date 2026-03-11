<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'


onMounted(() => {
  document.title = 'John Emman Juaquera - Portfolio'
})
</script>

<template>
  <NavBar />
  <main class="pt-20">
    <router-view />
  </main>
</template>
