import { createRouter, createWebHistory } from 'vue-router'
import type { RouteParams, RouteRecordRaw } from 'vue-router'
import Home from './components/Home.vue'
import Peliculas from './components/Peliculas.vue'
import { isAuthorized } from './store/user'

export type AppRouteNames =
    | 'Home'
    | 'Peliculas'
    | 'PeliculaForm'
    | 'MovieDetail'
    | 'Nosotros'
    | 'UserForm'
    | 'login'
    | 'Profile'

const routes: RouteRecordRaw[] = [
    {
        path: '/', 
        name: 'Home', 
        component: Home
    },
    {
        path: '/peliculas', 
        name: 'Peliculas', 
        component: Peliculas
    },
    {
        path: '/peliculas/add', 
        name: 'PeliculaForm', 
        component: ()=> import ('./components/PeliculaForm.vue'),
        beforeEnter: ()=> !isAuthorized()
    },
    {
        path: '/peliculas/:origen/:id', 
        name: 'MovieDetail', 
        component: ()=> import('./components/MovieDetail.vue')
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: ()=> import('./components/Nosotros.vue'),
        
    },
    {   
        path: '/register', 
        name: 'UserForm', 
        component: ()=> import('./components/UserForm.vue'),
        beforeEnter: ()=> !isAuthorized()
    },
    {
        path: '/login', 
        name: 'login', 
        component: ()=> import('./components/Login.vue'),
        beforeEnter: ()=> !isAuthorized()
    },
    {
        path: '/profile', 
        name: 'Profile', 
        component: ()=> import('./components/Profile.vue'),
        beforeEnter: ()=> isAuthorized()
    }
]

const Router = createRouter({
    history: createWebHistory(),
    mode:'history',
    routes: routes
})

export default Router


export function routerPush(name: AppRouteNames, params?: RouteParams): ReturnType<typeof Router.push> {
    return params === undefined
        ? Router.push({ name })
        : Router.push({ name, params })
}