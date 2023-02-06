/*
 * @Description: 
 * @Author: zhh_e
 * @Date: 2023-02-03 10:53:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-02-06 11:49:31
 */
import React, { useState } from "react"
import { increment, decrement, incrementByAmount, selectCount, selectStatus, incrementAsync, incrementIfOdd } from "./counterSlice"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import PageHeader from "@/component/PageHeader"

export function Counter() {
    const count = useAppSelector(selectCount)
    const status = useAppSelector(selectStatus)
    const dispatch = useAppDispatch()

    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0
    return (
        <>
            <PageHeader title="Counter" />
            <div className="row flex justify-center font-bold">
                <button className="px-2 border radius" onClick={() => dispatch(decrement())}> - </button>
                <span className="px-2 mx-2">{count}</span>
                <button className="px-2 border radius" onClick={() => dispatch(increment())}> + </button>
            </div>

            <div className="row flex justify-center mt-4">
                <input type="text" value={incrementValue} onChange={(e) => setIncrementAmount(e.target.value)} />
                <button className="px-2 border radius ml-2" onClick={() => dispatch(incrementByAmount(incrementValue))}>增加{incrementValue}</button>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className="px-2 border radius ml-2"
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className="px-2 border radius ml-2"
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    {status === 'idle' ? 'Add Async' : status}
                </button>
                <button
                    className="px-2 border radius ml-2"
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </button>
            </div>
        </>
    )
}