<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
    <Resources></Resources>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Todo from './components/todo.vue';
import Resources from './components/resources.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Header, Todo, Resources, Footer,
  },
};
</script>

<style lang="scss">
  @use './assets/sass/theme';
  @media(min-width: theme.$small) {
    #app {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-rows: max-content auto max-content;
      grid-template-areas:
        "header header"
        "todo resources"
        "footer footer"
      ;
      height: 100vh;
      overflow: hidden;
      grid-gap: 0 1rem;
      padding: 0 1rem;
    }
    #header { grid-area: header; }
    #todo {
      grid-area: todo;
      overflow-y: auto;
    }
    #resources {
      grid-area: resources;
      overflow-y: auto;
    }
    #footer { grid-area: footer; }
  }
</style>

<style lang="scss" scoped>
  img { height: 1.5ex; }
</style>
