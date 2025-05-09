import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/layouts/MainLayout.vue';
import Dashboard from '../pages/Dashboard.vue';
import Profile from '../pages/Profile.vue';

const routes = [
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
