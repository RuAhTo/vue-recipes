<script lang="ts" setup>
import type { Recipe } from './Types'


defineProps<{
  recipe: Recipe
  isFavorite: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-favorite'): void
}>()

</script>

<template>
  <div class="recipe-card">
    <button class="favorite-btn" @click="emit('toggle-favorite')">
      <svg
        v-if="!isFavorite"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        class="star-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.698a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.888a1 1 0 00-.364 1.118l1.528 4.698c.3.921-.755 1.688-1.54 1.118l-3.97-2.888a1 1 0 00-1.175 0l-3.97 2.888c-.784.57-1.838-.197-1.539-1.118l1.528-4.698a1 1 0 00-.364-1.118l-3.97-2.888c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.951-.69l1.528-4.698z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        class="star-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.698a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.888a1 1 0 00-.364 1.118l1.528 4.698c.3.921-.755 1.688-1.54 1.118l-3.97-2.888a1 1 0 00-1.175 0l-3.97 2.888c-.784.57-1.838-.197-1.539-1.118l1.528-4.698a1 1 0 00-.364-1.118l-3.97-2.888c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.951-.69l1.528-4.698z"
        />
      </svg>
    </button>

    <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
    <h2>{{ recipe.strMeal }}</h2>
  </div>
</template>


<style scoped>

    .recipe-card {
        position: relative;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
    }

    .recipe-card:hover {
        transform: scale(1.02);
    }

    img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 6px;
    }

    h2 {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        color: black;
    }

    .favorite-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .star-icon {
        width: 24px;
        height: 24px;
        color: #f5c518;
        transition: transform 0.2s ease;
    }

    .favorite-btn:hover .star-icon {
        transform: scale(1.1);
    }

</style>