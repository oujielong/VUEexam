<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <div class="container">
            <div class="row">
                <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <div class="col-xs-6 col-sm-6" v-for="good in goodsList" :key="good.id">
                        <router-link :to="{name:'goods.detail',params:{id:good.id}}" class="goodsBorder aToBlock"> 
                            <img :src="good.img_url" alt="图片" height="260" width="100%">
                            <!-- 图片下面的描述文字 -->
                            <div class="onPicture">
                                <div style="color:black" class="textNowrap">{{good.title}}</div>
                                <div class="priceAndCount">
                                    <div class="clearfloat"><span style="float:left">{{good.sell_price}}</span><span  style="float:right">%{{good.market_price}}</span></div>
                                    <div><span style="float:left">热卖中</span><span style="float:right">剩下{{good.stock}}件</span></div>
                                </div>
                            </div>
                        </router-link>        
                    </div>
                </mt-loadmore>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created()
    {
        this.getGoodsListByPage(false);
    },
  data() {
    return {
        barInfo:{title:"商品列表"},
        goodsList:[
            {id:1,title:"标题1标题1标题1标题1标题1标题1标题1",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            {id:2,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            {id:3,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            {id:4,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            {id:5,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            {id:6,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
        ],
        allLoaded:false,
        pageIndex:1,

    }},
    methods:{
        loadBottom(){
            debugger;
            this.getGoodsListByPage(true);
        },
        getGoodsListByPage(more)
        {
             let this_ = this;
            if(more == true)
                {
                     
                     let goodsLists=[
                        {id:7,title:"标题1标题1标题1标题1标题1标题1标题1",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
                        {id:8,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
                        {id:9,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
                        {id:10,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
                        {id:11,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
                        {id:12,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
                         ]
                    if(goodsLists.length !=6)
                     {
                        this_.allLoaded = true;
                     }
                    this_.$refs.loadmore.onBottomLoaded();
                    this.goodsList =   this.goodsList.concat(goodsLists);
                    
                }
                else
                {
                    //this.goodsList = res.data.goodsList;
                }
            // let this_ = this;
            // this.$ajax.get("/goods/goodList?pageIndex="+this.page)
            // .then(res => {
            //     if(more == true)
            //     {
            //          if(res.data.goodsList.length !=10)
            //          {
            //             this_.allLoaded = true;
            //          }
            //          let goodsLists=[
            //             {id:7,title:"标题1标题1标题1标题1标题1标题1标题1",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            //             {id:8,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            //             {id:9,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            //             {id:10,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            //             {id:11,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            //             {id:12,title:"标题1---------------",add_time:"",outline:"",click:0,img_url:"../../../static/picture/greep.png",sell_price:"2010",market_price:"2200",stock:"66"},
            //              ]
            //           this.goodsList =   this.goodsList.concat(goodsLists);
            //     }
            //     else
            //     {
            //         this.goodsList = res.data.goodsList;
            //     }
                
            // })
            // .catch(err => {
            //     console.log("获取信息失败");
            // });
        }
        
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
.goodsBorder
{
    border: 1px solid gainsboro;
    margin-bottom: 5px;
}
.onPicture
{
    height: 80px;
    margin: -80px 0px 0px 0px;
    position: relative;
}
.priceAndCount
{
    position: absolute;
    bottom: 0px;
    background-color: rgb(223, 219, 219);
    opacity: 1.3;
    width: 100%;
    span+span{
        margin-bottom: 5px;
    }
}
.aToBlock
{
    display: block
}

</style>

