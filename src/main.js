import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).use(router).use(store).mount('#app')
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    console.log(to.meta)
    if (to.meta?.content?.description) {
        document.querySelectorAll('meta[name="description"]').forEach((DOM) => {
            DOM.textContent = to.meta.content.description;
        })

    }
    // /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
        document.querySelectorAll('meta[name="title"]').forEach((DOM) => {
            DOM.textContent = to.meta.title;
        })
    }
    next()
});
