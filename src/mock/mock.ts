/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-13 10:40:25
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-15 11:33:17
 */
import { MockMethod } from "vite-plugin-mock"
import Mock from "mockjs"
import article from "./module/article"

const Random = Mock.Random
export default [
    {
        url: '/mock/userList',
        method: 'get',
        response:( ) =>{
            return {
                code: 0,
                message: 'success',
                "data|10":[
                    {
                        "id|+1": 1,
                        "name": "@cname",
                        "age|18-40": 1,
                        "avatar": "@image"
                    }
                ]
            }
        }
    },
    ...article
] as MockMethod[]