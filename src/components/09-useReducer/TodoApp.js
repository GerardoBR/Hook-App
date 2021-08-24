import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './toReducer';
import './todo.css';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init =()=>{
    // return [{
    //     id : new Date().getTime(),
    //     desc : ' aprender React',
    //     done : false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || [];

}
export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    

    // console.log(description);
    useEffect(()=>{
        localStorage.setItem('todos' , JSON.stringify(todos));
    },[todos]);

    const handleDelete = (todoid)=>{
        const actionDelete={
            type: 'delete',
            payload : todoid
        }
        dispatch( actionDelete );
    }
    const hanldeToggle=(todoid)=>{

        dispatch({
            type: 'toggle',
            payload : todoid
        })
    }

    // const handleAddSumbit =(e)=>{
    //     e.preventDefault();
        
    //     const newTodo = {
    //         id : new Date().getTime(),
    //         desc : description,
    //         done : false
    //     }
    //     const actionAddTodo ={
    //         type : 'add',
    //         payload : newTodo
    //     }
    //     dispatch(actionAddTodo);
    //     reset();
    // }
    const handleAddTodo  = ( newTodo)=>{

        dispatch({
            type : 'add',
            payload : newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp : ( { todos.length } )</h1>
            <hr/>
            <div className=" row">
                <div className = "col-6">
                    <TodoList 
                        todos = { todos }
                        hanldeToggle = { hanldeToggle }
                        handleDelete = { handleDelete }
                       
                    
                    />
                </div>
                <div className="col-6">
                    <TodoAdd 
                        handleAddTodo  = { handleAddTodo }
                    />
                </div>
                
            </div>
        </div>
    )
}


