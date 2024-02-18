/**
 * 基于localstorage存取删的三个方法封装
 * @type {string}
 */
const TOKEN_KEY = 'token_key'

function setToken(token) {
    return localStorage.setItem(TOKEN_KEY, token)
}

function getToken() {
    return localStorage.getItem(TOKEN_KEY)
}

function removeToken() {
    return localStorage.removeItem(TOKEN_KEY)
}

export {setToken, getToken, removeToken}