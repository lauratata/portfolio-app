import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../components/Accueil'
import Apropos from "../components/Apropos.vue";
import Projets from "../components/Projets.vue";
import Contact from "../components/Contact.vue";

import Projet from "../components/projets/DeliSanSucre.vue";
import Tousdesstalkers from "../components/projets/Tousdesstalkers.vue";
import BugDays from "../components/projets/BugDays.vue";
import ChatNoir from "../components/projets/ChatNoir.vue";
import CarteVisite from "../components/projets/CarteVisite.vue";
import Aidtudes from "../components/projets/Aidtudes.vue";
import Boss from "../components/projets/Boss.vue";
import Vacaspace from "../components/projets/Vacaspace.vue";
import Gameboy from "../components/projets/Gameboy.vue";

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
            path: '/DeliSanSucre',
            name: 'Projet',
            component: Projet
        },
        {
            path: '/Bug-Days',
            name: 'BugDays',
            component: BugDays
        },
        {
            path: '/Chat-Noir',
            name: 'ChatNoir',
            component: ChatNoir
        },
        {
            path: '/Tous-des-stalkers',
            name: 'Tousdesstalkers',
            component: Tousdesstalkers
        },
        {
            path: '/Carte-de-visite',
            name: 'CarteVisite',
            component: CarteVisite
        },
        {
            path: '/Aidtudes',
            name: 'Aidtudes',
            component: Aidtudes
        },
        {
            path: '/Boss',
            name: 'Boss',
            component: Boss
        },
        {
            path: '/Vacaspace',
            name: 'Vacaspace',
            component: Vacaspace
        },
        {
            path: '/Gameboy',
            name: 'Gameboy',
            component: Gameboy
        }
    ]
})
