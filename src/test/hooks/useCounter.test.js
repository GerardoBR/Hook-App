import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from "../../hooks/useCounter"
describe('Pruebas sobre el hook useCounter.js', () => {
    test('Debe de retornar valores por defecto del compionente ', () => {

        const { result }= renderHook( ()=> useCounter());
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.incremet ).toBe('function');
        expect(typeof   result.current.decremet ).toBe('function');


    });
    test('Debe de retornar el counter en 100  ', () => {

        const { result }= renderHook( ()=> useCounter(100));
        expect( result.current.counter ).toBe(100);
    });
    test('Debe de incrementar el counter en +1  ', () => {
        const { result }= renderHook( ()=> useCounter());
        const {incremet } = result.current;
        // Este act viene de testing library / rect-hooks que se descarga la dependedncia 

        act(()=> {
            incremet()
        })
        const { counter } = result.current;
        expect( result.current.counter ).toBe(11);
    })
    test('Debe de decrementar  el counter en -1  ', () => {
        const { result }= renderHook( ()=> useCounter(100));
        const {decremet } = result.current;
        // Este act viene de testing library / rect-hooks que se descarga la dependedncia 

        act(()=> {
            decremet()
        })
        const { counter } = result.current;
        expect( result.current.counter ).toBe(99);
    })
    test('Debe de resetear el valor   ', () => {
        const { result }= renderHook( ()=> useCounter(100));
        const {incremet,reset } = result.current;
        // Este act viene de testing library / rect-hooks que se descarga la dependedncia 

        act(()=> {
            incremet()
            reset();
        })
        const { counter } = result.current;
        expect( result.current.counter ).toBe(100);
    })
    
    
})
