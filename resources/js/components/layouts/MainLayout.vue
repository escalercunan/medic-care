<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow p-4">
      <h2 class="text-xl font-bold mb-4">My Sidebar</h2>

      <div v-if="auth.user" class="mb-4 text-gray-700">
        Logged in as: <strong>{{ auth.user.name }}</strong>
      </div>

      <ul class="space-y-2">
        <li>
          <router-link to="/" class="text-blue-600 hover:underline">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/profile" class="text-blue-600 hover:underline">Profile</router-link>
        </li>
        <li>
          <button @click="handleLogout" class="text-red-600 hover:underline">Logout</button>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="border-b pb-4 mb-4">
        <h1 class="text-2xl font-bold">Welcome</h1>
      </header>

      <div class="min-h-screen bg-blue-100 flex items-center justify-center">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const router = useRouter()
const auth = useUserStore()



function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>
