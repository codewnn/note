<template>
  <!--<div class="regester">-->
  <!--<h2 >后台管理登录</h2>-->
  <!--<input type="text" placeholder="Username" v-model="regester.username">-->
  <!--<input type="text" placeholder="Password" v-model="regester.password">-->
  <!--<div class="btn">-->
  <!--<button @click="getpost">注册</button>-->
  <!--<button @click="getdenglu">登录</button>-->
  <!--</div>-->
  <!--<div v-show="flag" class="flag">您的账号或密码错误</div>-->
  <!--</div>-->

  <div class="login_contain">
    <div class="login_box">
      <div class="login_text">后台管理登录</div>
      <!--用户登录框-->
      <el-form class="login_form" :model="regester" :rules="loginFormRules" ref="loginFormRef">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-user" v-model="regester.username"></el-input>
        </el-form-item >
        <!--密码-->
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="iconfont icon-3702mima" v-model="regester.password"></el-input>
        </el-form-item>
        <!--登录按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="getdenglu">登录</el-button>
          <el-button type="info" @click="loginFormRet">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>

</template>



<script>
  // import {getpostregester,getregeter1} from '../../network/home'
  export default {
    name: "blogManage",
    data(){
      return{
        //输入的账号密码
        regester:{
          username:'admin',
          password:'123456'
        },
        //存在数据库的账号密码
        regesterReally:{
          username:'admin',
          password:'123456'
        },

        //
        // username1:'',
        // password1:'',
        // flag:false,

        loginFormRules:{
          username:[
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      //点击重置按钮，重置表单
      loginFormRet(){
        this.$refs.loginFormRef.resetFields()
      },

      getdenglu(){
        if(this.regester.username===this.regesterReally.username&&this.regester.password===this.regesterReally.password){
          this.$message.success('登录成功');
          this.$router.push('/blogcontentmanage')
        }else{
          this.$message.error('登录失败，账号或密码错误');
          this.flag=true
        }
      }
    }
  }
</script>

<style scoped>
  .login_contain{
    height:960px;
    position: relative;
    /*margin-top: 63px;*/
    background-color: #2b4b6b;


  }
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .login_text{
    font-size: 28px;
    text-align: center;
    margin-top: 30px;
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content: flex-end;
  }
</style>