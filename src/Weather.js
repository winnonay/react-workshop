import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Weds 7:00",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl:
        "http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.main.wind,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Parameters">
        <form>
          <input
            type="Search"
            placeholder="Enter city"
            auto-focus="on"
            className="weather-form"
          />
          <input type="submit" value="Search" className="btn" />
        </form>
        <div className="date-time">{weatherData.date}</div>
        <h1>{weatherData.city}</h1>
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
          className="float-left"
        />

        <ul>
          <li>{Math.round(weatherData.temperature)}°C</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind Speed:{weatherData.wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "60462b3bc0c4ae404c2c0d6dfb41aa2b";
    let city = "New York";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
    return "Loading...";
  }
}