export const actions = {
  async create({commit}, formData) {
    try {
      return await this.$axios.$post('/api/comment', formData);
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  }
};
