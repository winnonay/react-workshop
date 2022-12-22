import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";


import "./styles.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "60462b3bc0c4ae404c2c0d6dfb41aa2b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // search for city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
   
  }

  if (weatherData.ready) {
    return (
      <div className="Parameters">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Enter city"
            auto-focus="on"
            className="weather-form"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="btn" />
        </form>
        <WeatherSearch data={weatherData}/>
        
      </div>
    );
  } else {
    search();
    //search right before so by default, it will know the city State is the default property
    return "Loading...";
  }
}