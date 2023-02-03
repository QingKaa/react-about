/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-16 16:52:37
 * @LastEditors: zhaohaohua@bytegreen.cn
 * @LastEditTime: 2023-01-30 11:14:19
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { RouterProvider } from "react-router-dom"
import { router } from "@/routes/index"
import store from "./app/store"
import { Provider } from "react-redux"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
