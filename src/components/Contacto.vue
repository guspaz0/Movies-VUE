<template>
        <div class="contactanos" >
        <div class="card" id="contacto">
            <form v-on:submit.prevent="handleSubmit" class="card-body">
                <div class="mb-3">
                    <label for="contacto" class="form-label">Ingresa tu Email </label>
                    <input v-model="form.email" type="text" class="form-control" id="contacto" name="email" placeholder="name@example.com">
                    <small v-if="errors.email" class="error">{{ errors.email }}</small>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Ingresa tu consulta</label>
                    <textarea v-model="form.message" class="form-control" id="message" name="message" rows="3"></textarea>
                    <small v-if="errors.message" class="error">{{ errors.message }}</small>
                </div>
                <div class="mb-3">
                    <input type="submit" class="btn btn-outline-warning"/>
                </div>
            </form>
        </div>
        <popUp v-if="Object.keys(popUpData).some(x => popUpData[x].length > 0)" 
            :popUpData="popUpData" 
            @setPopUp="setPopUp"/>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive, watch} from 'vue'
import {fetchData} from '../utils/utils'

const form = reactive({ email: '', message: '' })
const errors = ref({ email: '', message: '' })

watch(()=> form.email,(value)=>{
    errors.value.email = ''
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length == 0) errors.value.email = "Completar el campo email" 
    else if(!regex.test(value)) errors.value.email = "Debe ser un email valido"
})
watch(()=> form.message,(value)=>{
    errors.value.message = ''
    if (value.length == 0) errors.value.message = "El mensaje no puede estar vacio" 
})

let popUpData = ref({ message: '', redirect: '', second: 0 })

function setPopUp(){
    popUpData.value = { message: '', redirect: '', second: '' } 
}
async function handleSubmit(){
    try {
        if(Object.keys(errors.value).some(x => errors.value[x].length > 0)) {
            popUpData.value.message = 'Corregir los errores del formulario de contacto'
        }
        else {
            let newUser = await fetchData('local','/contact', 'POST', form)
            if (newUser instanceof Error) popUpData.value.message = newUser.message
            else popUpData.value = {message: "Mensaje enviado!", second: 3, redirect: '/'}
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
<style>
.error{
    color: red;
}
</style>