import request from '@/utils/request'

export function getAdminUsers(query) {
  return request({
    url: '/users',
    method: 'get',
    params: query
  })
}

export function deleteAdminUsers(id) {
  return request({
    url: `/users/${id}`,
    method: 'delete'
  })
}

export function addAdminUsers(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

export function updateAdminUsers(data) {
  return request({
    url: `/users`,
    method: 'put',
    data
  })
}

export function getAdminControllerLogs(query) {
  return request({
    url: '/adminLogs',
    method: 'get',
    params: query
  })
}

export function clearAdminControllerLogs() {
  return request({
    url: '/clearAdminLogs',
    method: 'delete'
  })
}

export function updatePassoword(data) {
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data
  })
}

export function setDev(query) {
  return request({
    url: '/user/dev',
    method: 'get',
    params: query
  })
}
