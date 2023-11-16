import React from "react";
import Logo from "../../assets/svg/header-logo.svg";
import Weather from "../../assets/svg/weather.svg";
import Explore from "../../assets/svg/Explore.svg";
import Location from "../../assets/svg/Location.svg";
import Settings from "../../assets/svg/Settings-alt.svg";
import "../One/One.css";

const One = () => {
  return (
    <div className="one-container">
      <div className="div">
        <img className="img-one" alt="Logo" src={Logo} />
        <div>
          <img className="img-two" alt="weather" src={Weather} />{" "}
          <p className="img-text-w">weather</p>
        </div>
        <div>
          <img
            className="img-there"
            alt="explore"
            src={Explore}
            color="#C4C3C1"
          />
          <p className="img-text">explore</p>
        </div>
        <div>
          <img
            className="img-there"
            alt="cities"
            src={Location}
            color="#C4C3C1"
          />
          <p className="img-text">cities</p>
        </div>
        <div>
          <img
            className="img-there"
            alt="settings"
            src={Settings}
            color="#C4C3C1"
          />
          <p className="img-text">settings</p>
        </div>
      </div>
    </div>
  );
};

export default One;
