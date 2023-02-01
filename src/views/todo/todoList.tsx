/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 17:29:29
 * @LastEditors: zhaohaohua@bytegreen.cn
 * @LastEditTime: 2023-01-31 14:37:46
 */
import { ChangeEventHandler, MouseEvent, MouseEventHandler, useState } from "react"

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
            <input className="border mr-1 flex-1" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="please input todo item" />
            <button onClick={() => props.confirm(value)}>添加</button>
        </div>
    )
}

export default function TodoList() {
    const [todoData, setTodoData] = useState([{ text: 'todo', finish: false }])

    const onChangeItemState = (index: number) => {
        const _todoData = todoData.slice()
        _todoData[index].finish = !_todoData[index].finish
        setTodoData(_todoData)
    }

    const addTodo = (value: string) => {
        setTodoData(todoData.concat({ text: value, finish: false }))
    }

    const delItem = (e: MouseEvent, idx: number) => {
        e.stopPropagation()
        e.preventDefault()
        let _todoData = todoData.slice()
        _todoData.splice(idx, 1)
        setTodoData(_todoData)
    }

    const toDoList = todoData.map((it, idx) => {
        return <TodoItem key={idx} item={it} delItem={(e) => delItem(e, idx)} onChange={() => onChangeItemState(idx)} />
    })

    return (
        <div className="h-full overflow-y-auto">
            <h2 text-center font-bold text-xl>ToDo List</h2>
            <div className="w-prose mx-auto pl-4 mb-2">
                <AddBar confirm={addTodo} />
            </div>
            <ul className="todo-list" pl-4 w-prose mx-auto>
                {toDoList}
            </ul>
        </div>

    )
}