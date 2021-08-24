import { mount, shallow } from "enzyme";
import { LoginScreen } from "../../../components/10-useContext/LoginScreen";
import { UserContext } from "../../../components/10-useContext/UserContext";

describe('Pruebas sobre el componetnte <LoginScreen/>', () => {
    const setsUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value ={{
            setsUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
        
    );
    test('DEBE DE MOSTRARSE CORRECTAMENTE ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        
        wrapper.find('button').prop('onClick')();
        expect ( setsUser ).toHaveBeenCalledWith({
            id: 123,
            name : 'Cesar'
        })
    });
    
    
})
