/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 09:54:57
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-27 16:18:27
 */
import HeaderView from "@/layout/header"
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd"
import { StyleProvider } from "@ant-design/cssinjs"
export default function Root() {
    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#00b96b',
                }
            }}>
                <div pt-50px relative h-screen>
                    <div id="header-view" absolute h-50px w-full top-0>
                        <HeaderView />
                    </div>
                    <div className="main" p-2 w-full h-full bg-gray-2>
                        <Outlet />
                    </div>
                </div>
            </ConfigProvider>
        </StyleProvider>
    );
}