import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDays from "./WeatherForecastDays";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] =useState(null);
    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

        let apiKey = "60462b3bc0c4ae404c2c0d6dfb41aa2b";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);


if (loaded) {
    console.log(forecast);
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDays data={forecast[0]} />
           </div>
        </div>   
    </div>
    );
}
else {
    return "null";
}
}


   
