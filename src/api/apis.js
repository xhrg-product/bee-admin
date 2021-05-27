import request from '@/utils/request'

export function apiList(query) {
  return request({
    url: '/apis/list',
    method: 'get',
    params: query
  })
}
