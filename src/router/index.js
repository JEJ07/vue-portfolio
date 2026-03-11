import { createRouter, createWebHistory } from 'vue-router'
// import AboutMe from '@/views/AboutMe.vue'
// import TechStack from '@/views/TechStack.vue'
import Homepage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Homepage },
    // { path: '/about-me', component: AboutMe },
    // { path: '/tech-stack', component: TechStack },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
