import React from "react";

export default function Weather() {
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
          ☀️ 29° C<p>Sunny</p>
        </div>
        <div className="col-6">
          PREDICTION ICONS
          <form>
            <input
              type="search"
              placeholder="Enter City"
              className="col-9"
            ></input>
            <input
              type="submit"
              placeholder="Search"
              className="col-3  btn-primary "
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
