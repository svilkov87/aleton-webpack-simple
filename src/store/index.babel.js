// import Vue from 'vue';
import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menuItems: [
            {
                name: 'Item_1',
                href: 'test.html',
                active: true
            },
            {
                name: 'Item_2',
                href: 'test.html',
                active: false
            },
            {
                name: 'Item_3',
                href: 'test.html',
                active: false
            },
            {
                name: 'Item_4',
                href: 'test.html',
                active: false
            },
        ]
    },
    mutations: {
        classActive: function (state, index) {
            state.menuItems[index].active = true;
        }
    },
    actions: {},
    getters: {},
});

export default store;

