<template>
  <main id="todo" class="card todo">
    <section class="todo-list" aria-live="polite">
      <h2 class="title">Todo List</h2>
      <div v-if="outstandingTodos.length < 1" class="no-data">
        <img src="../assets/img/todo-no-data.svg" alt="">
        <p>No tasks yet. Use to form below to create your first todo item.</p>
      </div>
      <ul v-if="outstandingTodos.length > 0" class="todos">
        <li v-for="(todo, index) in outstandingTodos" v-bind:key="todo.key">
          <label class="label">
            <input
              :name="'completedItem ' + todo.id"
              v-model="outstandingTodos[index].selected"
              v-on:change="onSelect(todo.id)"
              type="checkbox"
            >
            {{ todo.item }}
          </label>
        </li>
      </ul>
    </section>
    <div class="create-item">
      <CreateItem></CreateItem>
    </div>
  </main>
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
  .label {
    display: block;
    padding: .51ex 0;
    cursor: pointer;
  }
  .create-item {
    position: sticky;
    bottom: 0;
  }
</style>
