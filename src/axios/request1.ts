/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-09 15:29:54
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-09 16:01:31
 */
import Request from "./index"

const Http1 = new Request({
    baseURL:'https://reqres.in',
    interceptors:{
        requestInterceptors: (config) => {
            console.log('api_1 ====> requestInterceptors', config);  
            return config
        }
    }
})

export default Http1