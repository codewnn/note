<template>
  <!--<div class="blog-home">-->
  <!--<div>崔洪铭的个人博客</div>-->

  <!--<img src="../../assets/img/home.svg" alt="">-->
  <!--<img src="../../assets/img/home_active.svg" alt="">-->


  <el-menu

          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b" router default-active="/blogcontent">
    <el-menu-item index="/blogcontent">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-edit"></i>
      <span>笔记</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-message"></i>
      <span>留言板</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-caret-right"></i>
      <span>关于我</span>
    </el-menu-item>
    <el-menu-item index="/blogregester">
      <i class="el-icon-user-solid"></i>
      <span>博客管理</span>
    </el-menu-item>
  </el-menu>






  <!--<div class="blog-home-content" @click="getcontent" :style="getcolor1">首页</div>-->
  <!--<div class="blog-home-content" @click="getaddblog" :style="getcolor2">写博客</div>-->
  <!--<div class="blog-home-content" @click="getblogregester" :style="getcolor3">博客管理</div>-->
  <!--</div>-->
</template>

<script>

  export default {
    name: "home",
    props: {
      iscolor: {
        type: String,
        default: 'yellow'
      }

    },
    computed: {
      //   //博客点击变色
      //   getimg1(){
      //     return this.$route.path.indexOf('/blogcontent')!==-1
      //   },
      //   getcolor1(){
      //    return this.getimg1?{color:this.iscolor}:{}
      //   },
      //
      // //写博客点击变色
      //   getimg2(){
      //     return this.$route.path.indexOf('/addblog')!==-1
      //   },
      //   getcolor2(){
      //     return this.getimg2?{color:this.iscolor}:{}
      //   },
      //
      //   //写注册博客
      //   getimg3(){
      //     return this.$route.path.indexOf('/blogregester')!==-1
      //   },
      //   getcolor3(){
      //     return this.getimg3?{color:this.iscolor}:{}
      //   },
      // },

      //   getcontent(){
      //     this.$router.push('/blogcontent')
      //   },
      //   getaddblog(){
      //     this.$router.push('/addblog')
      //   },
      //   getblogregester(){
      //     this.$router.push('/blogregester')
      //   }
      // },
      // filters:{
      //   sliceblog(value){
      //     return value.slice(0,150)+'...'
      //   }
    },

  }
</script>

<style scoped>

  .el-menu{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /*height: 50px;*/
    height: 63px;

    position: fixed;
    top: 0;
    left: 0;
    font-size: 16px;
  }
  .el-menu-item{
    /*height: 50px;*/



  }
  span{
    left: 8px;
  }
  .el-aside{
    background-color: #ff5777;
  }

</style>