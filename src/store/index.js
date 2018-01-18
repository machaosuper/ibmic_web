import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

const state = {
  loading: false
}

const actions = {}

const getters = {}

const mutations = {
  updateLoading (state, payload) {
    state.loading = payload.loading
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    user
  }
})
