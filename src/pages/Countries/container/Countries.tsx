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
        code
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
  const countryData = data.countries.map((country: any) => [
    country.code.toLowerCase(),
    {
      ...country,
      languages: country.languages
        .map(
          (language: any) =>
            `<b>Language:</b> ${language.name} - <b>Native :</b>${language.native} `
        )
        .join("<br/>")
    }
  ]);
  console.log(countryData);
  return <CountriesMap data={countryData} />;
}

export default Countries;
