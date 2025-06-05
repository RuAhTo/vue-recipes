// FavoriteService.ts
import { ref, watch } from 'vue'
import type { Recipe } from '../Types'

const FAVORITES_KEY = 'favorite-recipes'

const stored = localStorage.getItem(FAVORITES_KEY)
const favorites = ref<Recipe[]>(stored ? JSON.parse(stored) : [])

export function useFavorites() {
  function addFavorite(meal: Recipe): void {
    if (!favorites.value.some(fav => fav.idMeal === meal.idMeal)) {
      favorites.value.push(meal)
    }
  }

  function removeFavorite(idMeal: string): void {
    favorites.value = favorites.value.filter(fav => fav.idMeal !== idMeal)
  }

  function isFavorite(idMeal: string): boolean {
    return favorites.value.some(fav => fav.idMeal === idMeal)
  }

  watch(
    favorites,
    (newFavorites) => {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
    },
    { deep: true }
  )

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }
}
