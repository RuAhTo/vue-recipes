<template>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/italian">Italian</RouterLink>
    <RouterLink to="/french">French</RouterLink>
    <RouterLink to="/favorites">Favorites</RouterLink>

    <input
      type="text"
      placeholder="Search recipes..."
      v-model="search"
      @input="emitSearch"
      class="search-bar"
    />
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

const search = ref('')
const emit = defineEmits(['search'])

function emitSearch() {
  emit('search', search.value)
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #f8f8f8;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ccc;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #ff6347;
}
.search-bar {
  margin-left: auto;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
