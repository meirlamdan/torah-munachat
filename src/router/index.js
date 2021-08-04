import { createRouter, createWebHistory } from 'vue-router'
import Books from '../views/Books.vue'
import Lessons from '../views/Lessons.vue'
import General from '../views/General.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting 
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: Lessons
  },
  {
    path: '/general',
    name: 'General',
    component: General
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
