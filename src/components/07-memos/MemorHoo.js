import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const {counter, incremet }=useCounter(90);
    const [show, setShow] = useState(false);
   
    const memoProces0Pesado = useMemo(() => procesoPesado ( counter ), [ counter ])
    return (
        <div>
            <h1>Memo Hook  </h1>
            <h3>  counter: <small>{ counter } </small> </h3>
            <hr/>
            <p>{ memoProces0Pesado }</p>
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
