<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { fetchRecipes } from '../Services/RecipeService'
import { useFavorites } from '../Services/FavoriteService'
import RecipeList from '../RecipeList.vue'
import Navbar from '../Navbar.vue'
import type { Recipe } from '../Types'

const recipes = ref<Recipe[]>([])
const search = ref('')
const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites()

onMounted(async () => {
  const data = await fetchRecipes("italian")
  if (data) recipes.value = data
})

function toggleFavorite(recipe: Recipe) {
  if (isFavorite(recipe.idMeal)) {
    removeFavorite(recipe.idMeal)
  } else {
    addFavorite(recipe)
  }
}

const filteredRecipes = computed(() =>
  recipes.value.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
  <Navbar @search="search = $event" />
  <main>
    <h1>🍝 Italian Recipes</h1>
    <RecipeList 
      :recipes="filteredRecipes"
      :favorites="favorites"
      @toggle-favorite="toggleFavorite"
    />
  </main>
</template>
