import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { Welcome, Home } from '../pages'
import { routeNames } from '../shared/constants'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: routeNames.welcome,
    name: 'welcome',
    component: Welcome,
  },
  {
    path: routeNames.home,
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router