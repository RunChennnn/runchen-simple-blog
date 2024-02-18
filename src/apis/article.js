import { request } from "../utils";

// 获取频道列表api
export function getChannelAPI() {
    return request({
        url: '/channels',
        method: 'GET'
    })
}

// 文章提交api
export function uploadArticleAPI(data) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}

// 文章更新api
export function updateArticleAPI(data) {
    return request({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT'
    })
}

// 获取文章列表api
export function getArticleListAPI(params) {
    return request({
        url: '/mp/articles',
        method: 'GET',
        params
    })
}

// 删除文章api
export function deleteArticleAPI(id) {
    return request({
        url: `/mp/articles/${id}`,
        method: 'DELETE'
    })
}

// 根据文章id获取该文章详细内容
export function fetchArticleById(id) {
    return request({
        url:  `/mp/articles/${id}`
    })
}