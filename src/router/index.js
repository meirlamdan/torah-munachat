import { createRouter, createWebHistory } from 'vue-router'
import Books from '@/views/Books.vue';
import Lessons from '@/views/Lessons.vue';
import General from '@/views/General.vue';
import NotFound from '@/views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/:pathMatch(.*)*',
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
