/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-17 13:50:14
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-03 10:59:51
 */
import { createBrowserRouter } from "react-router-dom"
import Root from "@/layout/root";
import ErrorPage from "@/layout/error/error"
import HomePage from "@/views/home"
import AboutPage from "@/views/about";
import TodoList from "@/views/todo/todoList";
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
            element: <TodoList />
        }, {
            path: 'counter',
            element: <Counter />
        }]
    }
]);