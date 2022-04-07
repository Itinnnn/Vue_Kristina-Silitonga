import Vue from "vue";
import VueRouter from "vue-router";

import DaftarBerita from "@/views/DaftarBerita.vue";
import DetailBerita from "@/views/DetailBerita.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DaftarBerita",
    component: DaftarBerita
  },
  {
    path: "/:category",
    name: "KategoriBerita"
    // component: NewsList
  },
  {
    path: "/detail/:index",
    name: "DetailBerita",
    component: DetailBerita
  }
];

export default new VueRouter({
  mode: "history",
  base: "/",
  routes
});
