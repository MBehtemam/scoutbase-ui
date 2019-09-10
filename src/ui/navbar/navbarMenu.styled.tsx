import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
const NavbarMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: ${props => props.theme.navbar.navbarMenuWidth || 2};
  justify-content: space-between;
  list-style: none;
`;

const NavbarMenu = ({ children }: { children: any }) => (
  <Router>
    <NavbarMenuList>{children}</NavbarMenuList>
  </Router>
);
export default NavbarMenu;
