import api from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async getCSRF() {
      await api.get('/sanctum/csrf-cookie')
    },
    async login(credentials) {
      await this.getCSRF()
      await api.post('/login', credentials)
      await this.fetchUser()
    },
    async fetchUser() {
      const res = await api.get('/api/user')
      this.user = res.data
    },
    async logout() {
      await api.post('/logout')
      this.user = null
    }
  }
})
