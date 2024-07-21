export default function validateForm(Object: object) {
    let {title, image, background_image, overview, release_date, genres} = Object
    console.log(title, image, background_image, overview, release_date, genres)
    let errors = {}
    Object.keys(JSON.parse(JSON.stringify(Object))).forEach(input => {
        //console.log(input)
        switch(input) {
            case 'title':
                if(title.value.length == 0) errors.title = "Titulo no puede estar vacio"
                if(title.value.length > 30) errors.title = "Titulo debe tener menos de 30 caracteres"
                break
            case 'image':
                if(image.value.length == 0) errors.image = "Imagen no puede estar vacio"
                break
            case 'background_image':
                if(background_image.value.length == 0) errors.background_image = "Imagen de fondo no puede estar vacio"
                break
            case 'overview':
                if(overview.value.length == 0) errors.overview = "Sinopsis no puede estar vacio"
                if(overview.value.length > 250) errors.overview = "Sinopsis no puede tener mas de 250 caracteres"
                break
            case 'release_date':
                if(release_date.value.length == 0) errors.release_date = "Fecha de lanzamiento no puede estar vacio"
                if(release_date.valueAsDate == null) errors.release_date = "ingresar una fecha"
                if(release_date.value.length != 10) errors.release_date = "formato de fecha invalido"
                break
            case 'genres':
                if (Array.from(genres).filter(genre => genre.checked).length == 0) errors.genres = "Seleccione al menos un genero"
                break
            default:
                break
        }
    })
    return errors
}