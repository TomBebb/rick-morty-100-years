import { RouteRecordSingleView } from 'vue-router'

export type ColorKind = 'primary' | 'secondary' | 'success' | 'danger'
export type TextAlign = 'center' | 'left' | 'right'
export interface NavItem extends RouteRecordSingleView {
  props: {
    icon?: string
  }
}
