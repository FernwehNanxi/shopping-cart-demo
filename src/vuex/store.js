import Vue from 'vue'
import Vuex from 'vuex'
//import index from './modules/index'
import * as actions from './actions'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules,
    strict:false
}) 