// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import iView from 'iview';
import {
  Card,
  Button,
  Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Modal,
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
  Upload,
 } from 'iview' // eslint-disable-line
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import createStore from './store';

// console.log(iView); // eslint-disable-line

Vue.config.productionTip = false;
Vue.component('Button', Button);
Vue.component('Card', Card);
Vue.component('Icon', Icon);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);
Vue.component('Modal', Modal);
Vue.component('Table', Table);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Input', Input);
Vue.component('Upload', Upload);

const store = createStore();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />',
});
