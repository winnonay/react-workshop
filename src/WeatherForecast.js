import React from "react";
import WeatherSearch from "./Weather";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    return <div className="WeatherForecast">
        <div className="row">
            <div className="col-2">
                <div className="Weather-days">Monday</div>
                <img src={props.data.iconUrl} alt="icon" />
                <div className="Weather-temp">
                    <span className="Weather-tempmax">Max 19°C</span>
                    <span className="Weather-tempmin"> Min 10°C</span>
                </div>
           </div>
   
        </div>   
    </div>;
}