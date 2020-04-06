import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import {Button,Select} from 'element-ui';

import service from './utils/https';
import urls from './utils/urls';

Vue.use(Button);
Vue.use(Select);

//把请求和地址挂载到Vue的prototype上
Vue.prototype.$https = service;
Vue.prototype.$urls = urls;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
