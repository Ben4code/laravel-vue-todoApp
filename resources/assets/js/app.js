
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import {routes} from './routes';


Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    //mode: 'history'
});

const app = new Vue({
    el: '#app',
    router,
    components:{ Home }
});
