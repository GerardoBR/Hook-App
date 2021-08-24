// console.log("hola mundo")
const initialSatet =[{
    id : 1,
    todo : 'comprar jamon',
    done : false
}];


const todoReducer =(state = initialSatet, action)=>{

    if ( action?.type === 'agregar'){
        return [...state,action.payload];
    }
    return state;
}
 let todos = todoReducer();

//  Añadir un nuevo elemento al todo
// No usar push en react 
const newTodo ={
    id : 1,
    todo : 'comprar jugo',
    done : false
};

const addToDoAction ={
    type : 'agregar',
    payload : newTodo
}
todos = todoReducer( todos , addToDoAction);

 console.log(todos);
 