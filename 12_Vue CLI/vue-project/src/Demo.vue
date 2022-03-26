<template>
  <div id="app">
    <input type="number" v-model.number="variabelSatu" />
    <input type="number" v-model.number="variabelDua" />
    <SaudaraAnakKomponen @jumlahin="lakukanPenjumlahan" />
    <AnakKomponen :hasilPenjumlahan="hasil" />
  </div>
</template>

<script>
import AnakKomponen from "@/components/AnakKomponen.vue";
import SaudaraAnakKomponen from "@/components/SaudaraAnakKomponen.vue";
import { penambahan } from "@/utils";

export default {
  name: "App",
  components: {
    AnakKomponen,
    SaudaraAnakKomponen,
  },
  data() {
    return {
      variabelSatu: 0,
      variabelDua: 0,
      hasil: 0,
    };
  },
  methods: {
    lakukanPenjumlahan() {
      this.hasil = penambahan(this.variabelSatu, this.variabelDua);
    },
    tunjukkanAlert() {
      alert("Halo Kawan!");
    },
  },
  mounted() {
    setTimeout(() => {
      this.tunjukkanAlert();
    }, 2000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
