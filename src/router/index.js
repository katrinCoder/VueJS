import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    // {
    //   path: '/dashboard/:page',
    //   name: 'dashboard',
    //   component: () => import('@/views/Dashboard.vue')
    // },
    {
      path: '/dashboard/:category',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    {
      // path: '/about',
      path: '/about*',
      name: 'about',
      // component: About,
      component: () => import('@/views/About.vue'),
      children: [
        {
          path: '/delivery'
        }
      ]
    },
    {
      path: '/notfound',
      name: 'notfound',
      // component: NotFound,
      component: () => import('@/views/NotFound.vue')
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/Login.vue'),
    // },
    // {
    //   path: '*',
    //   component: () => import('@/views/NotFound.vue'),
    // },
    {
      path: '*',
      redirect: {
        name: 'notfound'
      }
    }
  ]
})

// const user = true;
//
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'notfound') next({ name: 'notfound' });
//   else next();
// });

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  notfound: 'Not Found'
}

router.afterEach((to) => {
  document.title = titles[to.name]
})

export default router
