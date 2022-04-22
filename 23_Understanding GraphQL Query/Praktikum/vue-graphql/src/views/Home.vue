<template>
  <div id="app">
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
      <h1>Halaman Home</h1>
      <div v-for="todos in todo" :key="todos.id">
          <span> ID : {{todos.id}}</span>
          <span> Todo : {{todos.todo}}</span>
          <span> Status : {{ todos.status }}</span>
      </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'homeVue',
  data() {
      return{
        
      }
  },
apollo: {
  todo: gql`
  query MyQuery {
  todo {
    id
    todo
    status
  }
}`,
},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>