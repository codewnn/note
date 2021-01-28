<template>
  <el-container class="el-container-main">
    <el-container>
      <!--主体部分-->
      <el-main>
        <div id="show-blogs">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>博客总览</span>
              <input type="text" placeholder="搜索" v-model="search" class="el-icon-search">
              <img src="../../assets/img/img1.jpg">
            </div>
            <div v-for="(item,index) in filtersearch" :key="index" class="text item">
              <!--<router-link :to="'/detail/'+item.id">-->
                <div>发布于：{{item.time}}</div>
                <h2>{{item.title}}</h2>
                <article>{{item.content | sliceblog}}</article>
              <!--</router-link>-->
            </div>
          </el-card>


          <!--<div v-for="item in filtersearch" class="single-blogs">-->
          <!--<router-link :to="'/detail/'+item.id">-->
          <!--<div>发布于：{{item.time}}</div>-->
          <!--<h2>{{item.title}}</h2>-->
          <!--<article>{{item.content | sliceblog}}</article>-->
          <!--</router-link>-->
          <!--</div>-->
        </div>
      </el-main>

      <!--底部-->
      <el-footer>Footer</el-footer>
    </el-container>
    <!--右侧栏-->
    <el-aside width="200px">Aside</el-aside>
  </el-container>

</template>

<script>
  // import {getblogdata} from '../../network/home.js'
  export default {
    name: "blogContent",
    data(){
      return{
        showblog:[{title:'催大傻子',content:'傻不傻哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',time:this.CurentTime()},
          {title:'催大傻子',content:'傻不傻哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',time:this.CurentTime()},
          {title:'催大傻子',content:'傻不傻哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',time:this.CurentTime()}],
        search:'',


      }
    },
    computed:{
      filtersearch(){
        return this.showblog.filter(blog=>{
          return blog.title.match(this.search)
        })
      }
    },
    methods:{
      CurentTime(){
        var now = new Date();
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();           //秒
        var clock = year + "-";
        if(month < 10)
          clock += "0";
        clock += month + "-";
        if(day < 10)
          clock += "0";
        clock += day + " ";
        if(hh < 10)
          clock += "0";
        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm + ":";

        if (ss < 10) clock += '0';
        clock += ss;
        return(clock);
      }
    },
    filters:{
      sliceblog(value){
        return value.slice(0,150)+'...'
      }
    },
    // created(){
    //   getblogdata().then(res=>{
    //
    //     // this.showblog=res.data.slice(0,10)
    //     var ArrayList=[];
    //     for(let key in res.data){
    //       // console.log(res.data[key]);
    //       res.data[key].blog.id=key;
    //       ArrayList.push(res.data[key].blog)
    //     }
    //
    //     this.showblog=ArrayList
    //     // console.log(this.showblog);
    //   })
    // }
  }
</script>

<style scoped>
  img{
    height: 600px;
    display: block;
  }
  #show-blogs{
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 69px;
  }
  span{
    font-size: 28px;
  }
  input{
    margin-left: 22px;
  }
  .single-blogs{
    padding: 20px;
    margin:20px auto;
    box-sizing: border-box;
    border: 1px solid #545c64;
    max-width: 100%;

  }


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
    width: 100%;
  }
  .el-aside{
    background-color: #4D7198;
  }
  .el-container-main{
    margin-top: 63px;

  }

  .el-main{
    margin-top: -63px;
  }
</style>