import React, { Component } from "react";

interface IProps {
  match: {
    params: {
      code: string;
    };
  };
}
interface IState {}

class Country extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return <span> Country {this.props.match.params.code}</span>;
  }
}
export default Country;
