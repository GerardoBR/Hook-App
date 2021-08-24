// import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
// import '../02-useEffect/effects.css';
import './layout.css';
export const Layout = () => {

    const { counter , incremet } = useCounter(1);
    // console.log(counter);

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    // !!  sobre algun valor null es igual a !!null->false  pero si se evalua asi !null->true
    // la evaluacio es  !!data ( !!null) entonces muestra data 
    const { quote } = (!!data && data.length >0 ) && data[0];
    // console.log(author ,quote);
    const [boxSize, setBozSize] = useState()
    const pTag = useRef()
    useLayoutEffect(() => {

        setBozSize(pTag.current.getBoundingClientRect());

    }, [quote]);
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            {/* Ternario */}
            
                <blockquote className="blockquote text-right">
                    <blockquote className="blockquote">
                        <p 
                            className="mb-0"
                            ref= { pTag }
                        >
                            { quote } 
                        </p>
                        
                    </blockquote>
                   
                </blockquote>
                <pre>
                    {
                        JSON.stringify(boxSize , null, 3)
                    }
                </pre>
             <button className = "btn btn-primary" onClick = { incremet }> Siguiente frase</button>
        </div>
       
    )
}
