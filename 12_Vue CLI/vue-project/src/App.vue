<template>
  <div id="app">
    <ol>
      <div v-for="(item, index) in items" :key="index">
         <li class="item-list">
          <div v-if="item.edit">
            {{ index + 1 }}. <input type="text" v-model="edit" />
          </div>
          <div v-else>
            <div
              style="
                width: 200px;
                padding: 5px 0px;
                overflow: hidden;
                white-space: nowrap;
              "
            >
              {{ index + 1 }}.
              <span class="input-item" @click="showEdit(index)">
                {{ item.item }}
              </span>
            </div>
          </div>
          <div>
          <button @click="editTodo(index)">Edit</button>
          <button @click="deleteTodo(index)">Delete</button>
        </div>
         </li>
      </div>
    </ol>
    <input type="text" v-model="todo" />
    <button type="button" v-on:click="tambah(todo)">Tambahkan</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
      todo: "",
      edit: "",
    };
  },
  methods: {
    tambah(item) {
      if (item.trim() !== "") {
        this.items.push({ item: item, edit:false });
      }
        this.todo = "";
    },
    showEdit(index) {
      this.hideEdit();
      this.items[index].edit = !this.items[index].edit;
      this.edit = this.items[index].item;
    },
    editTodo(index) {
      this.items[index].item = this.edit;
      this.hideEdit();
    },
    hideEdit() {
      return this.items.map((item) => {
        return (item.edit = false);
      });
    },
    deleteTodo(index) {
      if (index === 0) {
        this.items.splice(index, 1);
      } else {
        this.items.splice(index, index);
      }
    },
  },
};
</script>

<style>
.item-list {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.item-list input {
  padding: 4px;
}

.input-item {
  padding: 5px;
}

.input-item:hover {
  padding: 4px;
  border: 1px solid black;
}
</style>