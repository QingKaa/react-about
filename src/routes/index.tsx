/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-17 13:50:14
 * @LastEditors: 清咔 874518796@qq.com
 * @LastEditTime: 2023-02-06 21:21:38
 */
import { createBrowserRouter } from "react-router-dom"
import Root from "@/layout/root";
import ErrorPage from "@/layout/error/error"
import HomePage from "@/features/home/Home"
import AboutPage from "@/features/about/About";
import Todo from "@/features/todo/Todo";
import { Counter } from "@/features/counter/Counter";

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
        }]
    }
]);