/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 09:56:38
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-09 16:29:02
 */
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
export default function HeaderView() {
    const navList = [
        { label: 'Home', path: '/home' },
        { label: 'About', path: '/about' },
        { label: 'Todo', path: '/todo' },
        { label: 'Counter', path: '/counter' },
        { label: 'Axios', path: '/axios' }
    ]

    const { pathname } = useLocation()
    const [activePathName, setActivePathName] = useState('/')
    useEffect(() => {
        setActivePathName(pathname)
    })

    const listItem = navList.map((item) => {
        return <li className={"head-nav-items "} border-green-400 key={item.path}>
            <Link
                className={activePathName === item.path ? 'color-teal-500' : ''}
                to={item.path} underline text-sm px-3 hover:color-teal-500>
                {item.label}
            </Link >
        </li>
    })


    return (<div className="bg-while" flex-1 h-full border-b flex items-center justify-between>
        <div className="logo"></div>
        <ul className="head-nav" flex >
            {listItem}
        </ul>
    </div>)
}