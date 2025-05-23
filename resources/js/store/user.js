import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(data) {
      this.user = data
      this.isAuthenticated = true
    },
    async getUser() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user')
        this.setUser(response.data)
      } catch (error) {
        console.error('Failed to fetch user:', error)
        this.logout()
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('auth_token')
      delete axios.defaults.headers.common['Authorization']
    }
  }
})
