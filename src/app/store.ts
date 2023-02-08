/*
 * @Date: 2023-02-06 09:37:46
 * @LastEditors: 清咔 874518796@qq.com
 * @LastEditTime: 2023-02-08 22:22:03
 * @FilePath: \react-about\src\app\store.ts
 * @Description: Description here
 */
import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import counterReducer from "@/features/counter/counterSlice"
import todoSlice from "@/features/todo/todoSlice"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["todo"]
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    todo: todoSlice
  }))

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;