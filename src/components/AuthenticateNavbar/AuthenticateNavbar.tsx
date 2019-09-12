import React from "react";
import NavbarMenu from "../../ui/navbar/navbarMenu.styled";
import NavbarMenuItem from "../../ui/navbar/navbarMenuItem";

const AuthenticateNavbar = () => (
  <NavbarMenu>
    <NavbarMenuItem to="/signin">SignIn</NavbarMenuItem>
  </NavbarMenu>
);
export default AuthenticateNavbar;
