<script lang="ts" setup>
import { ref, computed } from 'vue'
import RecipeCard from './RecipeCard.vue'
import type { Recipe } from './Types'

const props = defineProps<{
  recipes: Recipe[],
  favorites: Recipe[],
}>()

const emit = defineEmits<{
  (e: 'toggle-favorite', recipe: Recipe): void
}>()

const showOnlyFavorites = ref(false)

const displayedRecipes = computed(() =>
  showOnlyFavorites.value
    ? props.recipes.filter(recipe =>
        props.favorites.some(f => f.idMeal === recipe.idMeal)
      )
    : props.recipes
)
</script>

<template>
  <div>
    <button @click="showOnlyFavorites = !showOnlyFavorites" class="filter-button">
      {{ showOnlyFavorites ? 'Show All Recipes' : 'Show Only Favorites' }}
    </button>

    <div class="recipe-grid">
      <RecipeCard
        v-for="recipe in displayedRecipes"
        :key="recipe.idMeal"
        :recipe="recipe"
        :is-favorite="favorites.some(f => f.idMeal === recipe.idMeal)"
        @toggle-favorite="emit('toggle-favorite', recipe)"
      />
    </div>
  </div>
</template>

<style scoped>
.filter-button {
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.filter-button:hover {
  background-color: #e5533d;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .recipe-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .recipe-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .recipe-grid {
    grid-template-columns: 1fr;
  }
}
</style>
