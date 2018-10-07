// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/router.js';
//UI組件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
//引入阿里图标库
import '../static/font_icon/iconfont.css';
//axios
import Axios from 'axios';//挂載原型
Vue.prototype.$ajax = Axios;
//全局配置axios

Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
