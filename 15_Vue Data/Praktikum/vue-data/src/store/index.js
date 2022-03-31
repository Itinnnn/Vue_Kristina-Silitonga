// Import Vuex
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import listBerita from "./listBerita";
import detailBerita from "./detailBerita";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["listBerita", "detailBerita"]
});


export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    listBerita: {
      namespaced: true,
      ...listBerita
    },
    detailBerita: {
      namespaced: true,
      ...detailBerita
    }
  }
});
