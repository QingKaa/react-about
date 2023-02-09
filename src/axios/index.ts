/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-09 11:59:01
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-09 16:10:30
 */
import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import type { RequestConfig, RequestInterceptors } from "./types"

const methodList = ['post', 'get']
class Request {
    instance: AxiosInstance
    interceptors?: RequestInterceptors
    constructor(config: RequestConfig){
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.instance.interceptors.request.use((config) => {
            console.log(' ====> global request interceptors', config);
            return config 
        })
        this.instance.interceptors.response.use((response) => {
            console.log(' ====> global response interceptors', response);
            const { data } = response
            return data
        })
    }
    request(config: AxiosRequestConfig){
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptors,
            this.interceptors?.requestInterceptorsCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptors,
            this.interceptors?.responseInterceptorsCatch
        )
        return this.instance.request(config)
    }
    get(url:string, config?: AxiosRequestConfig){
        let local_config = {
            ...config,
            method: 'GET',
            url: url
        }
        return this.instance.request(local_config)
    }
}

export default Request