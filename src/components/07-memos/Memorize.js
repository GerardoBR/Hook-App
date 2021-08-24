import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';
import '../02-useEffect/effects.css'

export const Memorize = () => {
    
    const {counter, incremet }=useCounter(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1> Memorize </h1>
            <hr/>
            <p> counter: <Small value ={ counter }/> </p>
            <button 
                className="btn btn-primary"
                onClick ={ incremet }
            > Contar 
            </button>
            <button 
                className=" btn btn-outline-primary"
                onClick ={ ()=>{ setShow(!show)}}
            >
                Hide/Show { JSON.stringify( show)}
            </button>
        </div>
    )
}
