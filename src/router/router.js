import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home.vue';
import Member from '@/components/member/member.vue';
import ShopCart from '@/components/shopCart/shopCart.vue';
import Search from '@/components/search/search.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: { name: "home" } },//重定向
    { name: "home", path: "/home", component: Home },
    { name: "member", path: "/member", component: Member },
    { name: "shopCart", path: "/shopCart", component: ShopCart },
    { name: "search", path: "/search", component: Search },
  ]
})
