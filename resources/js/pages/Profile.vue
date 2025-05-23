<template>
  <div class="p-6 bg-white rounded shadow overflow-x-auto">
    <h2 class="text-xl font-bold mb-4">Users Table</h2>

    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.email }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(user.created_at) }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <button class="text-blue-600 hover:underline">Edit</button>
            <button class="ml-4 text-red-600 hover:underline">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', created_at: '2025-05-22T07:26:36.000000Z' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', created_at: '2025-05-22T07:29:12.000000Z' },
  { id: 3, name: 'Bob Lee', email: 'bob@example.com', created_at: '2025-05-21T15:44:00.000000Z' },
]

function formatDate(datetime) {
  return new Date(datetime).toLocaleDateString()
}
</script>
