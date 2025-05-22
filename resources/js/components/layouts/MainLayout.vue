<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow p-4">
      <h2 class="text-xl font-bold mb-4">My Sidebar</h2>
      <ul class="space-y-2">
        <li><router-link to="/" class="text-blue-600 hover:underline">Dashboard</router-link></li>
        <li><router-link to="/profile" class="text-blue-600 hover:underline">Profile</router-link></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="border-b pb-4 mb-4">
        <h1 class="text-2xl font-bold">Welcome</h1>
      </header>


  <div class="min-h-screen bg-blue-100 flex items-center justify-center">
      <router-view /> <!-- 👈 This renders the page -->
  </div>


    </main>
  </div>
</template>

<script setup>
// no logic needed yet
</script>
