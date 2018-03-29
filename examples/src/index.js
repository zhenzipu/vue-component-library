// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router.config';
// import vui from '../../src/index.js';
import vui from 'personal-components-library';
import 'packages/vui-css/src/index.css'
// iview组件
import iView from 'iview'

Vue.use(iView)
// 完整引用
Vue.use(vui);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
