import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import {  
  Dialog,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Menu,
  MenuItem,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Timeline,
  TimelineItem,
  Card,
  Tag} from 'element-ui';

import service from './utils/https';
import urls from './utils/urls';
// 按需引用 element 组件
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Message.name, Message);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Card.name, Card);
Vue.component(Tag.name, Tag);
Vue.use(Loading.directive);



Vue.config.productionTip = false;
Vue.prototype.$message = Message;
//把请求和地址挂载到Vue的prototype上
Vue.prototype.$https = service;
Vue.prototype.$urls = urls;



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
