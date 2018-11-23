import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menuItems: [
            {
                name: 'Item_1',
                active: false
            },
            {
                name: 'Item_2',
                active: false
            },
            {
                name: 'Item_3',
                active: false
            },
            {
                name: 'Item_4',
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

