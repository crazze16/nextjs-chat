import axios from "axios";
import {TAuth, TLogin, TLoginDelete, TLoginPost} from "types/api-response.type";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd90715ab-5b1a-47cb-9608-2ac806758061',
    }
});

export const authAPI = {
    getAuth(){
        return instance.get<TAuth>(`auth/me`).then(res => res.data)
    },
    logIn(email, password, rememberMe = false){
        return instance.post<TLogin<TLoginPost>>(`/auth/login`, {email, password, rememberMe}).then(res => res.data)
    },
    logOut(){
        return instance.delete<TLogin<TLoginDelete>>(`/auth/login`).then(res => res.data)
    }
};