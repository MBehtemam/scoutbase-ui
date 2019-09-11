import React from "react";
import styled from "styled-components";
const NavbarMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: ${props => props.theme.navbar.navbarMenuWidth || 2};
  justify-content: space-between;
  list-style: none;
`;

const NavbarMenu = ({ children }: { children: any }) => (
  <NavbarMenuList>{children}</NavbarMenuList>
);
export default NavbarMenu;
