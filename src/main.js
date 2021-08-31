import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import {router} from "./router";
import {createStore} from "./store";

Vue.config.productionTip = false

Vue.use(Vuex)

// console.log({VueRouter});
Vue.use(VueRouter)


new Vue({
    render: h => h(App),
    router,
    store: createStore(),
}).$mount('#app')
