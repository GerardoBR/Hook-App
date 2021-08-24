// import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHook = () => {

    const { counter , incremet } = useCounter(1);
    // console.log(counter);

    const {loading, error , data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    // !!  sobre algun valor null es igual a !!null->false  pero si se evalua asi !null->true
    // la evaluacio es  !!data ( !!null) entonces muestra data 
    const {author ,quote } = (!!data && data.length >0 ) && data[0];
    // console.log(author ,quote);
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {/* Ternario */}
            {
                loading? (
                    <div className="alert alert-primary text-center" role="alert">
                            Loading...
                    </div>
                )
                :
                <blockquote className="blockquote text-right">
                    <blockquote className="blockquote">
                        <p>{ quote } </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                    {author}
                    </figcaption>
                </blockquote>

            }
             <button className = "btn btn-primary" onClick = { incremet }> Siguiente frase</button>
        </div>
       
    )
}
