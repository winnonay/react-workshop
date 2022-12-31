import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherSearch(props) {
    return (
        <div className="weatherSearch">
    <FormattedDate date={props.data.date} />
    <h1>{props.data.city}</h1>

    <ul>
        <li>  <img src={props.data.iconUrl} alt="icon" /> </li>
        <li>{props.data.description}</li>
        <br />
      <li><WeatherTemperature celsius={props.data.temperature} /></li>
      <li>Humidity: {props.data.humidity}%</li>
      <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
    </ul>

    </div>
);
}