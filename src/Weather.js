import React, { useEffect, useState } from "react";
import axios from "axios";
import Day from "./Day";
import "./App.css";

export default function Weather() {
  const [city, setCity] = useState("Nairobi");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(city);
  }, [setCity]);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function fetchWeatherData(city) {
    let apiKey = "1a2a473db97faf41f0088oe8t98271ff";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(url)
      .then(function (response) {
        console.log("Response data:", response.data);
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching weather data:", error);
      });
  }

  function search(e) {
    e.preventDefault();
    fetchWeatherData(city);
  }

  return (
    <div className="Weather container mt-5">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter City"
          className=" "
          autoFocus="on"
          onChange={handleCityChange}
        ></input>

        <input
          type="submit"
          value="Search"
          className="btn col-3 btn-primary"
        ></input>
      </form>
      {weatherData && (
        <div className="mb-5 weather-app ">
          <div className=" city-decsription">
            <h1>{weatherData.city}</h1>
            <ul className="weatherDay">
              <li>
                <Day timestamp={weatherData.time} />
              </li>
              <li>
                {" "}
                {weatherData.condition.description.charAt(0).toUpperCase() +
                  weatherData.condition.description.slice(1)}
              </li>
            </ul>
            <p>
              <strong> {weatherData.date}</strong>
            </p>
          </div>
          <div className="weather-description">
            <ul>
              <li>
                {" "}
                <strong> Humidity:{weatherData.temperature.humidity}%</strong>
              </li>
              <li>
                {" "}
                <strong>
                  Wind:{Math.round(weatherData.wind.speed)}
                  {""}km/h
                </strong>
              </li>
            </ul>
          </div>
          <div className="">
            <img src={weatherData.condition.icon_url} alt="Weather Icon" />
            <span className="temp">
              {Math.round(weatherData.temperature.current)}
            </span>
            <span className="units">° C</span>
            <p>{weatherData.description}</p>
          </div>
        </div>
      )}
      <div className=" mb-5 weather-details">
        <div>PREDICTION ICONS</div>
      </div>
    </div>
  );
}
