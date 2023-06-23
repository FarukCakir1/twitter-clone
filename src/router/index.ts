import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../layouts/MainLayout.vue'),
      // children: [
      //   {
      //     path: '',
      //     name: 'home',
      //     component: ()
      //   }
      // ]
    }
  ]
})

export default router
