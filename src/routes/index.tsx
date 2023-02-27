/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-17 13:50:14
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-27 10:09:14
 */
import { createBrowserRouter } from "react-router-dom"
import Root from "@/layout/root";
import ErrorPage from "@/layout/error/error"
import HomePage from "@/features/home/Home"
import AboutPage from "@/features/about/About";
import Todo from "@/features/todo/Todo";
import { Counter } from "@/features/counter/Counter";
import { AxiosPage } from "@/features/axiosPages/axios";
import { TablePage } from "@/features/antd-table/tablePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [{
            path: '/home',
            element: <HomePage />
        }, {
            path: 'about',
            element: <AboutPage />
        }, {
            path: 'todo',
            element: <Todo />
        }, {
            path: 'counter',
            element: <Counter />
        }, {
            path: 'axios',
            element: <AxiosPage />
        }, {
            path: 'tableList',
            element: <TablePage />
        }]
    }
]);