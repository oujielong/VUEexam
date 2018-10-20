<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <div class="news-title">
            <p v-text="newsDetail.title"></p>
            <div>
                <span>{{newsDetail.click}}次点击</span>
                <span>分类：{{newsDetail.classify}}</span>
                <span>时间：{{newsDetail.addTime}}</span>
            </div>
        </div>
        <div class="new-content" v-html="newsDetail.content"></div>
    </div>
</template>

<script>
export default {
    created()
    {
        let id=this.$route.query.id;
        console.log(id);
        // this.$ajax.get(''+id)
        // .then(res=>{

        // })
        // .catch(er=>{
        // })
    },
     beforeRouteEnter (to, from, next) {
            let title="";
            if(from.name == "news.list")
            {
                title="新闻详情";

            }
            if(from.name == "goods.detail")
            {
                 title="商品图文详情";
            }
            next(vm => {
                vm.barInfo.title=title;
            });
        },
  data() {
    return {
        barInfo:{title:"新闻详情"},
        newsDetail:{
            title:"标题当",
            click:"10",
            classify:"民生消息",
            addTime:"2019-09-09",
            content:`<p class="otitle">
            （原标题：贵州省委常委会召开会议 通报中央纪委关于给予王晓光开除党籍处分的决定 孙志刚主持并讲话）</p>
             <p>微信公众号“贵州日报”10月8日消息，10月8日，贵州省委常委会召开会议，通报中央纪委关于给予王晓光开除
             党籍处分的决定，听取十二届省委第三轮巡视工作情况汇报。</p><p>贵州省委书记、省人大常委会主任孙志刚主
             持会议并讲话。省委常委，省人大常委会、省政府、省政协有关负责同志参加会议。</p>`
        },
    }},
    methods:{
       
    }

};
</script>
<style lang="less" scoped>
.appTrainBody {
  height: calc(100% - 60px);
  display: block;
  padding-top: 40px;

}
.news-title{
   padding: 10px 0px;
   p{
       color:red;
   }

}
.clickColor
{
    color:cornflowerblue;
}
</style>

