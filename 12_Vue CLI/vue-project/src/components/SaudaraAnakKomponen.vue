<template>
  <button @click="lakukanPenjumlahan">Lakukan Penambahan</button>
</template>

<script>
export default {
  methods: {
    lakukanPenjumlahan() {
      this.$emit("jumlahin");
    },
  },
};
</script>