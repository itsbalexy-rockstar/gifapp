import React from 'react';
import GifApp from '../GifApp'
const { shallow } = require("enzyme");

describe('Test in <GifApp />', () => {
    test('Should show the correctly component', () => {
      const wrapper = shallow(<GifApp />)
      expect(wrapper).toMatchSnapshot()
    });
    test('Should show a categories list', () => {
        const categories = ['One Punch', 'Hola', 'Rick and Morty']
        const wrapper = shallow(<GifApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifCollection').length).toBe(categories.length)
      });
    
})