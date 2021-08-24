import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {todos ,hanldeToggle , handleDelete} ) => {
    return (
        <div>
            <ul className="list-group">
                {
                    
                    todos.map( ( todo, i ) =>(
                      <TodoListItem
                        todo = { todo }
                        handleDelete = { handleDelete }
                        hanldeToggle = { hanldeToggle }
                        index = { i+1 }
                        key ={ todo.id }

                      />
                        
                    ))
                }
            </ul> 
        </div>
    )
}
