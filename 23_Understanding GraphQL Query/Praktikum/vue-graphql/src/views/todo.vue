<template>
  <div>
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form @submit.prevent="OnSubmit">
        <input  v-model = "newTodo" name="todo" placeholder="todo-name">
          <button>Add New Todo</button>
      </form>
    </div>
    <div class="todo-list">
    <ul>
    <li v-for="(todo,index) in Alltodos" :key="index" class="todo">
        <div class="content">
          <h3>{{todo}}</h3>
        </div>
        <div class="content">
          <i class="far fa-times-circle fa-2x" @click="status(index)"></i>
        </div>
      </li>
  </ul>
</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name : 'todoVue',
  data() {
    return{
      newTodo: "",
      Alltodos: [],
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

      methods: {
        OnSubmit() {
          this.Alltodos.push(this.newTodo)
          this.newTodo= ""
        },
        status(index) {
          this.Alltodos.splice(index,1)
        },
      },
}

 
</script>



