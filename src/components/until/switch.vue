<template>
     <!-- <mt-swipe auto=false> -->
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in imgs" :key="index">
            <a :href="item.link" target="view_window"><img :src="item.imgSrc" :alt="item.alt"></a>
        </mt-swipe-item>
        </mt-swipe>
</template>

<script>
export default {
  props: ["imgsUrl"],
  create()
  {
     this.ajax.get(this.mgsUrl)
     then(res=>{
        // this.imgs = res.data.imgs;
     })
     .catch(err=>{

     })
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
    }},
  methods: {

  }
};
</script>
<style lang="less" scoped>
 .mint-swipe {
    max-height: 187px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
</style>

