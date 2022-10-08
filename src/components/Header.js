import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  const mstore={
    
  color: "red",
  fontWeight:900
 
  }
  const imgStyle={
width:"130px",
height:"90px"

  }
  return (
    <MainHeader>
      <NavLink to="/">
        <img style={imgStyle} src="./images/RedApple.jpg" alt="my logo img" />
        {/* <h2 style={mstore}>Red Apple<h3>store</h3></h2> */}
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
