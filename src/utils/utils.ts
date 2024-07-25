const {VITE_DB_HOST, VITE_IMDB_AUTH} = import.meta.env;

export async function fetchData(origen: String, param: String, method: String, body: Object) {
    const host = {
        local: VITE_DB_HOST,
        terceros: 'https://api.themoviedb.org/3',
        countries: 'https://restcountries.com/v3.1'
    }
    const headers = {
        local: {'Accept': 'application/json'} ,
        terceros: {
            'Accept': 'application/json',
            'Authorization': VITE_IMDB_AUTH
        },
        countries: {'Accept': 'application/json' }
    }

    try {
        let config = {
            method: method? method : 'GET',
            headers: headers[origen],
            [body? 'body': '']: body? JSON.stringify(body) : ''
        }
        const res = await fetch(`${host[origen]}${param}`, config)

        if (method?.toUpperCase() == 'POST') {
            if (res.status !== 201 && param == '/movies') throw new Error('error al postear datos')
            else return await res.json()
        } 
        else return await res.json()
    } catch(error) {
        console.log(error)
    }
}



export default fetchData