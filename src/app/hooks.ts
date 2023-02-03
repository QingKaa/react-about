/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-03 10:06:44
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-03 10:07:26
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;