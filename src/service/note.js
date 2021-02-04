import monitorBaseService from '@/service/monitor.base.js'

export function getdemo() {
    return monitorBaseService.get('Test/demo')
}

//记录笔记内容  ******插入图片错误
export function insertNote(data) {
    return monitorBaseService.post('note/insertNote',data)
}
//获取笔记内容
export function getNoteContent() {
  return monitorBaseService.get('note/selectNote')
}