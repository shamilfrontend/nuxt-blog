export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async fetchAdminPosts({commit, dispatch}) {
    try {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              title: 'Post',
              date: new Date(),
              views: 22,
              comments: [1, 2],
              _id: Math.random(),
            },
            {
              title: 'Ливерпуль победи в Лиге чемпионов',
              date: new Date(),
              views: 87,
              comments: [1, 2],
              _id: Math.random(),
            },
          ])
        }, 1000);
      })
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
};
