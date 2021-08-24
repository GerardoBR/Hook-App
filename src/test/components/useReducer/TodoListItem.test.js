import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/09-useReducer/TodoListItem"
import { demoTodo } from "../../fixture/demoTodo"

describe('Pruebas sobre el compiente TodoListItem', () => {

    const hanldeToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
    <TodoListItem
        todo = {demoTodo[0]}
        index = {1 }
        hanldeToggle = { hanldeToggle }
        handleDelete = { handleDelete }
    />)

    test('debe de mostrarse correctamente  ', () => {
        expect ( wrapper ).toMatchSnapshot()
    })
    test('debe de llamar la funcion  handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodo[0].id )
    })
    test('debe de llamar la funcion  hanldeToggle', () => {
        wrapper.find('p').simulate('click');
        expect( hanldeToggle ).toHaveBeenCalledWith( demoTodo[0].id )
    })

    test('debe de mostrar el texto correctamente ', () => {
        const p =  wrapper.find('p');
        expect ( p.text().trim() ).toBe(`1. ${ demoTodo[0].desc }` )
    })

    test('debe de tener la clase complete, si el todo esta en true ', () => {
        const todo = demoTodo[0];
        todo.done = true
        const wrapper = shallow(
            <TodoListItem
                todo = {demoTodo[0]}
            />)
        // console.log(wrapper.html());
        expect ( wrapper.find('p').hasClass('complete')).toBe(true);
        
    })
    
    
})
