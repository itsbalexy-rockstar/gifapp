import React from "react";
import styled from "styled-components";
import AddCategory from "./AddCategory";
import PropTypes from 'prop-types'

const Navbar = ({setCategories}) => {
  const logo = "<GifApp />";
  return (
    <NavbarStyled>
      <div className="logo">
        <h1>{logo}</h1>
      </div>
      <AddCategory setCategories={setCategories}/>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  background-color: #041562;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  .logo {
    padding: 0.5rem;
    margin: 0 1rem;
    font-size: 0.7rem;
    color: #eeeeee;
    cursor: pointer;
    &:hover {
      color: #da1212;
      transform: scale(1.2);
      transition: all 0.5s ease-in-out;
    }
  }
`;

Navbar.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default Navbar;
