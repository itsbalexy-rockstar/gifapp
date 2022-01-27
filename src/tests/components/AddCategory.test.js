import React from 'react';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
import '@testing-library/jest-dom'

describe('Tests in <AddCategory />', () => {
    
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('Should show the correctly component', () => {
      expect(wrapper).toMatchSnapshot()
    });
    test('Should change the input box', () => {
        const input = wrapper.find('input')
        const value = 'Hola'

        input.simulate('change', {target: {value}})
    });
    test('Should not continue calling the function', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()
    });
    test('Should call setCategories function and cleaning the input box', () => {
        const value = 'Holi'
        const inputValue = wrapper.find('input').prop('value')
        wrapper.find('input').simulate('change', {target: {value}})
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )
        expect(inputValue).toBe('')
    });

})