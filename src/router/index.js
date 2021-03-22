import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      name: 'Error',
      component: () => import('../views/404')
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404' }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 登录令牌
const hasToken = false;

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !hasToken) { // 没有令牌，跳转到登录页面
    next({path: '/login'});
  } else if (to.name == 'Login' && hasToken) { // 有令牌，访问登录页面，直接跳转到首页
    next({path: '/'});
  } else { // 正常跳转
    next();
  }
})

export default router
