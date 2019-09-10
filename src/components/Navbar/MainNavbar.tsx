import React from "react";
import Navbar from "../../ui/navbar/navbar.styled";
import NavbarBrand from "../../ui/navbar/navbarBrand.styled";
import NavbarMenu from "../../ui/navbar/navbarMenu.styled";
import NavbarMenuItem from "../../ui/navbar/navbarMenuItem";

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>Scoutbase</NavbarBrand>
        <NavbarMenu>
          <NavbarMenuItem to="/countries">Countries</NavbarMenuItem>
          <NavbarMenuItem to="/movies">Movies</NavbarMenuItem>
          <NavbarMenuItem to="/actors">Actors</NavbarMenuItem>
          <NavbarMenuItem to="/directors">Directors</NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}
export default MainNavbar;
