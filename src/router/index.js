import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/Hero.vue'
import About from '../views/About.vue'
import About2 from "@/views/About2.vue";
import Projects from "@/views/Projects.vue";
import Impressum from "@/views/Impressum.vue";
import ContactMe from "@/views/ContactMe.vue";
import Skills from "@/views/Skills.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero',
      component: Hero
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/about2',
      name: 'about2',
      component: About2,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/contact',
      name: 'contactMe',
      component: ContactMe,
    },
  ]
})

export default router
