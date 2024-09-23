import { RouteRecordSingleView } from 'vue-router'

export type ColorKind = 'primary' | 'secondary' | 'success' | 'danger'
export type TextAlign = 'center' | 'left' | 'right'
export interface NavItem extends RouteRecordSingleView {
  props: {
    icon?: string
  }
}
export interface BasePaginatedItem {
  id: number
  name: string
}
export interface PaginatedResults<T> {
  info: {
    count: number
    pages: number
  }
  results: T[]
}
export interface NamedLink {
  name: string
  url: string
}
export const enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
export const enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}
export interface Character extends BasePaginatedItem {
  status: CharacterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: NamedLink
  location: NamedLink
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Episode extends BasePaginatedItem {
  air_date: string
  created: string
  episode: string
  characters: string[]
}
