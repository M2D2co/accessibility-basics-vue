<template>
  <main id="todo" class="card todo">
    <section class="todo-list">
      <h2 class="title">Todo List</h2>
    </section>
    <CreateItem></CreateItem>
  </main>
</template>

<script>
import CreateItem from './create-item.vue';

export default {
  name: 'Todo',
  components: {
    CreateItem,
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
</style>
