import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherSearch(props) {
    return (
        <div className="weatherSearch">
    <FormattedDate date={props.data.date} />
    <h1>{props.data.city}</h1>
   
   <div className="container">
    <div className="row">
        <div className="col-6">
        <img src={props.data.iconUrl} className="icon"/>
        </div>
    <div className="col-6">
    {props.data.description}
    </div>
   </div>
   </div>


    <ul>
      <li>{Math.round(props.data.temperature)}°C</li>
      <li>Humidity: {props.data.humidity}%</li>
      <li>Wind Speed:{Math.round(props.data.wind)} km/h</li>
    </ul>
    </div>
);
}