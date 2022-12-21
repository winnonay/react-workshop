import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherSearch(props) {
    return (
        <div className="weatherSearch">
    <FormattedDate date={props.data.date} />
    <h1>{props.data.city}</h1>

    <ul>
        <li>  <img src={props.data.iconUrl} alt={props.data.description} className="float-left"/> </li>
      <li>{Math.round(props.data.temperature)}°C</li>
      <li>Humidity: {props.data.humidity}%</li>
      <li>Wind Speed:{Math.round(props.data.wind)} km/h</li>
    </ul>
    </div>
);
}