import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Storage from '../utils/storage'

export const userStorage = new Storage<User>('user')

export const isAuthorized = (): boolean => !!userStorage.get()

export const useUserStore = defineStore('user', ()=> {
    const user = ref(userStorage.get())
    const isAuthorized = computed(() => !!user.value)

    function updateUser(userData?: User | null) {
        if (userData) {
            userStorage.set(userData)
            user.value = userData
        }
        else {
            userStorage.remove()
            user.value = null
        }
    }
    
    return {
        user,
        isAuthorized,
        updateUser,
    }
})