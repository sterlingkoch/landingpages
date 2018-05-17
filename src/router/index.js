import Vue from 'vue'
import Router from 'vue-router'
import { LandingPage, StyleGuide, Stats } from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/styleguide',
      name: 'StyleGuide',
      component: StyleGuide
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
