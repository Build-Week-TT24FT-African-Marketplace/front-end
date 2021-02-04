import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styled from "styled-components";


const NavStyled = styled.nav` 
  font-weight: bold;
  display: flex;
  justify-content:space-between;
  align-items:center;
  background-color:black;
  color:white;
  h1{
    width:35%;
    margin-left:-2em;
  }
`;

const BtnStyled = styled.div`
  border-radius: 8px;
  border: 1px solid white;
  padding:.5em 1.5em;
  font-weight: bold;
  font-size:.8em;
  color:white;
  background-color:red;

`;
const NavStyledDiv = styled.div`
    display:flex;
`;

const NavigationBar = () => {
  return (
  
      <NavStyled className="nav-bar">
        <h1>African Marketplace</h1>
        <NavStyledDiv>
        <Link to="/" style={{textDecoration:"none",}}>
        <BtnStyled>Home</BtnStyled>
        </Link>
        <Link to="/login" style={{textDecoration:"none",}}>
        <BtnStyled>Login</BtnStyled>
        </Link>
        <Link to="/signup" style={{textDecoration:"none",}}>
        <BtnStyled>Sign up</BtnStyled>
        </Link>
        </NavStyledDiv>
      </NavStyled>

  );
};

export default NavigationBar;
