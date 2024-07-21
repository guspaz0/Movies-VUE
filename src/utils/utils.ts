const {VITE_DB_HOST, VITE_IMDB_AUTH} = import.meta.env;

export async function fetchData(origen: String, param: String, method: String, body: Object) {
    let host = {
        local: VITE_DB_HOST,
        terceros: 'https://api.themoviedb.org/3'
    }
    try {
        let config = {
            method: method? method : 'GET',
            headers: origen == 'local'
            ? {'Accept': 'application/json'} 
            : {
                'Accept': 'application/json',
                'Authorization': VITE_IMDB_AUTH
            },
            [body? 'body': '']: body? body : ''
        }
        const res = await fetch(`${host[origen]}${param}`, config)

        if (method?.toUpperCase() == 'POST') {
            if (res.status !== 201) throw new Error('error al postear datos')
            else return await res.json()
        } 
        else return await res.json()
    } catch(error) {
        console.log(error)
    }
}



export default fetchData