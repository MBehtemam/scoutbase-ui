import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function Countries() {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        id
        name
        languages {
          name
          code
          native
        }
        continent {
          id
          name
          code
        }
      }
    }
  `);
  if (loading) return <p>Loading .....</p>;
  if (error) return <p>Error :(</p>;
  return data.countries.map((country: any) => (
    <div key={country.id}>
      <h3>{country.name}</h3>
    </div>
  ));
}

export default Countries;
