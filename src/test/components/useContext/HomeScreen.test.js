import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/10-useContext/HomeScreen"
import { UserContext } from "../../../components/10-useContext/UserContext";

describe('Pruebnas en HomeScreen', () => {
    const user ={
        name : 'Gerardo',
        email : 'gera@gmail.com'
    }
    const wrapper = mount(
        <UserContext.Provider value ={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
        
    );

    test('Debe de mostrar el componete', () => {
        expect ( wrapper ).toMatchSnapshot();
    })
    
})
