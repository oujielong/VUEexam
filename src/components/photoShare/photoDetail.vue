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
        <div class="container">
            <!--评论标题 -->
            <div class="row">
                <div class="col-xs-3 col-sm-3">评论消息</div>
    
            </div>
    
            <!-- 评论发表框 -->
    
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <mt-field class="commentForm" placeholder="introduction" type="textarea" rows="3" v-model="form.introduction"></mt-field>
                </div>
            </div>
            <!-- 操作按钮 -->
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-xs-offset-8">
                    <mt-button type="primary" size="small" @click="comfimConment">提交评论</mt-button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-sm-3">
                    评论列表
                </div>
                <div class="col-xs-3 col-sm-3 col-xs-offset-6">
                    {{comment.total}}条评论
                </div>
            </div>
            <div class="row">
                <ul class="col-sm-12 col-xs-12">
                    <li class="row" v-for="com in comment.commentList" :key="com.id">
                        <div class="col-xs-3">{{com.userName}}</div>
                        <div class="col-xs-9 textNowrap">{{com.content}}</div>
                    </li>
                    <li class="row">
                        <div class="col-xs-12 col-sm-12">
                            <mt-button type="default" style="height:26px;padding:0px;width:40px" icon="more"  @click="loadFirstcomment"></mt-button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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

    // 获取第一波评论，评论加载是使用类似翻页的机制，第一次加载评论使用默认值1，后面加载更多的时候就往上加
    //this.loadFirstcomment();


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

      comment: {
        total: "10",
        commentList: [
          {id: "1",userName: "用户1",content: "你好世界",commentTime: "2013-02-09"},
          {id: "2",userName: "用户2",content: "你好世界",commentTime: "2013-02-09" },
          {id: "3",userName: "用户3",content: "你好世界",commentTime: "2013-02-09"},
          {id: "4",userName: "用户4",content: "你好世界",commentTime: "2013-02-09"},
        ]
      },
      form: {
        introduction: "" //评论内容
      },
      pageIndex:1,//用于加载评论更多的时候
      cid:this.$route.params.id,
    };
  },

  methods: {
    //   评论提交方法
    comfimConment() {},

    loadFirstcomment()//加载某个图文的第一页评论
    {
        debugger;
           this.comment.commentList = this.comment.commentList.concat(this.comment.commentList);
        // this.$ajax.get("photoDetail/getComment/" +this.cid+"?pageIndex="+(this.pageIndex++))//restful风格路径
        // .then(res => {
        //     this.comment.commentList.concat =  this.comment.commentList;
        // })
        // .catch(er => {
        //     this.comment.commentList.concat =  this.comment.commentList;
        // });
    },
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

.commentForm {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
}
.row + .row {
  margin-bottom: 5px;
}
.clickColor {
  color: cornflowerblue;
}
.photo-desc {
  margin-bottom: 2em;
}
</style>

