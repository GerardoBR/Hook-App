import React, { useRef } from 'react';
import '../02-useEffect/effects.css';
export const FocusScreem = () => {

    const inputref = useRef();
    


    const handleClic = ()=>{
        inputref.current.select();
        console.log(inputref);
    }
    return (
        <div>
            <h1> FocusScreem </h1>
            <input 
            type= "text" 
            placeholder="Nombre"
             className="form-control"  
             ref = { inputref }/>
            <button className="btn btn-outline-primary mt-5"
            onClick = { handleClic}>Focus</button>
        </div>
    )
}
