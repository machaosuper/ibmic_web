export default {
  state: {
    user: {}
  },
  actions: {},
  getters: {},
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user
    }
  }
}
