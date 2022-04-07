import axios from "axios";

const state = () => ({
  listBerita: []
});

const mutations = {
  setListBerita(state, params) {
    state.listBerita = params;
  }
};

const actions = {
  async fetchBerita(store, payload) {
    await store.commit("setListBerita", []);
    await axios
      .get("https://newsapi.org/v2/top-headlines", { params: payload.params })
      .then((response) =>
        store.commit("setListBerita", response.data.articles)
      );
  }
};

export default {
  state,
  mutations,
  actions
};
