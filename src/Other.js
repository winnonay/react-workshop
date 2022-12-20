import React from "react";

export default function Other() {
  return (
    <div className="Other">
      <span className="temperature" id="temperature"></span>°C/
      <span className="fahrenheitConvert" id="fahrenheitConvert"></span>°F
      <ul>
        <li>
          <span className="icon" id="icon"></span>
        </li>
        <li className="description" id="description">
          Cloudy
        </li>
        <li>
          Humidity: <span id="humidity"></span>%
        </li>
        <li>
          Wind Speed:
          <span id="wind"></span> km/h
        </li>
      </ul>
    </div>
  );
}
