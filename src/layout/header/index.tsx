/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 09:56:38
 * @LastEditors: zhaohaohua@bytegreen.cn
 * @LastEditTime: 2023-01-31 09:10:49
 */
import { Link } from "react-router-dom"
export default function HeaderView() {
    const navList = [{ label: 'Home', path: '/home' }, { label: 'About', path: '/about' }, { label: 'Todo', path: '/todo' }]

    const listItem = navList.map((item) => {
        return <li className={"head-nav-items"} border-gray-400 key={item.path}>
            <Link to={item.path} underline text-sm px-3 hover:color-teal-500>{item.label}</Link >
        </li>
    })

    return (<div flex-1 h-full bg-teal-50 border-b flex items-center justify-between>
        <div className="logo"></div>
        <ul className="head-nav" flex color-dark-300>
            {listItem}
        </ul>
    </div>)
}