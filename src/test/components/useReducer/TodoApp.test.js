import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/09-useReducer/TodoApp";
import { demoTodo } from "../../fixture/demoTodo";
import { act } from '@testing-library/react'
describe(' Pruebas sobre <TodoApp/>', () => {

    const wrapper = shallow(
        <TodoApp
        />
    )
    Storage.prototype.setItem= jest.fn(()=>{});

    test('debe de hacer Matchsnapshoot', () => {
        expect ( wrapper ).toMatchSnapshot();
    });

    test('debe de agregar un TODO', () => {
        const wrapper  = mount(<TodoApp/>);
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
        })

        expect ( wrapper.find('h1').text().trim()).toBe('TodoApp : ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        // expect( localStorage.setItem ).toHaveBeenCalledWith({});
    })
    
    test('debe de eliminar un TODO', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        expect ( wrapper.find('h1').text().trim()).toBe('TodoApp : ( 1 )');

        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);
        expect ( wrapper.find('h1').text().trim()).toBe('TodoApp : ( 0 )');

    })
    
    
});

