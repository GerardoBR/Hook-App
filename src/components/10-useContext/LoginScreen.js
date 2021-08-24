import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    // leer context 
    //  ocupar el setUser 
    const {setsUser, user} = useContext(UserContext)
    return (
        <div>
            <h1> Login Screen</h1>
            <hr/>
            <button className="btn btn-primary" onClick= {()=> setsUser({
                id: 123,
                name : 'Cesar'
            })}>Login</button>
        </div>
    )
}
