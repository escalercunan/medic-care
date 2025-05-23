import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/layouts/MainLayout.vue';
import Dashboard from '../pages/Dashboard.vue';
import Profile from '../pages/Profile.vue';
import Login from '../pages/Login.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'sas',
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        path: 'profile',
        component: Profile,
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('auth_token'); // simple auth check

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login');
  } else {
    next(); // allow navigation
  }
});

export default router;
