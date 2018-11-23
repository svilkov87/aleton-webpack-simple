import $ from 'jquery';
import Vue from 'vue';
import App from './App.vue';
import Menu from './components/Menu.vue';
import store from './store/index.babel.js';

// $(function () {

//     $('.title').html('Webpack');

// });

new Vue({
    el: '#app',
    render: h => h(App)
})

new Vue({
    el: '.b-nav',
    store: store,
    render: h => h(Menu)
})

import './scss/main.scss';
