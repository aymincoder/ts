//axios请求的封装
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Message } from 'element-ui';

export interface ResponeData {
    code: number;
    data?: any;
    message: string;
}


//创建axios实例
let service: AxiosInstance | any;
if (process.env.NODE_ENV === "development") {
    service = axios.create({
        baseURL: "/api",//api的base_url
        timeout: 50000//请求超时的时间
    })
} else {
    //生产环境-正式环境
    service = axios.create({
        baseURL: "/api",//api的base_url
        timeout: 50000//请求超时的时间
    })
}

//request 拦截器 axios的一些配置
service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        console.log('request error-->', error);
        Promise.reject(error);
    }
)

//respone拦截器 axios 的一些配置
service.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            const data: ResponeData = res.data;
            if (data.code === 0) {
                return data.data
            } else {
                Message({
                    message: data.message,
                    type: 'error'
                })
            }
        } else {
            Message({
                message: '网络错误',
                type: 'error'
            })
            return Promise.reject(new Error(res.data.message || 'Error'))
        }
    },
    (error: any) => {
        console.log('response error-->', error);
        Promise.reject(error);
    }

)

export default service;