const state = () => ({
  detailBerita: {}
});

const mutations = {
  setDetailBerita(state, params) {
    state.detailBerita = params;
  }
};

const actions = {
  setDetailBerita(store, params) {
    store.commit("setDetailBerita", {
      source: {
        id: params.source.id,
        name: params.source.name
      },
      author: params.author,
      content: params.content,
      description: params.description,
      publishedAt: params.publishedAt,
      title: params.title,
      url: params.url,
      urlToImage: params.urlToImage
    });
  }
};

export default {
  state,
  mutations,
  actions
};
