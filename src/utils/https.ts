//axios请求的封装
import axios from 'axios';

//创建axios实例
let service:any = {};
service = axios.create({
    baseURL:"/api",//api的base_url
    timeout:50000//请求超时的时间
})
//request 拦截器 axios的一些配置
service.interceptors.request.use(
    (config:any)=>{
        return config;
    },
    (error:any)=>{
        console.log('request error-->',error);
        Promise.reject(error);
    }
)

//respone拦截器 axios 的一些配置
service.interceptors.response.use(
    (response:any)=>{
        return response;
    },
    (error:any)=>{
        console.log('response error-->',error);
        Promise.reject(error);
    }
)

export default service;