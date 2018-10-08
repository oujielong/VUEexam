<template>
  <div class="appTrainBody">
    <!-- <mt-swipe auto=false> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <a :href="item.link" target="view_window"><img :src="item.imgSrc" :alt="item.alt"></a>
      </mt-swipe-item>
    </mt-swipe>
  
    <div class="container-fluid section">
      <div class="row">
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <!-- <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i> -->
            <!-- 也许需要使用图片置换 -->
            <i class="gridBg gridformat  clearfloat" slot="icon"></i>
            <span>九宫格一</span>
          </a>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格二</span>
          </a>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格三</span>
          </a>
        </div>
  
      </div>
      <div class="row">
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格四</span>
          </a>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格五</span>
          </a>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格六</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$ajax
        .get("")
        .then(res => {
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    data() {
      return {
        imgs: [
          // 获取本地资源来替代需要从服务器上获取的
          {
            alt: "图片1",
            imgSrc: require("@/assets/logo.png"),
            link: "http://www.baidu.com"
          },
          {
            alt: "图片2",
            imgSrc: require("@/assets/logo.png"),
            link: "http://www.baidu.com"
          },
          {
            alt: "图片3",
            imgSrc: require("@/assets/logo.png"),
            link: "http://www.baidu.com"
          }
        ] //轮播图的图片信息
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @sectionMargin: 25px;
      .mint-swipe {
        max-height: 187px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    .appTrainBody {
      height: 100%;
      display: block;
      padding-top: 40px;
    }
  .row+.row {
    margin-top: @sectionMargin;
  }
  .section {
    margin-top: @sectionMargin;
  }
  // 九宫格使用图片置换
  .row {
    div {
      a {
        text-align: -webkit-center;
        display: block;
        .gridBg {
          background-image: url("../../../static/picture/greep.png");
          background-repeat: round;
        }
        .gridformat {
          display: block;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
</style>

