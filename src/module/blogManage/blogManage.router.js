export default {
  path:'/blogManage',
  jumpToPath:'/blogManage',
  component:() =>import('@/module/blogManage/blogManage.vue'),
  // chlidren:[
  //   {
  //     path:'/blogcontentmanage',
  //     jumpToPath:'/blogcontentmanage',
  //     component:() =>import('@/module/blogManage/blogcontentmanage.vue'),
  //   }
  // ],
  name:'博客管理'
}