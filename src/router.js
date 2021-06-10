import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Profile from '@/views/Profile'
import Login from '@/views/Login'
import ProductHome from '@/views/ProductHome'
import ProductDetail from '@/views/ProductDetail'

Vue.use(VueRouter)

const routes= [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
    { path: '/products', component: ProductHome },
    { path: '/products/:id', component: ProductDetail },
  ]

const router = new VueRouter({
    mode: 'history',
    routes,
  });

export default router;