/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-09 14:58:27
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-09 15:22:28
 */
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"

export interface RequestInterceptors {
    requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestInterceptorsCatch?: (err: any) => any

    responseInterceptors?: (response: AxiosResponse) => AxiosResponse
    responseInterceptorsCatch?: (err: any) => any

}

export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors
}