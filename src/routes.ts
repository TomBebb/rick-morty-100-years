import { createRouter, createWebHistory } from 'vue-router'
import { NavItem } from './models'
import HomeView from './views/HomeView.vue'
import CharactersView from './views/CharactersView.vue'

export const routes: NavItem[] = [
  {
    path: '/',
    component: HomeView,
    name: 'Home',
    props: {
      icon: 'mdi:home',
    },
  },
  {
    path: '/characters',
    component: CharactersView,
    name: 'Characters',
    props: {
      icon: 'mdi:users',
    },
  },
  {
    path: '/locations',
    component: CharactersView,
    name: 'Locations',
    props: {
      icon: 'mdi:place',
    },
  },
]

export const router = createRouter({ history: createWebHistory(), routes })
