<template>
  <div>
    <router-link to="/">
      <button>Kembali</button>
    </router-link>

     <h1>Menjadi Front End Dev</h1>
     <h4>{{ item.text }} </h4>
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
      this.item = JSON.parse(localStorage.todos)[newIndex];
    }
};
</script>

<style scoped>
</style>