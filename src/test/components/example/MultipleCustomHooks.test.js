import { shallow } from "enzyme"
import { MultipleCustomHook } from "../../../components/example/MultipleCustomHook"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");
describe('Pruebas en Multimple custom hooks', () => {

    
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })



    test('debe mostrarse correctamente el componente ', () => {
        useFetch.mockReturnValue({
            data : null,
            loading : true,
            error : null   
        })
        const wrapper = shallow (<MultipleCustomHook/>);
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data : [{
                author: 'Gerardo',
                quote : 'El hambre es cabrona'
            }],
            loading : false,
            error : null   
        })
        const wrapper = shallow (<MultipleCustomHook/>);
        expect( wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('p').text().trim()).toBe('El hambre es cabrona');
        expect( wrapper.find('figcaption').text().trim()).toBe('Gerardo');
        // console.log(wrapper.find('p').text().trim())
        // console.log( wrapper.html());
    })
    
})
