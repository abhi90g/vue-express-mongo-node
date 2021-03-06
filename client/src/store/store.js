import Vue from 'vue'
import Vuex from 'vuex'
import * as actionsData from './modules/data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    actionsData
  }
})
