import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas sobre el Hook UseForm', () => {
    const initialForm ={
        id : 123,
        name : 'Gerardo',
        email : ' gerardo@gmail.com'
    }
    
    test('debe mostrar el valor initialForm ', () => {
        // Hacemos el render der Hook 
        const { result } = renderHook(()=> useForm(initialForm));
        let [data,reset ,handleInputChange ] = result.current;

        expect( data ).toEqual(initialForm);
        expect( typeof reset ).toBe('function');
        expect( typeof handleInputChange ).toBe('function');
        // console.log(data);

    });
    test('debe de cambiar el valor del formulario cambiar el (name) ', () => {

        const { result }= renderHook( ()=> useForm(initialForm));
        let [ ,handleInputChange] = result.current;
        act(()=> {
            handleInputChange({
                target:{
                    name : 'name',
                    value : 'Juan'
                
                }
                
            })
        })
        let [values ] = result.current;
        expect( values ).toEqual({
           ...values,
           name:'Juan'
        });
        // console.log(values)
    });



    
    test('debe de restablecer el formulario con REST', () => {
        const { result }= renderHook( ()=> useForm(initialForm));
        let [ ,handleInputChange,reset] = result.current;
        act(()=> {
            handleInputChange({
                target:{
                    name : 'name',
                    value : 'Juan'
                
                }
                
            })
            reset ();
        })
        let [values ] = result.current;
        expect( values ).toEqual(initialForm);
    })
    
    
    
})
