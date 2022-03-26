<template>
  <div>
    <h1>Item : {{ item.text }}</h1>
    <router-link to="/">
      <button>Kembali</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
    };
  },
  beforeMount() {
    const newIndex = this.$route.params.index;
    if (localStorage.todos) {
      this.item = JSON.parse(localStorage.todos)[newIndex];
    }
  },
};
</script>

<style scoped>
</style>