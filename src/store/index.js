import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions,
  getters,
  // modules
})
