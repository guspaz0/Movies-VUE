<template>
  <NavBar :userData="userData" @handleLogout="handleLogout"/>
  <router-view></router-view>
  <Pie />
</template>

<script setup lang="ts">
import {watch,ref,reactive, computed, onMounted} from 'vue'
import NavBar from './components/NavBar.vue'
import Pie from './components/Pie.vue'

let userData = reactive(sessionStorage.userData? JSON.parse(sessionStorage.userData) : {})

watch(()=> userData, ()=>{
    if (sessionStorage.userData) {
        userData = JSON.parse(sessionStorage.userData)
    } else userData = {}
}, {immediate: true})

function handleLogout() {
    sessionStorage.removeItem("userData")
}
</script>