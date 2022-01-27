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
        if(inputValue.trim().length > 2){
            setCategories((categories) => [inputValue, ...categories])
            setInputValue('')
        }
    }

    return (
      <AddCategoryStyled>
          <form action="" onSubmit={handleSubmit}>
            <input 
            placeholder='Search'
            type="text" 
            value={inputValue}
            onChange={handleInputValue}
            id='categoryValue'
            />
          </form>
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
