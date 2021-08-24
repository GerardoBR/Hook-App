import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/05-useRef/RealExampleRef";

describe('Pruebas al componente Real ExampleRef', () => {
    test('Debe de mostrarse el componetnte snapshootMatch', () => {
        
        const wrapper = shallow (<RealExampleRef/>);
        expect ( wrapper.find('MultipleCustomHook').exists()).toBe(false);
        expect( wrapper ).toMatchSnapshot();
        
    });
    test('Debe de mostrarse MultipleCustomHook cuando cambie a true', () => {
        const wrapper = shallow (<RealExampleRef/>);
        wrapper.find('button').simulate('click');
        expect ( wrapper.find('MultipleCustomHook').exists()).toBe(true);
        
    });
    
})
