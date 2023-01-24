import { createApp } from 'vue'
import './style.css'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import Home from './components/Home.vue'
import First from './components/First.vue'
import * as VueRouter from 'vue-router'




const routes = [
    { path: '/', component: First },
    { path: '/dashboard', component: Dashboard },
    { path: '/home', component: Home },
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})


const app = createApp(App)
app.use(router)
app.use(TDesign);
app.mount('#app')
