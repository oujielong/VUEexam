<template>
    <div class="appTrainBody">
        <nav-bar :barInfo="barInfo"></nav-bar>
        <comment :cid="pid"> </comment>
    </div>
</template>

<script>
export default {
  data() {
    return {
        barInfo:{title:"商品评论"},
        pid:this.$route.query.id,
    }},
};
</script>
<style lang="less" scoped>
.appTrainBody {
  height: calc(100% - 60px);
  display: block;
  padding-top: 40px;
  overflow: auto;
}
</style>

