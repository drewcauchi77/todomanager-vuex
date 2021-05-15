// Entry point for VueX where we combine all our modules
// Bring in all our modules and add them to our VueX Store

import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

Vue.use(Vuex);

// Create our store
export default new Vuex.Store({
    modules: {
        todos
    }
})