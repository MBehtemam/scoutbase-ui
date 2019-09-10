import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/container/Home";
import CountriesIndex from "./pages/Countries/container/CountriesIndex";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/countries" component={CountriesIndex} />
  </Router>
);
export default Routes;
