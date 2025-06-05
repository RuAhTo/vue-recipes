<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useFavorites } from '../Services/FavoriteService'
import RecipeList from '../RecipeList.vue'
import Navbar from '../Navbar.vue'

const { favorites, removeFavorite, isFavorite, addFavorite } = useFavorites()
const search = ref('')

const filteredFavorites = computed(() =>
  favorites.value.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(search.value.toLowerCase())
  )
)

function toggleFavorite(recipe) {
  if (isFavorite(recipe.idMeal)) {
    removeFavorite(recipe.idMeal)
  } else {
    addFavorite(recipe)
  }
}
</script>

<template>
  <Navbar @search="search = $event" />
  <main>
    <h1>⭐ Favorite Recipes</h1>
    <RecipeList 
      :recipes="filteredFavorites"
      :favorites="favorites"
      @toggle-favorite="toggleFavorite"
    />
  </main>
</template>
