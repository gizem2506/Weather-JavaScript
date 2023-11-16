import React from "react";
import LocationIcon from "../../assets/svg/Location.svg";
import WeatherIcon from "../../assets/svg/cloudy.svg";
import "../Zero/Zero.css";

const Zero = ({ date, city, type, degree }) => {
  return (
    <div className="zero-container">
      <div className="zero-content-two">
        <div className="zero-content">
          <img src={LocationIcon} className="zero-icon" alt="Location Icon" />
          <p className="zero-city">{city}</p>
        </div>
        <p className="zero-weather">{type}</p>
        <p className="zero-temperature">{`${degree}°C`}</p>
      </div>
      <div className="zero-content-there">
        <img
          src={WeatherIcon}
          className="zero-weather-one shake-animation"
          alt="Weather Icon"
        />
        <p className="zero-weather-text">{date}</p>
      </div>
    </div>
  );
};

export default Zero;
