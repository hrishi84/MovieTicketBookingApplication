import Vue from 'vue'
import Router from 'vue-router'
import Movies from './components/Movies'
import Shows from './components/Shows'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Movies
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/:movie',
      name: 'shows',
      component: Shows
    }
  ]
})
