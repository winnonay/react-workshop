import React from "react";
import Weather from "./Weather";

export default function WeatherIcon(props) {
  return <img src={props.data.iconUrl} alt="icon" />;
}