<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
      <div class="mb-6 text-center">
        <h1 class="text-3xl font-bold text-red-800">Sign in to your account</h1>
        <p class="text-gray-500 text-sm">Welcome back! Please login to continue.</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Submit -->
        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </form>

      <!-- Optional links -->
      <div class="mt-4 text-center text-sm text-gray-500">
        <p>
          Forgot your password?
          <a href="#" class="text-blue-600 hover:underline">Reset it here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '@/store/user'

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      const userStore = useUserStore()

      try {
        // 1. Send login request
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        });

        const token = response.data.access_token;

        // 2. Save token
        localStorage.setItem('auth_token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // 3. Fetch and store user
        await userStore.getUser();

        // 4. Redirect
        this.$router.push('/');
      } catch (error) {
        const message =
          error.response?.data?.error || 'Login failed. Please check your credentials.';
        alert(message);
      }
    },
  },
};
</script>