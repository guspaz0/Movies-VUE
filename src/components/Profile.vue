<template>
    <div class="container-profile">
        <h3>Mi Perfil:</h3>
        <div class="userData">
            <span>
                <img src="" v-bind:alt="userData.name.charAt(0).toUpperCase()+userData.lastname.charAt(0).toUpperCase()"/>
                <p><b>Nombre Completo:</b>{{ userData.name+ " " + userData.lastname }}</p>
                <p><b>Genero: </b>{{ userData.gender }}</p>
                <p><b>Fecha Nacimiento: </b>{{ new Date(userData.birth_date).toDateString() }}</p>
                <p><b>Pais: </b>{{ userData.country }}</p>
                <p><b>Nombre de Usuario: </b>{{ userData.username }}</p>
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../store/user'

const {user} = storeToRefs(useUserStore())
const userData = computed(() => user.value? user.value : null)

</script>
<style scoped>
.userData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.userData > img {
    width: 100px;
    height: 100px;
    padding-right: 10px;
    color: gray;
    font-weight: bold;
    font-size: 50px;
    align-content: center;
    justify-content: center;
    text-align: center;
}

</style>