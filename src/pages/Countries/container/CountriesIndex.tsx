import React from "react";
import { Route, Switch } from "react-router-dom";
import Country from "./Country";
import Countries from "./Countries";
interface IProps {
  match: {
    path: string;
    params?: {
      id?: string;
    };
  };
}
const CountriesIndex = ({ match: { path } }: IProps) => (
  <Switch>
    <Route exact path="/countries" component={Countries} />
    <Route exact path="/:code" component={Country} />
  </Switch>
);

export default CountriesIndex;
