<template>
    <div class="appTrainBody">
      <nav-bar :barInfo="barInfo"></nav-bar>
      <div class="container">
          <div class="row marginBottom" v-for="(goods,index) in shopcarList" :key="index">
              <div class="col-xs-12 col-sm-12">
                <img :src="goods.img_src" alt="图片" height="90" width="100%"> 
              </div>
              <div class="col-xs-12 col-sm-12 ">
                    {{goods.title}}
              </div>
              <div class="col-xs-12 col-sm-12">
                  <div class="row">
                      <div class="col-xs-2 col-sm-2">%{{goods.sell_price}}</div>
                      
                      <div class="col-xs-5 col-sm-5">
                          <div class="input-group input-group-sm">
                              <span class="input-group-addon" @click="mimus(index)">
                                  <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                              </span>
                              <input
                                  type="text"
                                  v-model="goods.mun"
                                  class="form-control textAlign"
                                  aria-label="Amount (to the nearest dollar)">
                                  <span class="input-group-addon" @click="add(index)">
                                      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                  </span>
                          </div>
                      </div>
                      <div class="col-xs-3 col-sm-3"><mt-switch v-model="goods.switch"></mt-switch></div>
                      <div class="col-xs-2 col-sm-2"><span @click="deleteProd(index)">删除</span></div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-3 col-sm-3">总件数：{{allPay.mun}}，需要支付{{allPay.sum}}元</div>
          </div>
        </div>
    </div>
</template>
<script>
import prodTools from '@/components/until/prodTools.js';
import connect from '@/components/until/connect.js';
export default {
    created()
    {
      //  this.$ajax.get("shopCart/getGoodList")
      //     .then(res=>{
      //           this.shopCarList=res.data.shopcarList;
      //     })
      //     .catch(err=>{

      //     });
    let pro = prodTools.getAllProds();
    let keys = Object.keys(pro);
    this.shopcarList.forEach((ele)=>{
       for(let x=0; x< keys.length; x++)
       {
           if(ele.id == keys[x])
           {
               ele.mun = pro[keys[x]];
           }
       }
    });


    },
    computed:{
        // 计算总金额
        allPay()
        {
            let sum = 0;
            let mun = 0;
            this.shopcarList.forEach((ele,index)=>{
                if(ele.switch)
                {
                   sum += ele.mun * ele.sell_price;
                   mun += ele.mun;
                }
            });
            return {mun,sum};
        }
    },
    data() {
        return {
            barInfo: { title: "购物车"},
            shopcarList:[
              {id:1,title:"商品描述",sell_price:123,mun:0,img_src:"../../../static/picture/greep.png",switch:true},
              {id:2,title:"商品描述",sell_price:123,mun:0,img_src:"../../../static/picture/greep.png",switch:true},
            ],
        }
    },
    methods:{
      mimus(index)
      {
        if(this.shopcarList[index].mun<=1)return;
        this.shopcarList[index].mun--;
        connect.$emit("addShopCart",-1);
        prodTools.addOrUpdate({id:this.shopcarList[index].id,mun:-1});
      },
      add(index)
      {
        this.shopcarList[index].mun++;
        connect.$emit("addShopCart",1);
        prodTools.addOrUpdate({id:this.shopcarList[index].id,mun:1});
      },
      deleteProd(index)
      {
        let goods = this.shopcarList[index];
        prodTools.delete({id:goods.id});
        connect.$emit("addShopCart",-goods.mun);
        this.shopcarList.splice(index,1);
      }
    
    },
};
</script>
<style lang="less" scoped="scoped">
    .appTrainBody {
        height: calc(100% - 60px);
        display: block;
        padding-top: 40px;
    }
    .marginBottom{
     border-bottom: 1px solid #ddd;
    }

</style>