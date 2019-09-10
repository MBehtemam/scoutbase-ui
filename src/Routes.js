import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/container/Home";
import CountriesIndex from "./pages/Countries/container/CountriesIndex";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/countries" component={CountriesIndex} />
    </Switch>
  </Router>
);
export default Routes;
