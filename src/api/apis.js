import request from '@/utils/request'

export function apiList(query) {
  return request({
    url: '/apis/list',
    method: 'get',
    params: query
  })
}

export function deleteApi(id) {
  return request({
    url: '/apis/delete',
    method: 'post',
    data: id,
    headers: {
      'Content-Type': 'application/json;'
    },
    setTimeout: 5000
  })
}
