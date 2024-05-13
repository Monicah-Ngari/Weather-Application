import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/" onClick={convertToFahrenheit} className="link">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="units">°C |</span>{" "}
        <a href="/" onClick={convertToCelsius} className="link">
          °F
        </a>
      </div>
    );
  }
}
