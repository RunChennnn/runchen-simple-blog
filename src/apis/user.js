import { request } from "../utils";

// login模块api封装
export function loginAPI(loginForm) {
    return request({
        url: '/authorizations',
        method: 'POST',
        data: loginForm
    })
}

// 获取用户信息api封装
export function getProfileAPI() {
    return request({
        url: '/user/profile',
        method: 'GET'
    })
}