/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn 
 * @Date: 2023-01-30 17:29:29
 * @LastEditors: 清咔 874518796@qq.com
 * @LastEditTime: 2023-02-06 21:02:30
 */
import PageHeader from "@/component/PageHeader";
import { ChangeEventHandler, MouseEvent, MouseEventHandler, useState } from "react"
import { changeStatus, addTodo, delTodo, selectTodoList } from "./todoSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const TodoItem = function (props: {
    item: { text: string; finish: boolean };
    delItem: MouseEventHandler<HTMLSpanElement> | undefined;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}) {
    const { text, finish } = props.item
    const classList = finish ? 'color-gray-500 line-through' : 'color-black-500'

    return (
        <li className={classList} py-1 border-b relative>
            <label cursor-pointer accent-green-500 flex overflow-hidden block w-full>
                <input mr-2 type="checkbox" checked={finish} onChange={props.onChange} />
                <p overflow-hidden select-unset text-ellipsis block w-full whitespace-nowrap>{text}</p>
                <span className="color-red-500 relative z-2" onClick={props.delItem}>X</span>
            </label>
        </li >
    )
}

function AddBar(props: { confirm: Function }) {
    const [value, setValue] = useState('')
    return (
        <div className="wrap-bar flex">
            <input
                className="border mr-1 flex-1 rounded px-1"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} placeholder="please input todo item" />
            <button
                className="border p-1 border-color-green rounded hover:bg-emerald hover:color-white"
                onClick={() => props.confirm(value)}>
                add
            </button>
        </div>
    )
}

export default function TodoList() {
    const todoList = useAppSelector(selectTodoList)
    const dipatch = useAppDispatch()

    const delItem = (e: MouseEvent, idx: number) => {
        e.stopPropagation()
        e.preventDefault()
        dipatch(delTodo(idx))
    }

    const toDoList = todoList.map((it, idx) => {
        return <TodoItem key={idx} item={it} delItem={(e) => delItem(e, idx)} onChange={() => dipatch(changeStatus({ index: idx, toStatus: !it.finish }))} />
    })

    return (
        <div className="h-full overflow-y-auto">
            <PageHeader title="Todo" />
            <div className="w-prose mx-auto pl-4 mb-2">
                <AddBar confirm={(value: string) => dipatch(addTodo({ text: value, finish: false }))} />
            </div>
            <ul className="todo-list" pl-4 w-prose mx-auto>
                {toDoList}
            </ul>
        </div>

    )
}