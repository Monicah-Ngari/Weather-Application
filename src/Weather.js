import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    return console.log(response.data);
  }

  let apiKey = "1a2a473db97faf41f0088oe8t98271ff";
  let city = "Nairobi";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(url).then(handleResponse);

  return (
    <div className="Weather container mt-5">
      <div className="row mb-5 weather-app ">
        <div className="col-6 city-decsription">
          <h1>Nairobi</h1>
          <p>
            <strong>Teusday </strong>
          </p>
          <p>
            <strong> 20 Jun 2002</strong>
          </p>
        </div>
        <div className="col-6 weather-description">
          <ul>
            <li>
              <strong>PRECIPITATION 0%</strong>
            </li>
            <li>
              {" "}
              <strong> HUMIDITY 42%</strong>
            </li>
            <li>
              {" "}
              <strong>WIND 3km/h</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mb-5 weather-details">
        <div className="col-6">
          <span>
            <img
              src="data:image/png;base64,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"
              alt="icon"
            />
          </span>
          <span className="temp">29</span>
          <span className="units">° C</span>
          <p>Sunny</p>
        </div>
        <div className="col-6">
          PREDICTION ICONS
          <form>
            <input
              type="search"
              placeholder="Enter City"
              className=" col-9  bg-light"
            ></input>
            <input
              type="submit"
              placeholder="Search"
              className=" btn col-3  btn-primary "
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
