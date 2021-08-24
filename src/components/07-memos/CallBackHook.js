import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';
export const CallBackHook = () => {
    // El Callback Hook-> se usa para mandar una funcion a un componente hijo 
    const [counter, setCounter] = useState(10);
    // const increment =()=>{

    //     setCounter( counter + 1);
    // }
    const increment = useCallback( (num)=>{ 
        setCounter( c=> c + num); 
    },[setCounter ]);
    return (
        <div>
            <h1> Use CallBack Hook</h1>
            <hr/>
            <h1>{ counter } </h1>

            <ShowIncrement increment = { increment }/>
        </div>
    )
}
