/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-16 16:52:37
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-27 14:00:51
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { RouterProvider } from "react-router-dom"
import { router } from "@/routes/index"
import { store, persistor } from "./app/store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
    // </React.StrictMode>,
)
