import { todoReducer } from "../../../components/09-useReducer/toReducer"
import { demoTodo } from "../../fixture/demoTodo";

describe('Pruebas en mi to Reducer', () => {
    
    test('debe de retornar el estado por defecto', () => {

       const state = todoReducer(demoTodo, {});  
       expect ( state ).toEqual(demoTodo);
    });

    test('debe de agregar un todo ', () => {
        const newTodo = {
            id : 3,
            desc :' Aprender Jest',
            done : false
        }
        const action  = {
            type : 'add',
            payload : newTodo
        }
         const state = todoReducer(demoTodo, action);  
        //  console.log(state);
        expect ( state.length ).toBe( 3);
        expect ( state ).toEqual( [...demoTodo,newTodo]);
    });
    test('debe de eliminar el todo que se envie ', () => {
        // action.payloa  = IdTodo
        const action  = {
            type : 'delete',
            payload : 2
        }
        const state = todoReducer(demoTodo, action);  
        // console.log( state );
        expect ( state.length ).toBe( 1 );
    });
    test('debe de marcar como true ', () => {
        const action  = {
            type : 'toggle',
            payload : 1
        }
        const state = todoReducer(demoTodo, action);  
        expect ( state[0].done ).toBe( true );
        expect ( state[1] ).toEqual( demoTodo[1] );

    })
    
    
    
    
})
