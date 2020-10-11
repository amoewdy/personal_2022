// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './icon/iconfont.js'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueAnalytics, {
    id: 'UA-114063477-1',
    router
  });

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})