import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('Pruebas sobre el hookApp', () => {
    test('Debe hacer snapshoot', () => {
        
        const wrapper = shallow(<HookApp/>);

        expect( wrapper ).toMatchSnapshot();
    })
    
})
