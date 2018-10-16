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
import '../static/resetStyle/resectStyle.css';
//引入修正全局的css（重置CSS）,由于bootstrap 本来已经引入了normalize.css，直接引用bootstrap就可以了
//  import "bootstrap"
//axios
import Axios from 'axios';//挂載原型
Vue.prototype.$ajax = Axios;
//全局配置axios
// Axios.defaults.baseURL = 'localhost:8080/website/';
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error);
  return Promise.reject(error);
})
// Axios:添加响应拦截器
Axios.interceptors.response.use(function (response) {
  Indicator.close();
  return response;
}, function (error) {
  return Promise.reject(error);
});


//引入日期处理，第三方组件,过滤器
import Moment from 'Moment';
Vue.filter('converData',function(value){
  return Moment(value).format('YYYY-MM-DD');
});
//引入自定义的组建
import navBar from './components/until/navbar.vue';
import comment from './components/until/comment.vue';
import myswitch from './components/until/switch.vue';
Vue.component("navBar",navBar);
Vue.component("comment",comment);
Vue.component("myswitch",myswitch);

// 图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)


Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
