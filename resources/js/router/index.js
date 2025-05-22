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
      { path: '', component: Dashboard },
      { path: 'profile', component: Profile },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
