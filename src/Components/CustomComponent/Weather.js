import React, { useEffect } from "react";
import { CCard, CCardHeader, CCardBody, Cul } from "@coreui/react";
import ReactWeather, { useWeatherBit } from "react-open-weather";

//scss
//import "./style.scss";

export default function Weather(props) {
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "3915890757a74e6d9df7b4f1a452ea54",
    lat: props.lat,
    lon: props.lon,
    lang: "en",
    unit: "M", // values are (M,S,I)
  });
  return (
    <div className="mt-2" style={{ maxHeight: "400px", padding: "10px" }}>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={props.city}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast={false}
      />
    </div>
  );
}
