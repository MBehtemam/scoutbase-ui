import React from "react";
import Highcharts from "highcharts";
import Highmaps from "highcharts/highmaps";
import MapGeoJSON from "../../../data/world.json";
import {
  HighchartsMapChart,
  withHighmaps,
  Title,
  Subtitle,
  Tooltip,
  MapSeries,
  MapNavigation,
  Credits
} from "react-jsx-highmaps";

const CountriesMap = ({ data }) => (
  <HighchartsMapChart map={MapGeoJSON}>
    <Title>All Countries</Title>
    <Subtitle>Select one of Countries :)</Subtitle>
    <MapSeries
      name="Area"
      data={data}
      dataLabels={{
        enabled: true,
        color: "#FFFFFF",
        format: "point.name"
      }}
    />
    <MapNavigation>
      <MapNavigation.ZoomIn />
      <MapNavigation.ZoomOut />
    </MapNavigation>
    <Tooltip
      pointFormat="<b>Country Name :</b>{point.name}, <br/> <b>Continent:</b>{point.value.continent.name}: <br>
      {point.value.languages}"
    />

    <Credits />
  </HighchartsMapChart>
);
export default withHighmaps(CountriesMap, Highmaps);
