import $ from 'jquery';
import Vue from 'vue';
// import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App.vue';
// import Menu from './components/Menu.vue';
// import store from './store/index.babel.js';

// import Brands from './views/Brands.vue';
// import Contacts from './views/Contacts.vue';
// import Projects  from './views/Projects.vue';



// var Brands = require('./views/Brands.vue');
// var Contacts = require('./views/Contacts.vue');
// var Projects = require('./views/Projects.vue');

// Vue.use(VueRouter);

// const router = new VueRouter( {
//     mode: 'history',
//     routes: [
//         { path: '/brands', component: Brands },
//         { path: '/contacts', component: Contacts },
//         { path: '/projects', component: Projects }
//     ]
// } )

new Vue({
    el: '#app',
    render: h => h(App)
})

// new Vue({
//     el: '.b-nav',
//     store: store,
//     render: h => h(Menu)
// })

import './scss/main.scss';
