import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import AmazingTheme from "./ui/themes/amazing";
import RootUI from "./ui/root/index.styled";
import MainNavbar from "./components/Navbar/MainNavbar";
import ApolloClient from "./apollo/client";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <ThemeProvider theme={AmazingTheme}>
          <RootUI>
            <MainNavbar />
            <Routes />
          </RootUI>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
export default App;
