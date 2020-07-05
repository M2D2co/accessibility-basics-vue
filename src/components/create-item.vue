<template>
  <form
    class="form"
    @submit="onSubmit"
  >
    <label for="item" class="label">Todo Item:</label>
    <input
      name="item"
      id="item"
      type="text"
      placeholder="I need to.."
      v-model="item"
      max-length="500"
      required
      autocomplete="todo"
    >
    <button type="submit" aria-label="add item to todo list">
      <img src="../assets/img/add.svg" alt="">
    </button>
  </form>
</template>

<script>
export default {
  name: 'CreateItem',
  data() {
    return {
      item: '',
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('createTodo', this.item);
      this.item = '';
    },
  },
};
</script>

<style scoped lang="scss">
  @use '../assets/sass/theme';
  .form {
    background: theme.$primary;
    padding: theme.$default-padding;
    display: grid;
    grid-template-columns: auto max-content;
    grid-column-gap: 1ch;
  }
  .label {
    color: white;
    grid-column: 1 / span 2;
  }
</style>
