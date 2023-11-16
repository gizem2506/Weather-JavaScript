import React from "react";
import "./App.css";
import Four from "./components/Four/Four";
import One from "./components/One/One";
import Zero from "./components/Zero/Zero";
import There from "./components/There/There";
import Two from "./components/Two/Two";
import Five from "./components/Five/Five";
import background from "../src/assets/svg/header-logo-long 1.png";
import data from "./mock/ReactProjectData.json";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="zero-container">
          <Zero
            date={data.date}
            city={data.city}
            type={data.type}
            degree={data.degree}
          />
        </div>
        <div className="logo-container">
          <div className="logo">
            <img src={background} alt="Logo" />
          </div>
          <div className="five-container">
            <Five forecast={data.forecast} />
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="one-container">
          <One />
        </div>
        <div className="two-there-container">
          <div className="two-container">
            <Two />
          </div>
          <div className="there-container">
            <There weeklyWeather={data.weeklyWeather} />
          </div>
        </div>
        <div className="four-container">
          <Four airCondition={data.airConditions} />
        </div>
      </div>
    </div>
  );
}

export default App;
