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
    history: VueRouter.createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.use(TDesign);
app.mount('#app')
