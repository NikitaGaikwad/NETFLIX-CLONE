import axios from "axios"
import {loginStart,loginSuccess,loginFailure } from './AuthActions'

export const login = async(user, dispatch)=>{
    dispatch(loginStart())
    try {
        const res = await axios.post("auth/login", user)
        res.data.isAdmin && dispatch (loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logout = async(dispatch)=>{
    dispatch(logout())
}