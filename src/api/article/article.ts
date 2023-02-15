/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-15 11:34:51
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-15 14:25:36
 */
import requestMock from '@/axios/requestMock';

interface IListResponse {
    data?: Array<any>
}
const fetchArticleList = () => {
    return requestMock.get<IListResponse>('/article/list')
}

export default {
    fetchArticleList
}

