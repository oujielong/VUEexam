<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <div class="container">
            <div class="row goodsBorder higher">
                <!-- <img src="../../../static/picture/greep.png" alt="图片" height="180" width="97%"> -->
                    <myswitch :imgsUrl="url"></myswitch>
            </div>

            <div class="row goodsBorder">
                <div class="col-xs-12 col-sm-12">
                    {{goodsInfo.title}}
                </div>

                <div class="col-xs-12 col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 marginBottom">
                            <div class="row">
                                <div class="col-xs-3 col-sm-3">市场价</div>
                                <div class="col-xs-2 col-sm-2">%{{goodsInfo.market_price}}</div>
                                <div class="col-xs-3 col-sm-3 col-sm-offset-1 col-xs-offset-1">市场价</div>
                                <div class="col-xs-2 col-sm-2">%{{goodsInfo.sell_price}}</div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 marginBottom">
                            <div class="row">
                                <div class="col-xs-3 col-sm-3">购买数量:</div>
                                <div class="col-xs-5 col-sm-5">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-addon" @click="mimus">
                                            <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                                        </span>
                                        <input
                                            type="text"
                                            v-model="mun"
                                            class="form-control textAlign"
                                            aria-label="Amount (to the nearest dollar)">
                                            <span class="input-group-addon" @click="add">
                                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 marginBottom">
                                <div class="row">
                                        <div class="col-xs-3 col-sm-3">
                                        <button type="button"  class="btn btn-primary btn-sm">立即购买</button>
                                        </div>
                                        <div class="col-xs-3 col-sm-3 col-xs-offset-1  col-sm-offset-1">
                                        <button type="button"  class="btn btn-danger btn-sm" @click="addshopcart">加入购物车</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row goodsBorder textLeft">
                        <div class="col-xs-12 col-sm-12">商品阐述</div>
                        <div class="col-xs-12 col-sm-12">商品编号：{{goodsInfo.goods_no}}</div>
                        <div class="col-xs-12 col-sm-12">库存情况：{{goodsInfo.stock}}</div>
                        <div class="col-xs-12 col-sm-12">上架时间：{{goodsInfo.addTime}}</div>
                </div>
        </div>
    </div>
</template>

<script>
import connect from '@/components/until/connect.js';
import prodTools from '@/components/until/prodTools.js';
    export default {
        created() {
            let goodsId =  this.$route.params.goodsid;

            // // 获取详情数据
            // this.$ajax.get("goodsDetail/getInfo"+goodsId)
            // .then(res=>{
                
            // })
            // .catch(err=>{

            // });
            // // 获取轮播图
            // this.$ajax.get("goodsDetail/getInfo"+goodsId)
            // .then(res=>{

            // })
            // .catch(err=>{

            // });
        },
        data() {
            return {
                barInfo: {
                    title: "商品详情"
                },
                goodsInfo: {
                    id:"1",
                    addTime:"2018-9-12",
                    goods_no:"1232131231231",
                    market_price:"2345",
                    sell_price:"1234",
                    stock:"60",
                    title:"王者毒药王者毒药王者毒药王者毒药王者毒药王者毒药",
                },
                mun: 1,//购买数量
                goodsId:this.$route.params.goodsid,//路由传递过来的商品ID
                url:"",//传递给轮播图的获取地址
            }
        },
        methods: {
            mimus()
            {
                if(this.mun <= 1) return;
                this.mun--;

            },
            add()
            {
                if(this.mun >= this.goodsInfo.stock) return;
                this.mun++;
            },
            addshopcart()
            {
                connect.$emit("addShopCart",this.mun);
                let commodity = {id:this.goodsId, mun:this.mun};
                prodTools.addOrUpdate(commodity);
            }
        }

    };
</script>
<style lang="less" scoped="scoped">
    .appTrainBody {
        height: calc(100% - 60px);
        display: block;
        padding-top: 40px;
        overflow: auto;
    }
    .goodsBorder {
        border: 1px solid gainsboro;
        margin-bottom: 5px;

        img {
            margin: 5px;
            border: 1px solid gainsboro;
        }
    }
    .aToBlock {
        display: block;
    }
    .textAlign{
        text-align: center;
    }
    .textLeft{
        text-align: left;
        color: rgb(194, 183, 202);
    }
    .marginBottom
    {
        margin-bottom: 5px;
    }
    .higher
    {
        height:200px;
        padding-bottom:5px;
    }
</style>