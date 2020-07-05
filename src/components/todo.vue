<template>
  <main id="todo" class="card todo">
    <section class="todo-list">
      <h2 class="title">Todo List</h2>
      <ul>
        <li v-for="(todo, index) in outstandingTodos" v-bind:key="todo.key">
          <label>
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
  .todo {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .todo-list {
    padding: theme.$default-padding;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  label {
    display: block;
    padding: .51ex 0;
    cursor: pointer;
  }
  .create-item {
    position: sticky;
    bottom: 0;
  }
</style>
