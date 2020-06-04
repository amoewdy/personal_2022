import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import BootstrapVue from 'bootstrap-vue'
import zipclean from '@/components/zipclean'
import sandword from '@/components/sandword'
import wandpoint from '@/components/wandpoint'
import clubhusky from '@/components/clubhusky'
import icushion from '@/components/icushion'
import daydreaming from '@/components/daydreaming'
import hemago from '@/components/hemago'
import camt from '@/components/camt'
import spimo from '@/components/spimo'
import porcelain from "@/components/porcelain"
import about from "@/components/about"
import pika from "@/components/pika"
import sketchslicer from "@/components/sketchslicer"
import shelfclock from "@/components/shelfclock"
import backupUX from "@/components/backupUX"

Vue.use(Router)
    // Vue.use(BootstrapVue);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/zipclean',
            name: 'Zipclean',
            component: zipclean
        },
        {
            path: '/sandword',
            name: 'SandWord',
            component: sandword
        },
        {
            path: '/wandpoint',
            name: 'Wandpoint',
            component: wandpoint
        },
        {
            path: '/clubhusky',
            name: 'clubhusky',
            component: clubhusky
        },
        {
            path: '/icushion',
            name: 'iCushion',
            component: icushion
        },
        {
            path: '/daydreaming',
            name: 'Daydreaming',
            component: daydreaming
        },
        {
            path: '/hemago',
            name: 'HemaGo',
            component: hemago
        },
        {
            path: '/camt',
            name: 'CAMT',
            component: camt
        },
        {
            path: '/spimo',
            name: 'spimo',
            component: spimo
        },
        {
            path: '/porcelain',
            name: 'porcelain',
            component:  porcelain
        },
        {
            path: '/pika',
            name: 'pika',
            component:  pika
        },
        {
            path: '/sketchslicer',
            name: 'sketchslicer',
            component:  sketchslicer
        },
        {
            path: '/backupUX',
            name: 'backupUX',
            component:  backupUX
        },
        {
            path: '/shelfclock',
            name: 'shelfclock',
            component:  shelfclock
        },
    ]
})