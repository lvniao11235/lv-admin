import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

import AppState from './appstate'
export default new Vuex.Store({
    modules:{
        appState:AppState
    }
})