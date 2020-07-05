import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Api from './api';

Api.initialize();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
