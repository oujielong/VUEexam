<template>
    <div class="appTrainBody">
    
        <nav-bar :barInfo="barInfo"></nav-bar>
    
        <div class="news-title">
    
            <p v-text="photoDetail.title"></p>
    
            <div>
                <span>{{photoDetail.click}}次点击</span>
                <span>时间：{{photoDetail.addTime}}</span>
                <span>分类：{{photoDetail.classify}}</span>
            </div>
        </div>
        <div class="photo-content container">
            <ul class="row">
                <li class="col-xs-4 col-sm-4" v-for="(img,index) in imgs" :key="index">
                    <img class="preview-img" :src="img.src" height="80" @click="$preview.open(index, imgs)">
                </li>
            </ul>
    
        </div>
    
        <div class="photo-desc">
            <p v-html="photoDetail.content">
            </p>
        </div>
        <!-- 评论信息 -->
        <comment :cid="pid"> </comment>
    </div>
</template>

<script>
export default {
  created() {
    let pid = this.$route.params.id;
    // //获取数据名称
    // this.$ajax
    //   .get("photoDetail/getInfo/" + pid)
    //   .then(res => {})
    //   .catch(er => {});

    // //获取图片缩略图
    // this.$ajax
    //   .get("photoDetail/getPictureResume/" + pid)
    //   .then(res => {})
    //   .catch(er => {});
  },
  data() {
    return {
      barInfo: {
        title: "图文详情"
      },
      photoDetail: {
        title: "标题当",
        click: "10",
        classify: "民生消息",
        addTime: "2019-09-09",
        content: `<p>（原标题：贵州省委常委会召开会议 通报中央纪委关于给予王晓光开除党籍处分的决定 孙志刚主持并讲话）</p>`
      },
      imgs: [
        {src: "../../../static/picture/greep.png", w: 400,h: 400},
        {src: "../../../static/picture/greep.png", w: 400,h: 400},
        {src: "../../../static/picture/greep.png", w: 400,h: 400},
        {src: "../../../static/picture/greep.png", w: 400,h: 400},
        {src: "../../../static/picture/greep.png", w: 400,h: 400},
        {src: "../../../static/picture/greep.png", w: 400,h: 400},
      ],
      pid:this.$route.params.id,
    };
  },

  methods: {
   
  }
};
</script>
<style lang="less" scoped>
.appTrainBody {
  height: calc(100% - 60px);
  display: block;
  padding-top: 40px;
  overflow: auto;
}
.clickColor {
  color: cornflowerblue;
}
.photo-desc {
  margin-bottom: 2em;
}
</style>

