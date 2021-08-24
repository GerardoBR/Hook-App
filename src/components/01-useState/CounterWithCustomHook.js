import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';
export const CounterWithCustomHook = () => {

    const {state:counter , decremet,incremet, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with hook: { counter }</h1>
            <hr/>
            <button onClick = { ()=> incremet(2) } className = "btn btn-primary">+1</button>
            <button onClick= { reset } className = "btn btn-danger "> Reset </button>
            <button onClick = { ()=> decremet(2) } className = "btn btn-warning">-1</button>
        </>
    )
}
