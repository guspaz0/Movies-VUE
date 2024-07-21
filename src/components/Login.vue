
<script setup lang="ts">

</script>

<template>
    <main>
        <link href="/css/login.css" rel="stylesheet"/>
    <div class="container aos-init aos-animate" data-aos='zoom-in' data-aos-duration='1000' >
        <form action="/user/login" method="POST">
            <fieldset>
                <legend>
                    <label for="username">Nombre de usuario y/o Correo:</label>
                </legend>
                <input type="text" id="username" name="username"/>
            </fieldset>
            <fieldset>
                <legend>
                    <label for="password">Contraseña:</label>
                </legend>
                <input type="password" id="password" name="password"/>
            </fieldset>
            <input id="submit" name="submit" type="submit"/>
        </form>
        <p><router-link v-bind:to="'/register'">Registrate</router-link></p>
    </div>
    </main>
</template>
