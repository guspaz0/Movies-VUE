const {VITE_DB_HOST, VITE_IMDB_AUTH} = import.meta.env;

export async function fetchData(origen: String, param: String) {
    let host = {
        local: VITE_DB_HOST,
        terceros: 'https://api.themoviedb.org/3'
    }
    try {
        let config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': VITE_IMDB_AUTH
            }
        }
        const res = await fetch(`${host[origen]}${param}`, origen == "local"? {} : config)
        const data = await res.json()
        return data
    } catch(error) {
        console.log(error)
    }
}

export default fetchData