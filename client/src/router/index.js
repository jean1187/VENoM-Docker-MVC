import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import postsRoutes from '@/modules/posts/router'

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'dashboard',
    component: Hello
  },
  {
    path: '*',
    redirect: { name: 'dashboard' }
  }
]

const routes = baseRoutes.concat(postsRoutes)

export default new Router({
  mode: 'history',
  routes
})
