import React, { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";
import "../Five/Five.css";

const Five = ({ forecast }) => {
  const [forecastData, setForecastData] = useState([
    { time: "", temperature: "" },
  ]);

  // Determine if the screen width is considered as mobile
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (forecast) {
      const transformedData = Object.keys(forecast).map((time) => ({
        time: time,
        temperature: forecast[time],
      }));
      setForecastData(transformedData);
    }
  }, [forecast]);

  return (
    <div className="five-content">
      <LineChart width={isMobile ? 360 : 450} height={200} data={forecastData}>
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#F0F0F0"
          dot={{ r: 1 }}
        />
        {forecastData.map((entry, index) => (
          <text
            key={index}
            x={index * (isMobile ? 50 : 70)}
            y={entry.temperature - 1}
            textAnchor="middle"
            fill="#F0F0F0"
            fontSize={10}
          >
            {entry.temperature}
          </text>
        ))}
      </LineChart>
    </div>
  );
};

export default Five;
