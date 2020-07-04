<template>
  <form class="form">
    <label class="label">Todo Item:</label>
    <input type="text" placeholder="I need to...">
    <button type="submit" aria-label="add item to todo list">
      <img src="../assets/img/add.svg" alt="">
    </button>
  </form>
</template>

<script>
export default {
  name: 'CreateItem',
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
