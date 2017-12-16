const state = () => ({
  me: null,
})

/* eslint-disable no-shadow, no-param-reassign */
const mutations = {
  setMe(state, user) {
    state.me = user
  },
  clearMe(state) {
    state.me = null
  },
}
/* eslint-enable no-shadow, no-param-reassign */

const actions = {
  async getMe({ commit }) {
    try {
      const me = await this.$axios.$get('me')

      commit('setMe', me)
    } catch (error) {
      if (error.response.status === 401) { // Not logged in.
        return
      }

      throw error
    }
  },

  async login({ commit }, form) {
    try {
      const me = await this.$axios.$post('user/login', form)

      commit('setMe', me)
    } catch (error) {
      throw error
    }
  },

  async logout({ commit }) {
    try {
      await this.$axios.$delete('me')

      commit('clearMe')
    } catch (error) {
      throw error
    }
  },
}

export { state, mutations, actions }
