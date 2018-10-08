<template>
  <div id="app">
    <!-- 固定头部 -->
    <mt-header class="clearfloat" fixed title="信息管理系统"></mt-header>

      <router-view></router-view>
    <!-- 底部选项栏 -->
    <mt-tabbar fixed v-model="selected" class="bottomTab">
      <mt-tab-item :id="i.id" v-for="i in tabItem" :key="i.id">
          <i :class="i.pictureSrc" slot="icon" alt="i.picAlt"><mt-badge v-if="i.badge.display" type="error">{{i.badge.mun}}</mt-badge></i>
        <span>{{i.text}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "tab1",
      // tabItem,底部选项标签的对象信息
      tabItem: [
        {
          id: "tab1",
          pictureSrc: "icon iconfont icon-wodezhuye",
          text: "图一",
          picAlt: "图一",
          badge: {
            display: true,
            mun: 10
          }
        },
        {
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
          id: "tab3",
          pictureSrc: "icon iconfont icon-wodezhuye",
          text: "图三",
          picAlt: "图三",
          badge: {
            display: false,
            mun: 10
          }
        },
        {
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
  created() {}
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
    top: -37px;
    left: 13px;
  }
  &.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
  }
}
</style>
<style>

</style>

