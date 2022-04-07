const state = () => ({
    detailBerita: {}
  });
  
  const mutations = {
    setDetailBerita(state, params) {
      state.detailBerita = params;
    }
  };
  
  const actions = {
    getBerita(store, payload) {
      store.commit("setDetailBerita", payload);
    }
  };
  
  export default {
    state,
    mutations,
    actions
  };
  