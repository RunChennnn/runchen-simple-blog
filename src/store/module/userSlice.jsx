import { createSlice } from "@reduxjs/toolkit";
import {setToken as _setToken, getToken, removeToken } from "../../utils";
import { loginAPI, getProfileAPI } from "../../apis/user";

const userStore = createSlice({
    name: 'user',
    initialState: {
        userInfo: {},
        token: getToken() || ''
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

// 解构出actionCreator
const { setToken, setUserinfo, clearUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 登陆获取token异步方法封装
const fetchLogin = (loginForm) => {
   return async (dispatch) => {
       // 调用loginAPI完成login检测
       const res = await loginAPI(loginForm)
       dispatch(setToken(res.data.token))
   }
}
// 获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        // 调用用户个人信息api
        const res = await getProfileAPI()
        dispatch(setUserinfo(res.data))

    }
}

export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer