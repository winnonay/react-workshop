import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecastDays(props) {
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature};`

    }
    function day() {
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay();
        let days = [ "Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
        return days[day];
    }
    return (
        <div> 
        <div className="Weather-days">{day()}</div>
             <WeatherIcon code={props.data.weather[0].icon} />
             <div className="Weather-temp">
                 <span className="Weather-tempmax">{maxTemp()}°C</span>
                 <span className="Weather-tempmin"> {minTemp()}°C</span>
             </div>
             </div>
       
    );
}