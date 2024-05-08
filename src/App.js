import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="card-text text-center">
        This project was coded by{" "}
        <a href="https://github.com/Monicah-Ngari" target="blank" rel="github">
          Monicah Ngari
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Monicah-Ngari/Weather-Application"
          target="-blank"
          rel="netlify"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://dapper-bavarois-9b6fea.netlify.app/"
          target="blank"
          rel="project"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
