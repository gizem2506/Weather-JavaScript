import React, { useEffect } from "react";
import LocationIcon from "../../assets/svg/Location.svg";
import WeatherIcon from "../../assets/svg/cloudy.svg";
import soundFile from "../../assets/sound/thunder.mp3";
import "../Zero/Zero.css";

const Zero = ({ date, city, type, degree }) => {
  useEffect(() => {
    const audio = new Audio(soundFile);

    const handleAudioEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    const canAutoplay =
      typeof audio.play === "function" && audio.autoplay === true;

    const startAudio = () => {
      audio.play();
    };

    audio.addEventListener("ended", handleAudioEnded);

    if (canAutoplay) {
      startAudio();
    } else {
      const handleFirstInteraction = () => {
        startAudio();
        window.removeEventListener("click", handleFirstInteraction);
      };

      window.addEventListener("click", handleFirstInteraction);
    }

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

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
