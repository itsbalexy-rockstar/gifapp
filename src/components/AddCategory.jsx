import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('');
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories((categories) => [inputValue, ...categories])
    }

    return (
      <AddCategoryStyled onSubmit={handleSubmit}>
          <input 
          placeholder='Search'
          type="text" 
          value={inputValue}
          onChange={handleInputValue}
          id='categoryValue'
          />
      </AddCategoryStyled>
  );
};

const AddCategoryStyled = styled.form`
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 300px;
    input{
        width: 100%;
        background-color: transparent;
        color: #eeeeee;
        border: none;
        border-bottom: 1px solid #eeeeee;
        outline: 0px;
        font-size: 1rem;
        padding: .4rem;
    }
`
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
