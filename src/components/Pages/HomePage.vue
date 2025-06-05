<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { fetchRecipes } from '../Services/RecipeService'
import RecipeList from '../RecipeList.vue'
import Navbar from '../Navbar.vue'
import { useFavorites } from '../Services/FavoriteService'
import type { Recipe } from '../Types'

const recipes = ref<Recipe[]>([])
const search = ref('')
const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites()

onMounted(async () => {
  const [italian, french] = await Promise.all([
    fetchRecipes('italian'),
    fetchRecipes('french')
  ])

  recipes.value = [...(italian || []), ...(french || [])]
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
    <h1>🍽️ Welcome!</h1>
    <RecipeList 
      :recipes="filteredRecipes"
      :favorites="favorites"
      @toggle-favorite="toggleFavorite"
    />
  </main>
</template>
