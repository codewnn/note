<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
  import {detailBlog} from "../../service/blog";

  export default {
    name: "detail",
    data(){
      return {
        id:this.$route.params,
        blog:{}
      }
    },
    created(){
      // console.log(this.$route.params);
      detailBlog(this.id).then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>