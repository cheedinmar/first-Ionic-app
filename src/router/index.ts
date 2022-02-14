import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import memoriesPageVue from '../pages/memoriesPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component: memoriesPageVue
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
