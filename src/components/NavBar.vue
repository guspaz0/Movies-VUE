<template>
    <header class="bg-color">
        <div class="container-fluid">
            <div class="card-group">
                <div class="row align">
                    <div class="col" style="max-width:300px">
                        <router-link v-bind:to="'/'">
                            <img src="https://inscripcionesagencia.bue.edu.ar/codoacodo/img/graficos/logo%20CAC.png" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 1801px; height: 107px; margin: 10px 0px; width: 236px;" alt="Codo a codo🚀" jsname="kn3ccd">
                        </router-link>                    
                    </div>
                    <div class="col">
                    <br>
                    <h1>Peliculas y Series</h1>
                    </div>
                    <ul class="col">
                        <li v-for="list in menu">
                            <button v-if="list.nombre == 'Cerrar Sesion'" v-on:click.prevent="handleLogout" class="btn">
                                {{ list.nombre }}
                            </button>
                            <router-link v-else="" v-bind:to="list.href" class="btn">{{ list.nombre }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <hr>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../store/user'

const { user } = storeToRefs(useUserStore())

const username = computed(() => user.value?.name)
const displayStatus = computed(() => username.value ? 'authorized' : 'anonym')

const allMenus =  computed(()=>[
    {href: '/', nombre: 'Inicio', display: 'all'},
    {href: '/peliculas', nombre: 'Peliculas', display: 'all'},
    {href: '/nosotros', nombre: 'Nosotros', display: 'all'},
    {href: '/login', nombre: 'Iniciar Sesion', display: 'anonym'},
    {href: '/favoritos', nombre: 'Favoritos', display: 'authorized'},
    {href: '/profile', nombre: 'Profile', display: 'authorized'},
    {href: '/', nombre: 'Cerrar Sesion', display: 'authorized'}
])

const menu = computed(()=> allMenus.value.filter(
    l => l.display === displayStatus.value || l.display === 'all',
))

function handleLogout(){
    const { updateUser } = useUserStore()
    updateUser(null)
}

</script>

<style scoped>
li {
    list-style: none;
}
</style>