import React,{ useState } from 'react'
import './counter.css'
export const CounterApp = () => {

    const [state, setState] = useState( {
        counter1 : 10,
        counter2 : 20,
        counter3 : 20,
        counter4 : 20,
        counter5 : 20
    });
    // console.log(counter);
    const { counter1 , counter2 } = state;

    const handleCounter =()=>{
        setState( {
            ...state,
            counter1: counter1+1
        } );
    }

    return (
        <>
            {/* <h1> Counter { counter }</h1> */}
            <h1>Counter 1 { counter1 }</h1>
            <h1>Counter 2 { counter2 }</h1>
            <hr/>

            <button className="btn btn-primary" onClick= { handleCounter }>
                +1
            </button>
        </>
    )
}
