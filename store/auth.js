export const state = () => ({
  token: null,
});

export const getters = {
  isAuth: state => Boolean(state.token),
};

export const mutations = {
  setToken: (state, token) => state.token = token,
  clearToken: state => state.token = null,
};

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('mock-token'), 1000);
      });
      dispatch('setToken', token);
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  logout({commit}) {
    commit('clearToken');
  },

  setToken({commit}, token) {
    commit('setToken', token);
  },
};
