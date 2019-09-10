import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavbarMenuItemParent = styled.li``;
const NavbarMenuItemLink = styled(Link)`
  color: ${props => props.theme.navbar.linkColor};
  font-weight: bold;
  text-decoration: none;
`;
const NavbarMenuItem = (props: { to: string; children: any }) => (
  <NavbarMenuItemParent>
    <NavbarMenuItemLink to={props.to}>{props.children}</NavbarMenuItemLink>
  </NavbarMenuItemParent>
);
export default NavbarMenuItem;
