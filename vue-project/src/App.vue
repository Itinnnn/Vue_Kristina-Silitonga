<template>
  <div id="app">
    <ol>
      <div v-for="(item, index) in items" :key="index">
        <li>
          {{ item }}
        </li>
      </div>
    </ol>
    <input type="text" v-model="todo" />
    <button type="button" v-on:click="tambah(todo)">Tambahkan</button>

    <div v-if="items.length >= 4">
      Hebat!
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
      todo: "",
    };
  },
  methods: {
    tambah(item) {
      if (item.trim() !== "") {
        this.items.push(item);
      }
    },
  },
};
</script>

<style>
</style>