import React, { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";
import "../Five/Five.css";
import Sunny from "../../assets/svg/sunnycloudy.svg";
import Star from "../../assets/svg/star.svg";
import Thunder from "../../assets/svg/thundercloudy.svg";
import Cloudly from "../../assets/svg/cloudystar.svg";

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

      const transformedData = Object.keys(forecast).map((time, index) => ({
        time: time,
        temperature: forecast[time],
        weatherType: "sunny",
        windSpeed: manuallyAddedWindSpeeds[index],
      }));

      setForecastData(transformedData);
    }
  }, [forecast]);

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "sunny":
        return Star;
      case "star":
        return Star;
      case "thunder":
        return Thunder;
      case "cloudy":
        return Cloudly;
      default:
        return Sunny;
    }
  };

  const chartWidth = isMobile ? 312 : 420;

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
            transform={`translate(${index * (isMobile ? 50 : 70)}, 0)`}
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
            <text y={90} textAnchor="middle" fill="#F0F0F0" fontSize={10}>
              {entry.time}
            </text>
            <text y={100} textAnchor="middle" fill="#F0F0F0" fontSize={10}>
              {entry.windSpeed}
            </text>
          </g>
        ))}
      </LineChart>
    </div>
  );
};

export default Five;
