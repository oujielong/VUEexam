<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <mt-cell v-for="x in newList"  :key="x.id" :to="{name:'news.detail',query:{id:x.id}}" is-link class="space">
            <div slot="title" class="newTitle container">
                    <div class="row">
                        <div  class="col-xs-2 col-sm-2"><img class="mui-pull-left clearfloat" :src="x.imgUrl" width="50" height="50"></div>
                        <div class="col-xs-10 col-sm-10"><span class="nowarp">{{x.title}}</span></div>
                    </div>
                    <div class="row">
                         <div  class="col-xs-2 col-sm-2"></div>
                         <div class="col-xs-4 col-sm-4 clickColor">点击数:{{x.click}}</div>
                         <div class="col-xs-6 col-sm-6 clickColor">时间{{x.addTime}}</div>
                    </div> 
            </div>
        </mt-cell>
    </div>
</template>

<script>
export default {
  data() {
    return {
        barInfo:{title:"新闻列表"},
        newList:[
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
            {newId:"1",title:"标题1",addTime:"2017-02-09",click:0,imgUrl:"../../../static/picture/greep.png",abstract:"摘要信息。。。。"},
        ],
    }},

};
</script>
<style lang="less" scoped>
.appTrainBody {
  height: calc(100% - 60px);
  display: block;
  padding-top: 40px;
  background-color: deepskyblue;
}
.mui-pull-left
{
    float: left;
}
.nowarp
{   
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.space
{
    padding-bottom:  8px;
    background-color: aliceblue;
}
.clickColor
{
    color:cornflowerblue;
}
</style>

