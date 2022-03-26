import Vue from "vue";
import VueRouter from "vue-router";

import TodoList from "@/views/TodoList.vue";
import DetailTodo from "@/views/DetailTodo.vue";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: TodoList
    },
    {
      path: "/:index",
      component: DetailTodo
    }
  ]
});
