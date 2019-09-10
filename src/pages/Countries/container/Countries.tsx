import React, { Component } from "react";

interface IProps {
  match: {
    params: {
      id?: string;
    };
  };
}
interface IState {}

class Countries extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return <span>Countries</span>;
  }
}
export default Countries;
