import $ from 'jquery';
import Vue from 'vue';
import App from './App.vue'

// $(function () {

//     $('.title').html('Webpack');

// });

new Vue({
    el: '#app',
    render: h => h(App)
})

import './scss/main.scss';
