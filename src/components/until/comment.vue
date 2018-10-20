<template>
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
</template>

<script>
export default {
  props: ["cid"],
  created() {
    // 获取第一波评论，评论加载是使用类似翻页的机制，第一次加载评论使用默认值1，后面加载更多的时候就往上加
    //this.loadFirstcomment();
  },
  data() {
    return {
      comment: {
        total: "10",
        commentList: [
          {
            id: "1",
            userName: "用户1",
            content: "你好世界",
            commentTime: "2013-02-09"
          },
          {
            id: "2",
            userName: "用户2",
            content: "你好世界",
            commentTime: "2013-02-09"
          },
          {
            id: "3",
            userName: "用户3",
            content: "你好世界",
            commentTime: "2013-02-09"
          },
          {
            id: "4",
            userName: "用户4",
            content: "你好世界",
            commentTime: "2013-02-09"
          }
        ]
      },
      form: {
        introduction: "" //评论内容
      },
      pageIndex: 1, //用于加载评论更多的时候
    };
  },
  methods: {
    comfimConment() {
      this.$ajax
        .post("photoDetail/comformComment/" + this.cid, {
          params: {
            userId: "123",
            comment: this.form.introduction
          }
        }) //restful风格路径
        .then(res => {
          // 重新加载评论数据
          this.pageIndex = 1;
          this.loadFirstcomment();
        })
        .catch(er => {
          // this.comment.commentList.concat = this.comment.commentList;
          this.comment.commentList = this.comment.commentList.concat(this.comment.commentList);
        });
    },

    loadFirstcomment() { //加载某个图文的第一页评论
        debugger;
        this.comment.commentList = this.comment.commentList.concat(this.comment.commentList);
      // this.$ajax.get("photoDetail/getComment/" +this.cid+"?pageIndex="+(this.pageIndex++))//restful风格路径
      // .then(res => {
      //     this.comment.commentList.concat =  this.comment.commentList;
      // })
      // .catch(er => {
      //     this.comment.commentList.concat =  this.comment.commentList;
      // });
    }
  }
};
</script>
<style lang="less" scoped>
.commentForm {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
}
.row + .row {
  margin-bottom: 5px;
}
</style>

