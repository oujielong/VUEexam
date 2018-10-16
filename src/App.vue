<template>
  <div id="app">
    <!-- 固定头部 -->
    <mt-header class="clearfloat" fixed title="信息管理系统"></mt-header>
    <router-view></router-view>
    <!-- 底部选项栏 -->
    <mt-tabbar fixed v-model="selected" class="bottomTab">
      <mt-tab-item :id="i.id" v-for="i in tabItem" :key="i.id">
          <router-link :to="{name:i.name}" slot="icon"  :class="i.pictureSrc" >
            <mt-badge v-if="i.badge.display" type="error"><span>{{i.badge.mun}}</span>
            </mt-badge>
          </router-link>
          <div style="margin-top:10px">{{i.text}}</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import connect from '@/components/until/connect.js';
import prodTools from '@/components/until/prodTools.js';
export default {
  name: "App",
  data() {
    return {
      selected: "tab1",
      // tabItem,底部选项标签的对象信息
      tabItem: [
        {
          name:"home",
          id: "tab1",
          pictureSrc: "icon iconfont icon-wodezhuye",
          text: "图一",
          picAlt: "图一",
          badge: {
            display: false,
            mun: 10
          }
        },
        {
           name:"member",
          id: "tab2",
          pictureSrc: "icon iconfont icon-wodezhuye",
          text: "图二",
          picAlt: "图二",
          badge: {
            display: false,
            mun: 10
          }
        },
        {
          name:"shopCart",
          id: "tab3",
          pictureSrc: "icon iconfont icon-wodezhuye",
          text: "图三",
          picAlt: "图三",
          badge: {
            display: true,
            mun: prodTools.getCountProds()          
            }
        },
        {
          name:"search",
          id: "tab4",
          pictureSrc: "icon iconfont icon-wodezhuye",
          text: "图四",
          picAlt: "图四",
          badge: {
            display: false,
            mun: 10
          }
        }
      ]
    };
  },
  created() {
    // 注册监听对象
    connect.$on("addShopCart",(res)=>{
      this.tabItem[2].badge.mun +=res;
    });
  },
  methods:{
    
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
/* 覆盖标签的样式 .mint-badge.is-error，确定徽章的位置*/
.bottomTab {
  border-top: 0.2px solid black;
  .mint-badge.is-error {
    position: relative;
    top: -47px;
    left: 13px;
  }
  &.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
  }
  .mint-badge.is-size-normal
  {
    padding:0px;
  }
}
</style>

