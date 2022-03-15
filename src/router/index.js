import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../components/Accueil'
import Apropos from "../components/Apropos.vue";
import Projets from "../components/Projets.vue";
import Contact from "../components/Contact.vue";

import Projet from "../components/Projet.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Accueil
        },
        {
            path: '/A-propos',
            name: 'Apropos',
            component: Apropos
        },
        {
            path: '/Projets',
            name: 'Projets',
            component: Projets
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/Projet/:id',
            name: 'Projet',
            component: Projet
        }
    ]
})
