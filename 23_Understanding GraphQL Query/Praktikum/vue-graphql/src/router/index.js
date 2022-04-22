import Vue from 'vue'
import Home from '../views/Home.vue'
import Todo from '../views/todo.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'homeVue',
    component: Home
  },
  {
    path: '/todo',
    name: 'todoVue',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'history',
  base:process.env.BASE_URL,
  routes
})

export default router
