import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue' 

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path:'/',
      redirect:'/home'
    }
   
]

const router = new VueRouter({
  routes
})

export default router
