import React from "react";
import ClockIcon from "../../assets/svg/Clock.svg";
import Real from "../../assets/svg/Real.svg";
import Rain from "../../assets/svg/Rain.svg";
import UV from "../../assets/svg/UV.svg";
import Wind from "../../assets/svg/Wind.svg";
import "../Four/Four.css";

const Four = ({ airCondition }) => {
  const [realFeel, rainChance, windSpeed, uvIndex] = airCondition.split("::");

  return (
    <div className="div">
      <div className="date-content">
        <img className="clock" alt="Clock" src={ClockIcon} />
        <p className="date">8:00 PM GMT</p>
      </div>
      <p className="text-two">AIR CONDITIONS</p>
      <div className="real-container">
        {renderWeatherItem(Real, "Real Feel", `${realFeel}°`)}
        {renderWeatherItem(Wind, "Wind", `${windSpeed} km/hr`)}
      </div>
      <div className="real-container">
        {renderWeatherItem(Rain, "Change of Rain", `${rainChance}%`)}
        {renderWeatherItem(UV, "UV Index", `${uvIndex}`)}
      </div>
    </div>
  );
};

const renderWeatherItem = (icon, title, value) => (
  <div className="real-content">
    <img className="img" alt={title} src={icon} />
    <div className="real-text">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  </div>
);

export default Four;
