import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import accounts from './modules/accounts'
import current from './modules/current'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    accounts,
    current
  },
  mutations,
  actions,
  getters
})
