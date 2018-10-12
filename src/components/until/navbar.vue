<template>
    <mt-header class="clearfloat secondTitle"  :title="barInfo.title">
        <mt-button  @click="goback" slot="left" icon="back"></mt-button>
    </mt-header>
</template>

<script>
export default {
  props: ["barInfo"],
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.clearfloat.secondTitle
{
    color:black;
    background-color:lightgrey;
    button{
        color:rgb(75, 64, 224);
    }
    h1.mint-header-title{
        margin: 0px;
    }
}
</style>

