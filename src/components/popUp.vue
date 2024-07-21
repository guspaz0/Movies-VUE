<template>
    <link href="/css/popUp.css" rel="stylesheet"/>
    <span class="popupscreen">
        <div class="popUps" id="popUpDetailLogin">
            <h3>{{ popUpData.message }}</h3>
            <div class="botonPopup">
                <div class="botonPopup">
                    <p v-if="popUpData.redirect">
                        Redirigiendote en <b id="counter">{{ popUpData.second }}</b>
                    </p>
                    <a v-else @click="popUpOff">Aceptar</a>
                </div>
            </div>
        </div>
    </span>
</template>
<script setup lang="ts">
import {ref, watch} from 'vue'
defineProps(['popUpData'])
const emit = defineEmits(["setPopUp"]);

function popUpOff(e){
    emit('setPopUp')
}



</script>