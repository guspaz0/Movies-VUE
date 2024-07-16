<script>

</script>

<template>
<main>
    <link href="/css/addPelicula.css" rel="stylesheet"/>
    <link href="/css/popUp.css" rel="stylesheet"/>
    <div class="container" data-aos='zoom-in' data-aos-duration='1000' aos-init aos-animate>
        <form id="addMovie" action="/movies" method="POST">
            <h2>Formulario de Pelicula</h2>
            <div class="container-inputs">
            <span class="container-data">
                <span>
                    <label for="title"><b>Titulo:</b></label>
                    <input type="text" id="title" name="title"/>
                </span>
                <span>
                    <label for="image"><b>Imagen:</b></label>
                    <input type="text" id="image" name="image"/>
                </span>
                <span>
                    <label for="background_image"><b>Imagen de fondo:</b></label>
                    <input type="text" id="background_image" name="background_image"/>
                </span>
                <span>
                    <label for="overview"><b>Sinopsis:</b></label>
                    <input type="text" id="overview" name="overview"/>
                </span>
                <span>
                    <label for="release_date"><b>Fecha lanzamiento:</b></label>
                    <input type="date" id="release_date" name="release_date"/>
                </span>
            </span>
            <fieldset >
                <legend><b>Generos:</b></legend>
                <div id="genres">
                    <!-- aqui se insertan los checkboxs de generos -->
                </div>
            </fieldset>
            </div>
            <input id="submit" name="submit" type="submit"/>
        </form>
    </div>
    </main>
</template>
