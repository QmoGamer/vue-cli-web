import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './api/axios';
import i18n from './lang/i18n';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.scss';
import '@/assets/css/common.scss';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
