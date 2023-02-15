/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-09 11:59:01
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-15 14:24:01
 */
import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import type { RequestConfig, RequestInterceptors, ResultData } from "./types"

class Request {
    instance: AxiosInstance
    interceptors?: RequestInterceptors
    constructor(config: RequestConfig){
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.instance.interceptors.request.use((config) => {
            return config 
        })
        this.instance.interceptors.response.use((response) => {
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
    get<T>(url:string, params?: object): Promise<ResultData<T>>{
        return this.instance.get(url, { params })
    }
    post<T>(url: string, config?: object): Promise<ResultData<T>>{
        return this.instance.post(url, config)
    }
    delete<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.instance.delete(url, { params })
    }
    put<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.instance.put(url, params)
    }

}

export default Request