const posts = [
  {
    title: 'Тимати и его дети подрались в клубе',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id1',
  },
  {
    title: 'Ливерпуль победи в Лиге чемпионов',
    date: new Date(),
    views: 87,
    comments: [1, 2],
    _id: 'id2',
  },
];

export const actions = {
  async fetchAdminPosts({commit}) {
    try {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(posts);
        }, 700);
      });
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async fetchAdminPostById({commit}, id) {
    try {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(posts.find(post => post._id === id));
        }, 700);
      });
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
      console.log('formData', formData);

      return await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async remove({commit}, id) {
    try {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },

  async update({commit}, {id, text}) {
    try {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
};
