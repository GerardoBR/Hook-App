import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/09-useReducer/TodoAdd"

describe('Pruebas sobre <TodoAdd/>', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
    <TodoAdd
        handleAddTodo ={ handleAddTodo }
    />
    )
    test('debe de mostrarse correctamente ', () => {
        
        expect ( wrapper ).toMatchSnapshot();
    });

    test('No debe de lllamar handleAddTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        
        formSubmit({preventDefault(){}});
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });
    test('debe de llamar HandlAddTodo', () => {
            // Con argumento
        const value = "aprender EXPRESS"
        wrapper.find('input').simulate('change',{
            target:{
                value : value ,
                name : 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id : expect.any(Number),
            desc: value,
            done : false
        });
        expect ( wrapper.find('input').prop('value') ).toBe('');
    })
    
    
    
})

