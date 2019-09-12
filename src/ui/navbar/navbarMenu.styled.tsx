import React from "react";
import styled from "styled-components";
const NavbarMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const NavbarMenu = ({ children }: { children: any }) => (
  <NavbarMenuList>{children}</NavbarMenuList>
);
export default NavbarMenu;
