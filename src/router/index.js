import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../components/NotFound.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/productsList.vue'),
    meta: {
      title: "首頁",
      content: {
        description: "販賣多種商品，包含咖啡與多種生活百貨、生鮮"
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "資訊",
      content: {
        description: "關於綻咖啡的聯絡方式與說明"
      }
    }
  },
  {
    path: '/productsinfo/:id',
    name: 'productsinfo',
    component: () => import('../components/products/productsinfo.vue'),
    props: true,
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../components/article/article.vue'),
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
