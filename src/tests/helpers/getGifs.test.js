import { getGifs } from '../../helpers/getGifs'

describe('Test in getGifs fetch', () => {
    test('Should return 12 elements', async() => {
        const gifs = await getGifs('Hola')
        expect(gifs.length).toBe(12)
    });
    test('Should return 0 elements', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    });
    
})