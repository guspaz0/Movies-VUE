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
                        <li v-for="list in menu" class="btn">
                            <router-link v-bind:to="list.href">{{ list.nombre }}</router-link>
                        </li>
                        <li v-if="!props.userData.hasOwnProperty('id')" class="btn">
                            <router-link  v-bind:to="'/login'">Iniciar sesion</router-link>
                        </li>
                        <button v-else="" class="btn" v-on:click.prevent="emit('handleLogout')">Cerrar Sesion</button>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <hr>
</template>
<script setup lang="ts">
import {reactive} from 'vue'


let props = defineProps(['userData'])
const emit = defineEmits(["handleLogout"]);

const menu =  [
    {href: '/', nombre: 'Inicio'},
    {href: '/peliculas', nombre: 'Peliculas'},
    {href: '/nosotros', nombre: 'Nosotros'}
]

</script>