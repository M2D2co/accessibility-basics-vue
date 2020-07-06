<template>
  <div id="completed" class="card todo">
    <div class="todo-list">
      <div class="title">Completed List</div>
      <div v-if="completedTodos.length < 1" class="no-data">
        <img src="../assets/img/completed-no-data.svg">
        <p>No completed tasks yet. Check a task in the todo list above to mark it as complete.</p>
      </div>
      <div v-if="completedTodos.length > 0" class="completed-list">
        <div class="list-item" v-for="(todo, index) in completedTodos" v-bind:key="todo.key">
          <input
              :name="'listItem' + todo.id"
              type="checkbox"
              checked
              v-model="completedTodos[index].selected"
              v-on:change="onSelect(todo.id)"
          >
          <label class="label">{{ todo.item }}</label>
          <div
            class="button delete"
            v-on:click="onDelete(todo.id)"
          ></div>
        </div>
      </div>
    </div>
  </div>
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
  .completed-list {
    list-style-type: none;
    padding-left: 0;
    margin: 1em 0;
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input + label { margin-right: auto; }
  }
  .label {
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
