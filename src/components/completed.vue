<template>
  <section id="completed" class="card todo" aria-live="polite">
    <section class="todo-list">
      <h2 class="title">Completed List</h2>
      <div v-if="completedTodos.length < 1" class="no-data">
        <img src="../assets/img/completed-no-data.svg" alt="">
        <p>No completed tasks yet. Check a task in the todo list above to mark it as complete.</p>
      </div>
      <ul v-if="completedTodos.length > 0">
        <li v-for="(todo, index) in completedTodos" v-bind:key="todo.key">
          <label>
            <input
              :name="'listItem' + todo.id"
              type="checkbox"
              checked
              v-model="completedTodos[index].selected"
              v-on:change="onSelect(todo.id)"
          >
            {{ todo.item }}
          </label>
          <button
            type="button"
            class="delete"
            aria-label="delete"
            :aria-describedby="'listItem' + todo.id"
            v-on:click="onDelete(todo.id)"
          >
          </button>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>

export default {
  name: 'Completed',
  computed: {
    completedTodos() { return this.$store.getters.completedTodos; },
  },
  methods: {
    onSelect(id) { this.$store.dispatch('updateTodo', id); },
    onDelete(id) { this.$store.dispatch('deleteTodo', id); },
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
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label {
    display: block;
    padding: .51ex 0;
    cursor: pointer;
  }
  .delete {
    background-color: none;
    background-image: url('../assets/img/cancel.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    border: solid 1px theme.$grey;
    border-radius: 50%;
    display: inline-block;
    height: 1.125rem;
    margin-left: .5rem;
    padding: 0;
    width: 1.125rem;
    &:hover,
    &:focus {
      background-image: url('../assets/img/cancel-hover.svg');
    }
  }
</style>
