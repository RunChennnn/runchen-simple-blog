// axios 封装处理
import axios from "axios"
import { getToken, removeToken } from './token'
import router from "../router";

/**
 *  1. 根域名配置
 *  2. 超时时间
 *  3. 请求拦截器 响应拦截器
 */

const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

/**
 *  添加请求拦截器
 *  在发送请求之前做拦截，插入部分自定义配置
 */
request.interceptors.request.use((config) => {
    /**
     * 操作该config注入token数据
     * 1. 获取token
     * 2. 按照后端的格式要求做token拼接
     */
    const token = getToken()
    if(token) { //该token存在
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

/**
 *  添加响应拦截器
 *  在响应数据返回客户端之前 做拦截 重点处理返回的数据
 */
request.interceptors.response.use((response) => {
    /**
     * 状态码在2xx范围内都会触发该函数
     * 对响应数据进行处理
     */
    return response.data
}, (error) => {
    /**
     * 对于超出2xx范围状态码出发error
     * 对响应错误进行处理
     * 监控401 token失效
     */
    console.dir(error)
    if (error.response.status === 401) {
        removeToken()
        router.navigate('/login').then(r => {})
        window.location.reload()
    }
    return Promise.reject(error)
})

export { request }