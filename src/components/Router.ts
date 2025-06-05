import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/HomePage.vue'
import Italian from './Pages/ItalianPage.vue'
import French from './Pages/FrenchPage.vue'
import Favorites from './Pages/FavoritesPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/italian', component: Italian },
  { path: '/french', component: French },
  { path: '/favorites', component: Favorites}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
