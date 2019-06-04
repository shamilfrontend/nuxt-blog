export const actions = {
  // main
  async fetchPosts({commit}) {
    try {
      return await this.$axios.$get('/api/post/');
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async fetchPostsById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`);
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async addView({commit}, {views, _id}) {
    try {
      await this.$axios.$put(`/api/post/add/view/${_id}`, {views});
    } catch(e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  // admin
  async getAnalytics({commit}) {
    try {
      return await this.$axios.$get('/api/post/admin/get/analytics');
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async fetchAdminPosts({commit}) {
    try {
      return await this.$axios.$get('/api/post/admin/');
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async fetchAdminPostById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`);
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async create({commit, dispatch}, {title, text, image}) {
    try {
      const formData = new FormData();

      formData.append('title', title);
      formData.append('text', text);
      formData.append('image', image, image.name);

      return await this.$axios.$post('/api/post/admin/', formData)
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`);
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async update({commit}, {id, text}) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, {text});
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
};
