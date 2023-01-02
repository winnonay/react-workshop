import React, {useState} from "react";
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

    function handleForecast(){
        let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }   



if (loaded) {
    console.log(forecast);
    return (
        <div className="WeatherForecast">
        <div className="row">
            
                {forecast.map((forecastDay,index) => {
                    if (index < 7) {
                  return (
                  <div className="col" key={index}>
                    <WeatherForecastDays data={forecastDay} />
                    </div>
                  );
                    }
                })}
        </div>   
    </div>
    );
}
else {
    handleForecast()
    return "null";
}
}