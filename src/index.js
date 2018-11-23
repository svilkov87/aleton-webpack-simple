import $ from 'jquery';
import Vue from 'vue';
import App from './App.vue';
import Menu from './components/Menu.vue';

// $(function () {

//     $('.title').html('Webpack');

// });

new Vue({
    el: '#app',
    render: h => h(App)
})

new Vue({
    el: '.b-nav',
    render: h => h(Menu)
})

import './scss/main.scss';
