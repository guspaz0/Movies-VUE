<template>
    <main>
    <Carrucel/>
    <div class="container-fluid">
        <div class="row">
            <div class="card-group">
                <div class="card" v-if="Movies.results" v-for="movie in Movies.results.slice(0,6)">
                    <router-link :to="'/peliculas/local/'+movie.id" class="card-body">
                        <img :src="movie.image" class="card-img-top" :alt="movie.title" loading="lazy">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <p class="card-text">{{ movie.short_overview }}</p>
                        <p class="card-text">
                            <small class="text-body-secondary">Pelicula calificada: 
                            <span v-for="i in [0,1,2,3,4]">
                                <font-awesome-icon v-if="i < movie.stars" :icon="['fas', 'star']" />
                                <font-awesome-icon v-else :icon="['far', 'star']"/>
                            </span>
                            </small>
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <Contacto/>
    </main>
    <hr>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { fetchData } from '../utils/utils'
import Contacto from './Contacto.vue'
import Carrucel from './Carrucel.vue'

let Movies = ref([])

onMounted(async ()=>{
    try {
        Movies.value = await fetchData('local','/movies')
    } catch (error) {console.log(error)}
    
})


</script>
<style scoped>
.card {
    align-items: center;
}
.card-body {
    text-align: center;
}
.card-img-top {
    max-height: 200px;
    max-width: 200px;
}
</style>