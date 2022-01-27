import { shallow } from "enzyme"
import React from 'react'
import GifElement from "../../components/GifElement"

describe('Tests in <GifElement />', () => {

    const title = 'Un titulo'
    const image = 'https://localhost/algo.png'
    const wrapper = shallow(<GifElement title={title} url={image} />)

    test('Should show the correctly component', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('Should contains a title', () => {
        const paragraph = wrapper.find('.title')
        expect(paragraph.text().trim()).toBe(title)
    });
    test('Should contains a title and alt properties', () => {
        const gif = wrapper.find('.img')
        expect(gif.prop('image')).toBe(image)
        expect(gif.prop('alt')).toBe(title)
    });
    
})