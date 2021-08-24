import { shallow } from "enzyme"
import { TodoList } from "../../../components/09-useReducer/TodoList";
import { demoTodo } from "../../fixture/demoTodo";


describe('Pruebas sobre el componente <TodoList>', () => {
    const hanldeToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
    <TodoList
        todos ={demoTodo}
        hanldeToggle ={ hanldeToggle}
        handleDelete = { handleDelete}
    />
    );
    test('Debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test('Debe de tener dos <TodoListeItem/> ', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodo.length);
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function));

    })
})
