import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_COUNTRY = gql`
  query country($code: String!) {
    country(code: $code) {
      id
      name
      currency
      phone
    }
  }
`;

function Country(props: any) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: props.match.params.code }
  });
  if (loading) return <p>Loading........</p>;
  if (error) {
    return <p>Something bad happen</p>;
  }
  return (
    <p>
      <b>Currency</b>:{data.country.currency}
      <br />
      <b>Phone</b>:{data.country.phone}
      <br />
    </p>
  );
}

export default Country;
