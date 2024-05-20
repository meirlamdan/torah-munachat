import { createWebHistory, createRouter } from 'vue-router'

import Books from '@/views/Books.vue';
import Lessons from '@/views/Lessons.vue';
import General from '@/views/General.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
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
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
