import React from 'react';
import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifCollection from '../../components/GifCollection';
jest.mock('../../hooks/useFetchGifs')

describe('Test in <GifCollection />', () => {
    const category = 'One Punch'
    test('Should show the correctly component', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifCollection category={category} />)
        expect(wrapper).toMatchSnapshot()
    });
    test('Should show items when useFetch loaded the data', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything.jpg',
            title: 'Anything'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifCollection category={category} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifElement').length).toBe(gifs.length)
        
    });
    
})