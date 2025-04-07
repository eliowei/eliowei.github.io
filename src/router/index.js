import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Elio Wei | 個人網站',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Elio Wei'
  next()
})

export default router
