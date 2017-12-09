import Vue from 'vue'
import Vuex from 'vuex'

import events from './modules/userState'
import items from './modules/incidents'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    events,
    items
  }
})
