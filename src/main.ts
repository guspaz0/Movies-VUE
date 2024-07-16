import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Peliculas from './components/Peliculas.vue'
import MovieDetail from './components/MovieDetail.vue'
import AddPelicula from './components/AddPelicula.vue'
import Nosotros from './components/Nosotros.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'


const app = createApp(App)

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/peliculas', name: 'Peliculas', component: Peliculas},
    {path: '/peliculas/:origen/:id', name: 'MovieDetail', component: MovieDetail},
    {path: '/peliculas/add', name: 'AddPelicula', component: AddPelicula},
    {path: '/nosotros', name: 'Nosotros', component: Nosotros},
    {path: '/register', name: 'Register', component: Register},
    {path: '/login', name: 'Iniciar Sesion', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    mode:'history',
    routes: routes
})

app.use(router)

app.mount('#app')
