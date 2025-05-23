// import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../css/app.css';
import { createPinia } from 'pinia';
import axios from 'axios';
import { useUserStore } from './store/user'; // ✅ Make sure this path is correct

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

// ✅ Restore token and load user after Pinia is initialized
const token = localStorage.getItem('auth_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  // Defer getUser() until after app is mounted and Pinia is ready
  const userStore = useUserStore();
  userStore.getUser().catch(() => {
    userStore.logout();
  });
}
