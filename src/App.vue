<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'


</script>

<template>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
