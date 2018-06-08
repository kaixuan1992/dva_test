import request from '../utils/request'

export function query (params) {
  return request('http://baidu.com', {
    method: 'POST',
    body: params
  })
}
