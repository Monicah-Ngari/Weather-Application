import React from "react";

const Day = ({ timestamp }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(timestamp * 1000);
  const dayOfWeek = days[date.getDay()];

  return <span>{dayOfWeek}</span>;
};

export default Day;
