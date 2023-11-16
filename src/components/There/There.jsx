import React, { useState } from "react";
import Image1 from "../../assets/svg/Image1.svg";
import Image2 from "../../assets/svg/Image2.svg";
import Image3 from "../../assets/svg/Image3.svg";
import Image4 from "../../assets/svg/Image4.svg";
import Image5 from "../../assets/svg/Image5.svg";
import Left from "../../assets/svg/Left.svg";
import Right from "../../assets/svg/Right.svg";
import "../There/There.css";

const There = ({ weeklyWeather }) => {
  const [currentData, setCurrentData] = useState(weeklyWeather.current);
  const [currentName, setCurrentName] = useState("current");

  const imageUrl = (imageName) => {
    switch (imageName) {
      case "sunny cloudy":
        return Image1;
      case "sunny":
        return Image2;
      case "rainy":
        return Image3;
      case "sunny rainy":
        return Image4;
      case "thunder":
        return Image5;
      default:
        return null;
    }
  };

  const handleNavigation = (direction) => {
    if (currentName === direction) return null;

    if (currentName === "current") {
      setCurrentData(weeklyWeather[direction]);
      setCurrentName(direction);
    } else {
      setCurrentData(weeklyWeather.current);
      setCurrentName("current");
    }
  };

  return (
    <div className="div-day">
      {Object.keys(currentData).map((day) => (
        <div
          key={day}
          className={`div ${currentData[day].type} ${
            currentData[day].type === "sunny" ? "weather-background" : ""
          }`}
        >
          <div className="mobile-container">
            <p className="text">{day.toUpperCase()}</p>
            <img
              className="img"
              alt="There "
              src={imageUrl(currentData[day].type)}
            />
            <p className="p">{`${currentData[day].degree}°`}</p>
          </div>
        </div>
      ))}
      <div
        style={{
          flex: 0.1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button onClick={() => handleNavigation("previous")}>
            <img className="" alt="Left Icon" src={Left} />
          </button>
        </div>
        <div>
          <button onClick={() => handleNavigation("next")}>
            <img className="" alt="Right Icon" src={Right} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default There;
