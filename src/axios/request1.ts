/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-09 15:29:54
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-15 09:11:58
 */
import Request from "./index"

const Http1 = new Request({
    baseURL:'https://reqres.in/api/',
    
    interceptors:{
        requestInterceptors: (config) => {
            return config
        }
    }
})

export default Http1