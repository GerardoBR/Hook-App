import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ {description }, handleInputChange , reset] =useForm({
        description: ''
    });
    const handleAddSumbit =(e)=>{
        e.preventDefault();
        if(description.trim().length<=1){
            return ;
        }
        const newTodo = {
                id : new Date().getTime(),
                desc : description,
                done : false
        }
        // const actionAddTodo ={
        //     type : 'add',
        //     payload : newTodo
        // }
        handleAddTodo(newTodo);
        reset();
    }
    return (
        <>
            <h4>Agregar To do</h4>
                    <hr/>

                    <form onSubmit = { handleAddSumbit }>
                        <input 
                            type="text"  
                            className = " form-control "
                            name = "description" 
                            placeholder = "tarea a hacer" 
                            value = { description }
                            onChange = { handleInputChange }
                        />
                        <button 
                            type ="submit"
                            className = "  form-control btn btn-outline-primary mt-1 btn-block"
                        > 
                            Agregar
                        </button>
                    </form>
        </>
    )
}
