/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-09 15:32:30
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-13 11:52:51
 */
import requestMock from "@/axios/requestMock"
import to from "await-to-js"
import { useEffect, useState, useRef } from "react"
import "./style.css"
interface user {
    avatar: string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

interface ListResponse {
    data?: any[],
    page?: number,
    per_page?: number,
    total?: number,
    total_pages?: number
}


type User = Partial<user>

export function Axios() {
    const initUserList: any[] = []
    const [userList, setUserList] = useState(initUserList)
    const [curPage, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    const fetchTs = async () => {
        const [, res] = await to(requestMock.get('mock/userList', { params: { page: curPage } }))
        let result = res as ListResponse
        const { data = [], page, total_pages } = result || {}
        setTotalPage(total_pages || 0)
        setUserList(data)
        setPage(page || 1)
    }
    useEffect(() => {
        fetchTs()
    }, [curPage])

    const UserItem = userList.map((user: User) => {
        return (
            <li className="user-item relative p-2 border m-2 cursor-pointer overflow-hidden" key={user.id}>
                <img src={user.avatar} alt="" className="user-avatar transition-all" />
                <div className="
                    user-tx-info 
                    absolute 
                    top-0 
                    left-0
                    w-full
                    h-full
                    bg-black
                    text-1 
                    color-white 
                    flex-col justify-end p-2 bg-op-60 hidden 
                    transition-all">
                    <h2 className="font-bold">name: {user.first_name} {user.last_name}</h2>
                    {user.email && <p className="text-ellipsis break-all">email: {user.email}</p>}
                </div>
            </li>
        )
    })

    function prevPage() {
        if (isDisablePrev) return
        setPage(a => a - 1)
    }
    function nextPage() {
        if (isDisableNext) return
        setPage(a => a + 1)
    }

    let isDisablePrev = curPage <= 1
    let isDisableNext = curPage >= totalPage
    return (

        <>
            <div className="axios-page">
                <ul className="flex justify-center">
                    {UserItem}
                </ul>
                <div className="flex justify-center">
                    {isDisablePrev ? <button className="prev-btn border px-1 bg-gray-500"> {"<"} </button> : <button className="prev-btn border px-1" disabled={isDisablePrev} onClick={() => prevPage()}> {"<"} </button>}
                    <span className="px-2">{curPage}</span>
                    {isDisableNext ? <button className="prev-btn border px-1 bg-gray-500"> {">"} </button> : <button className="next-btn border px-1" disabled={isDisableNext} onClick={() => nextPage()}> {">"} </button>}
                </div>
            </div>
        </>
    )
}