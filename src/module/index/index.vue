<template>


            <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b" router :default-active="path">
                <el-menu-item v-for="(item,index1) in moduleRoutes" @click="jump(item.jumpToPath)" :key="index1"  :index="item.jumpToPath" >
                    <i class="el-icon-s-home"></i>
                    <span>{{item.name}}</span>
                </el-menu-item>
            </el-menu>


            <!--<ul>-->
                <!--<li v-for="(item,index) in moduleRoutes" :key="index" @click="jump(item)">-->
                    <!--{{item.name}}-->
                <!--</li>-->
            <!--</ul>-->
</template>

<script>
    export default {
        name: "index.vue",
        props:{
            moduleRoutes:{
                type:Array,
                default:() =>{[]}
            },
          props: {
            iscolor: {
              type: String,
              default: 'yellow'
            }
          },
        },
        data(){
            return{
                titleData:[
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    }
                ],
              path:''
            }
        },
      computed:{
      },
      created(){
        this.path=window.sessionStorage.getItem('item')
      },
        methods:{
            jump(item){
              window.sessionStorage.setItem('item',item)
              this.path=item
            }
        }
    }
</script>

<style scoped>
    .el-menu-demo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        /*height: 50px;*/
        height: 63px;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 16px;
    }
    .el-menu-item{
        /*height: 50px;*/
        text-align: center;
    }
    /*span{*/
        /*left: 8px;*/
    /*}*/
    .el-aside{
        background-color: #ff5777;
    }

</style>