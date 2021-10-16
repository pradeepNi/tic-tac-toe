import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>Tic Tac Toe</Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: black;
  color: white;
  padding: 0 50px;
`;
const Ul = styled.ul`
  font-size: 17px;
`;

const Li = styled.li``;
