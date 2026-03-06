import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    // 1. STATE: The data we want to hold
    const user = ref({
        loggedIn: false,
        username: '',
        ID: 0,
        email: ''
    })
    // 2. ACTIONS: Functions to change the data
    function login(userData) {
        user.value = {
            loggedIn: true,
            username: userData.username,
            ID: userData.ID,
            email: userData.email
        }
    }
    function logout() {
        user.value = {
            loggedIn: false,
            username: '',
            ID: 0,
            email: ''
        }
    }
    return { user, login, logout }
})
