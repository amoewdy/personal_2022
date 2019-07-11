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

Vue.use(Router)
    // Vue.use(BootstrapVue);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: index
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
    ]
})