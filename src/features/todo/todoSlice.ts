
import { RootState } from "@/app/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface TodoItem {
    text: string,
    finish: boolean
}

const initialState = {
    todoList: [] as TodoItem[]
}
export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<{ index: number, toStatus: boolean }>) => {
            const { index, toStatus } = action.payload
            state.todoList[index].finish = toStatus
        },
        addTodo: (state, action: PayloadAction<TodoItem>) => {
            let list = state.todoList.concat({ ...action.payload })
            state.todoList = list
        },
        delTodo: (state, action: PayloadAction<number>) => {
            state.todoList.splice(action.payload, 1)
        }
    }
})

export const selectTodoList = (state: RootState) => state.todo.todoList

export const { changeStatus, addTodo, delTodo } = todoSlice.actions

export default todoSlice.reducer