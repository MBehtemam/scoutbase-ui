import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/container/Home";
import Countries from "./pages/Countries/container/Countries";
import Country from "./pages/Countries/container/Country";
import NotFound from "./pages/NotFound/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/countries" component={Countries} />
    <Route exact path="/countries/:code" component={Country} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
