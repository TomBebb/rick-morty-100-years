import { createRouter, createWebHistory } from 'vue-router'
import { NavItem } from './models'
import HomeView from './views/HomeView.vue'
import CharactersView from './views/CharactersView.vue'
import LocationsView from './views/LocationsView.vue'
import EpisodesView from './views/EpisodesView.vue'

export const routes: NavItem[] = [
  {
    path: '/',
    component: HomeView,
    name: 'Home',
    props: {
      icon: 'mdi:home',
      desc: '',
    },
  },
  {
    path: '/characters',
    component: CharactersView,
    name: 'Characters',
    props: {
      icon: 'mdi:users',
      desc: 'Browse/Search Rick & Morty Characters',
    },
  },
  {
    path: '/locations',
    component: LocationsView,
    name: 'Locations',
    props: {
      icon: 'mdi:place',
      desc: 'Browse/Search Rick & Morty Locations',
    },
  },
  {
    path: '/episodes',
    component: EpisodesView,
    name: 'Episodes',
    props: {
      icon: 'mdi:tv',
      desc: 'Browse/Search Rick & Morty Episodes',
    },
  },
]

export const router = createRouter({ history: createWebHistory(), routes })
