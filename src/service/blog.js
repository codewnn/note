import monitorBaseService from '@/service/monitor.base.js'
//添加博客信息
export function insertBlog(data) {
  return monitorBaseService.post('blog/insertBlog',data)
}

//展示博客信息
export function selectBlog() {
  return monitorBaseService.get('blog/selectBlog')
}

//根据id进入博客详情
export function detailBlog(blogId) {
  return monitorBaseService.get('blog/selectIdBlog',{
    params:{
      blogId
    }
  })

}