import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: { name: "home" } },//重定向
    { name: "home", path: "/home", component: Home },
  ]
})
