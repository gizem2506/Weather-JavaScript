import React, { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";
import Sunny from "../../assets/svg/One.svg";
import Star from "../../assets/svg/Two.svg";
import Thunder from "../../assets/svg/There.svg";
import Cloudly from "../../assets/svg/Four.svg";
import "../Five/Five.css";

const Five = ({ forecast }) => {
  const [forecastData, setForecastData] = useState([
    { time: "", temperature: "", weatherType: "", windSpeed: "" },
  ]);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (forecast) {
      const manuallyAddedWindSpeeds = [
        "11.7km/h",
        "9.3km/h",
        "12km/h",
        "15km/h",
        "15km/h",
        "15km/h",
      ];

      const weatherTypes = ["one", "two", "there", "four", "five", "six"];

      const transformedData = Object.keys(forecast).map((time, index) => ({
        time: time,
        temperature: forecast[time],
        weatherType: weatherTypes[index],
        windSpeed: manuallyAddedWindSpeeds[index],
      }));

      setForecastData(transformedData);
    }
  }, [forecast]);

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "one":
        return Sunny;
      case "two":
        return Star;
      case "there":
        return Thunder;
      case "four":
        return Cloudly;
      case "five":
        return Thunder;
      case "six":
        return Cloudly;
      default:
        return null;
    }
  };

  const chartWidth = isMobile ? 300 : 420;

  return (
    <div className="five-content" style={{ padding: 20 }}>
      <LineChart width={chartWidth} height={100} data={forecastData}>
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#F0F0F0"
          dot={{ r: 1 }}
        />
        {forecastData.map((entry, index) => (
          <g
            key={index}
            transform={`translate(${index * (isMobile ? 50 : 70) + 10}, 0)`}
          >
            <text
              y={entry.temperature - 1}
              textAnchor="middle"
              fill="#F0F0F0"
              fontSize={10}
            >
              {entry.temperature}°
            </text>
            <image
              y={30}
              xlinkHref={getWeatherIcon(entry.weatherType)}
              height={60}
              width={20}
            />
            <text
              y={90}
              textAnchor="middle"
              fill="#F0F0F0"
              fontSize={10}
              transform={`translate(${index * (isMobile ? 1 : 1) + 10}, 0)`}
            >
              {entry.time}
            </text>
            <text
              y={100}
              textAnchor="middle"
              fill="#F0F0F0"
              fontSize={10}
              transform={`translate(${index * (isMobile ? 1 : 1) + 10}, 0)`}
            >
              {entry.windSpeed}
            </text>
          </g>
        ))}
      </LineChart>
    </div>
  );
};

export default Five;
