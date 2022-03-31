import DaftarBerita from "@/views/DaftarBerita.vue";
import DetailBerita from "@/views/DetailBerita.vue";

export default [
  {
    path: "/",
    name: "DaftarBerita",
    component: DaftarBerita
  },

  {
    path: "/berita/:index",
    name: "DetailBerita",
    component: DetailBerita
  }
];
