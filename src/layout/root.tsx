/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 09:54:57
 * @LastEditors: 清咔 874518796@qq.com
 * @LastEditTime: 2023-02-06 21:21:47
 */
import HeaderView from "@/layout/header"
import { Outlet } from "react-router-dom";
export default function Root() {
    return (
        <div pt-50px relative h-screen>
            <div id="header-view" absolute h-50px w-full top-0>
                <HeaderView />
            </div>
            <div className="main" p-2 w-full h-full overflow-hidden bg-teal-50>
                <Outlet />
            </div>
        </div>
    );
}