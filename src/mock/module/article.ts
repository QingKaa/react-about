/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-15 11:27:07
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-15 11:50:47
 */
const articleList = {
    url:'/mock/article/list',
    method: 'get',
    response: () => {
        return {
            code: 0,
            success: true,
            message: null,
            "data|10":[
                {
                    "id|+1": true,
                    "title": "@cparagraph()",
                    "des": "@cparagraph(10)",
                    "createTime":"@date(yyyy-MM-dd)"
                }
            ]
        }
    }
}

export default [
    articleList
]