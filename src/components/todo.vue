<template>
  <div id="todo" class="card todo">
    <div class="todo-list" aria-live="polite">
      <div class="title">Todo List</div>
      <div v-if="outstandingTodos.length < 1" class="no-data">
        <img src="../assets/img/todo-no-data.svg">
        <p>No tasks yet. Use to form below to create your first todo item.</p>
      </div>
      <ul v-if="outstandingTodos.length > 0" class="todos">
        <li class="list-item" v-for="(todo, index) in outstandingTodos" v-bind:key="todo.key">
          <label class="label">{{ todo.item }}</label>
          <input
            :name="'completedItem ' + todo.id"
            v-model="outstandingTodos[index].selected"
            v-on:change="onSelect(todo.id)"
            type="checkbox"
          >
        </li>
      </ul>
    </div>
    <div class="create-item">
      <CreateItem></CreateItem>
    </div>
  </div>
</template>

<script>

import CreateItem from './create-item.vue';

export default {
  name: 'Todo',
  components: { CreateItem },
  computed: {
    outstandingTodos() { return this.$store.getters.outstandingTodos; },
  },
  methods: {
    onSelect(id) {
      this.$store.dispatch('updateTodo', id);
    },
  },
};
</script>

<style scoped lang="scss">
  @use '../assets/sass/theme';
  .todo-list {
    padding: theme.$default-padding;
  }
  .todos {
    list-style-type: none;
    padding-left: 0;
  }
  .todo {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;
  }
  .label {
    display: block;
    padding: .51ex 0;
  }
  .create-item {
    position: sticky;
    bottom: 0;
  }
</style>
