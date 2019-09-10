import React, { Component } from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import AmazingTheme from "./ui/themes/amazing";
import RootUI from "./ui/root/index.styled";
import MainNavbar from "./components/Navbar/MainNavbar";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={AmazingTheme}>
        <RootUI>
          <MainNavbar />
          <Routes />
        </RootUI>
      </ThemeProvider>
    );
  }
}
export default App;
