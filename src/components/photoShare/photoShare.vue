<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <div class="photoHead">
            <ul class="clearfloat">
              <li v-for="title in headTitleList" :key="title.id" class="textNowrap" @click="getClassifyInfo(title.id)"><a href="#">{{title.title}}</a></li>
            </ul>
        </div>
       <!-- 选项标题 -->
       <!-- 选择内容 -->
       <div class="photo-list">
           <ul>
               <li v-for="img in imgs" :key="img.id">
                   <router-link :to="{name:'photo.detail',params:{id:img.id}}">
                       <img v-lazy="img.src" alt="图片" width="100%" height="200px">
                       <p>
                           <span class="textNowrap">{{img.title}}</span>
                           <span class="textellipsis">{{img.content}}</span>
                       </p>
                   </router-link>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      barInfo: { title: "图文分享" },
      headTitleList: [
        { title: "标题一", id: "0" },
        { title: "标题2", id: "1" },
        { title: "标题3", id: "2" },
        { title: "标题4", id: "3" },
        { title: "标题5", id: "5" },
        { title: "标题5", id: "6" },
        { title: "标题5", id: "7" },
        { title: "标题5", id: "8" },
        { title: "标题5", id: "9" },
        { title: "标题5", id: "10" },
        { title: "标题5", id: "11" },
        { title: "标题5", id: "12" }
      ],
      imgs: [
        {
          id:1,
          src: "../../../static/picture/greep.png",
          content: `许家印今年卫冕首富失败，
                他的财富缩水了400亿，以2500亿元位列第二。马化腾2400亿元排第三。今年马化腾的财富缩水了100亿，这
                也是他自2005年上榜以来，第一次出现财富缩水。三强格局稳固，但其财富值同后面几位的差距越来越大，后
                `,
          title: "图文标题"
        },
        {
          id:2,
          src: "../../../static/picture/greep.png",
          content: `许家印今年卫冕首富失败，
                他的财富缩水了400亿，以2500亿元位列第二。马化腾2400亿元排第三。今年马化腾的财富缩水了100亿，这
                也是他自2005年上榜以来，第一次出现财富缩水。三强格局稳固，但其财富值同后面几位的差距越来越大，后
                `,
          title: "图文标题"
        },
        {
          id:3,
          src: "../../../static/picture/greep.png",
          content: `许家印今年卫冕首富失败，
                他的财富缩水了400亿，以2500亿元位列第二。马化腾2400亿元排第三。今年马化腾的财富缩水了100亿，这
                也是他自2005年上榜以来，第一次出现财富缩水。三强格局稳固，但其财富值同后面几位的差距越来越大，后
                `,
          title: "图文标题"
        },
      ]
    };
  },
  created() {
    //获取标题头部
    // this.$ajax
    //   .get("/photoShart/headList")
    //   .then(res => {
    //     console.log(res);
    //     this.headTitleList = res.data.headTitleList;
    //   })
    //   .catch(err => {
    //     console.log("获取信息失败");
    //   });

    // 初始化进行请求
  },
  methods: {
    getClassifyInfo(id) {
      this.$ajax
        .get("/photoShart/headList" + id)
        .then(res => {
          console.log(res);
          this.headTitleList = res.data.headTitleList;
        })
        .catch(err => {
          console.log("获取信息失败");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.appTrainBody {
  height: calc(100% - 60px);
  display: block;
  padding-top: 40px;
}
.photoHead {
  ul {
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 0px;
      width: 0px;
    }
    li {
      a {
        color: black;
      }
      position: relative;
      display: inline-block;
      width: 70px;
      text-align: center;
      background-color: aqua;
      padding: 4px 10px;
      border-right: 1px solid black;
    }
  }
}
.photo-list {
  ul {
    li {
      a {
        display: block;
        background-color: blanchedalmond;
        color: black;
        p {
          height: 75px;
          margin: -70px 0px 0px 0px;
          background-color: rgb(231, 222, 222);
          opacity: 2.5;
          span {
            display: block;
            text-align: left;
          }
          span:nth-child(1) {
            font-size: 1.5em;
            font-weight: 400;
            margin-bottom: 5px;
          }
          span:last-child {
            height: 40px;
          }
        }
      }
    }
  }
}
.photo-list {
  border: 1px solid blanchedalmond;
}

image[lazy=loading] {
  width: 40px;
  height: 200px;
  margin: auto;
}
</style>

