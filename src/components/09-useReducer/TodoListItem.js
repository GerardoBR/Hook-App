import React from 'react'

export const TodoListItem = ( {todo , hanldeToggle , handleDelete ,index} ) => {
    return (
        <li 
            key ={ todo.id }
            className="list-group-item"
        > 
        <p 
            className={ `${todo.done  && 'complete'}` }
            onClick = { ()=>hanldeToggle(todo.id)}
        
        >{ index }. { todo.desc }</p>
            <button className= "btn btn-danger" onClick= { ()=>{ handleDelete(todo.id)  } }> Borrar</button>
        </li>
    )
}
