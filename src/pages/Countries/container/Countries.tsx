import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CountriesMap from "../components/CountriesMap";

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
  return <span>Hope</span>;
}

export default Countries;
