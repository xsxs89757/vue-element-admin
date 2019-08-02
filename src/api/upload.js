import request from '@/utils/request'

export function uploadSingleImage(data, func = progressEvent => {}) {
  return request({
    url: '/upload/signleImage',
    method: 'post',
    data,
    onUploadProgress: progressEvent => {
      func(progressEvent)
    }
  })
}

export const uploadAddress = {
  configUpload: process.env.BASE_API + '/upload/upConfig',
  articleUpload: process.env.BASE_API + '/upload/article'
}
