// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../build/css/mdb.css';
// 引入iconfont样式表
import './assets/iconfont/iconfont.css'
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store.js'
import Vue2TouchEvents from 'vue2-touch-events';
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(Vue2TouchEvents);
Vue.use(LoadScript);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
