<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <div class="container">
            <div class="row goodsBorder">
            </div>
            <div class="row goodsBorder">
            </div>
            <div class="row goodsBorder">
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
        barInfo:{title:"商品详情"},
        goodsInfo:[
        ],

    }},
    methods:{
        loadBottom(){
            debugger;
            this.getGoodsListByPage(true);
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

