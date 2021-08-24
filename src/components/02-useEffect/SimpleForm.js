import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {
    const [formSstate, setFormState] = useState( {
        name : '',
        email: ''
    });
    const { name, email } = formSstate;
    useEffect ( ()=>{
        // console.log( "hey" );
    },[]);
    useEffect ( ()=>{
        // console.log( "formSstate" );
    },[formSstate]);
    useEffect ( ()=>{
        console.log( "email" );
    },[email]);
    const handleInputChange = ({ target})=>{
        // console.log(target.name)
        // console.log(e.target.value)
        setFormState({
            ...formSstate,
            [target.name] : target.value
        });
    }
    return (
        <>
        <h1>Use Effect</h1>
        <hr/>
            <div className="form-group">
                <input 
                type = "text"
                name = "name"
                className =" form-control"
                placeholder = "Ingresa tu nombre"
                autoComplete = "off"
                value = { name }
                onChange = { handleInputChange }
                />

            </div>
            <div className="form-group">
                <input 
                type = "text"
                name = "email"
                className =" form-control"
                placeholder = "@gmail.com"
                autoComplete = "off"
                value = { email }
                onChange = { handleInputChange }
                />

            </div>
            { (name === '123' && <Message/>)}
        </>
    )
}
