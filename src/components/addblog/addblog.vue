<template>
  <div id="add-blog">
    <h2>写博客</h2>
    <form v-if="!submitt">
      <label >主题:</label>
      <input type="text" v-model="blog.subject">
      <label>内容:</label>
      <textarea v-model="blog.content"></textarea>
      <label>分类</label>
      <input type="text"  v-model="blog.category">
      <label>作者</label>
      <select v-model="blog.author">
        <option  v-for="author in authors" :key="author">
          {{author}}
        </option>
      </select>
      <div>发布时间：{{blog.time}}</div>
      <button @click.prevent="post">添加博客</button>
    </form>
          <h2 v-else>您的博客发布成功</h2>
  </div>
</template>

<script>
  // import {blogdata} from '../../network/home.js'
  import {insertBlog} from "../../service/blog";

  export default {
    name: "addblog",
    data(){
      return{
        blog:{
          subject:'',
          content:'',
          category:'',
          author:'',
           time:''
        },
        authors:['崔洪铭','小红','小明'],
        submitt:false
      }
    },
    methods:{
      post(){
        this.blog.time=this.CurentTime()
        insertBlog(this.blog).then(res=>{
          this.submitt=true
          console.log(res);
        })
        // blogdata(this.blog).then(res=>{
        //   this.submitt=true

        // })
      },
    //  获取当前时间
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
    }
  }
</script>

<style scoped>
  #add-blog *{
    box-sizing: border-box;

  }
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
    margin-top: 49px;
  }
 label{
  display: block;
   margin: 20px 0 10px;
}
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }

  textarea{
    height: 200px;
  }
button{
  display: block;
  margin: 20px 0;
  background-color: crimson;
  color: white;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
}
</style>