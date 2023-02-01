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


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
