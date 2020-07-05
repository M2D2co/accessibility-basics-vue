import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    outstandingTodos: (state) => state.todos.filter((todo) => !todo.completed),
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
  },
  mutations: {
    updateList(state, todos) { state.todos = [...todos || []]; },
  },
  actions: {
    initialize(context) {
      Api.todos.get().then((list) => {
        context.commit('updateList', list);
      });
    },
    createTodo(context, todo) {
      Api.todos.create(todo).then((list) => {
        context.commit('updateList', list);
      });
    },
    updateTodo(context, id) {
      Api.todos.update(id).then((list) => {
        context.commit('updateList', list);
      });
    },
    deleteTodo(context, id) {
      Api.todos.remove(id).then((list) => {
        context.commit('updateList', list);
      });
    },
  },
});
export default store;
