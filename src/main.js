import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

import { Button, Table, Input } from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Input', Input);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
