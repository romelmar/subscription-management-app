import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    visible: false,
    message: '',
    color: 'success',
    timeout: 20000,
  }),
  actions: {
    show(message, color = 'success', timeout = 20000) {
      this.message = message
      this.color = color
      this.timeout = timeout
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
})
