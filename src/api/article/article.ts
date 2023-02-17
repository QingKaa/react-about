/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-15 11:34:51
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-17 10:27:59
 */
import requestMock from '@/axios/requestMock';


const fetchArticleList = () => {
    return requestMock.get<ArticleItem[]>('/article/list')
}

export default {
    fetchArticleList
}

