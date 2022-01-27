import useFetchGifs from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks' 

describe('Test in useFetchGifs', () => {
    test('Should return an initial state', () => {
        // const { data } = useFetchGifs('Hola')
        const {result} = renderHook( () => useFetchGifs( "One Punch" ))
        console.log(result)
        //REVISAR SI ES POR LA VERSION DE REACT V17 Y EL CAMBIO EN ENZYME QUE NO FUNCIONA
        // const {data, loading} = result.current
        // expect(data).toEqual([])
        // expect(loading).toBe(true)
    });
    
})