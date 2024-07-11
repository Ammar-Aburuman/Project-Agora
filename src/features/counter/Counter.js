import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement,increment } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <p>{count}</p>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>increment</button>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>decrement</button>
            </div>
        </div>
    )
}