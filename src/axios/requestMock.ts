/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-13 11:52:02
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-15 11:50:32
 */
import Request from "./index"

const Http = new Request({
    baseURL:'/mock',
    interceptors:{
        requestInterceptors: (config) => {
            return config
        }
    }
})

export default Http