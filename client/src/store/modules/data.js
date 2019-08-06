import actionService from '../../services/actionService'

export const namespaced = true

export const state = {
  actions: [],
  isLoading: false
}


export const mutations = {
  SET_ACTIONS(state, data) {
    state.actions = data
  },
  SET_LOADING(state, value) {
    state.isLoading = value
  }
}
export const actions = {
  async getAllActions({ commit }) {
    commit('SET_LOADING', true)
    await actionService.getActionsData()
      .then(response => {
        commit('SET_ACTIONS', response.data)
        commit('SET_LOADING', false)
        return response.data
      })
  }
}
