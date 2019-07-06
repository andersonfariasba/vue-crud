import Vue from 'vue'
import Router from 'vue-router'
import Listar from '@/pages/Listar'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Entrada',
            component: Listar 
        },
        {
            path:'/listar',
            name: 'Listar',
            component: Listar
        }

    ]
})

