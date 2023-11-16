import React from "react";
import Heart from "../../assets/svg/Heart.svg";
import "../Two/Two.css";

const Two = () => {
  const activityImages = [
    require("../../assets/svg/Photo1.svg"),
    require("../../assets/svg/Photo2.svg"),
    require("../../assets/svg/Photo3.svg"),
    require("../../assets/svg/Photo4.svg"),
  ];

  const renderActivityImages = () => {
    return activityImages.map((image, index) => (
      <img
        key={index}
        className="img zoom"
        alt={` ${index + 1}`}
        src={image.default}
      />
    ));
  };

  return (
    <div>
      <div className="two-content">
        <img className="heart" alt="Heart" src={Heart} />
        <div className="two-text">Activities in your area</div>
      </div>
      <div className="div">{renderActivityImages()}</div>
    </div>
  );
};

export default Two;
