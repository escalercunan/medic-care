import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('auth_token') || null,
    user: null,
  }),
  actions: {
    async login(email, password) {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      })

      const token = response.data.access_token
      this.token = token
      localStorage.setItem('auth_token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      await this.getUser()
    },
    async getUser() {
      const response = await axios.get('http://localhost:8000/api/user')
      this.user = response.data
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('auth_token')
      delete axios.defaults.headers.common['Authorization']
    },
    isLoggedIn() {
      return !!this.token
    },
  },
})
