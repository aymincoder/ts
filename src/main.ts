import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import {Button,Select} from 'element-ui'

Vue.use(Button);
Vue.use(Select);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
