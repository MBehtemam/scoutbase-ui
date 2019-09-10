import React, { Component } from "react";
import Routes from "./Routes";
import RootUI from "./ui/root/index.styled";
class App extends Component {
  render() {
    return (
      <RootUI>
        <Routes />
      </RootUI>
    );
  }
}
export default App;
