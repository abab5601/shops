import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../components/NotFound.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/productsList.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/productsinfo/:id',
    name: 'productsinfo',
    component: () => import('../components/products/productsinfo.vue'),
    props: true
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
