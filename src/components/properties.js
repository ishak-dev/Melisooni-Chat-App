import React from "react";
import "../style/properties.css";
import { IconName } from "react-icons/fa";
import userImg from "../images/profile1.jpg";

const Properties = () => {
  return (
    <div className="properties-container">
      <div className="properties-item">
        <div className="properties-info ">
          <img className="properties-info-img" src={userImg} />
          <div className="properties-info-details">
            <p className="properties-info-username">Ishak Kazic</p>
            <p className="activity active">Online</p>
          </div>
        </div>
      </div>
      <div className="properties-item">2</div>
      <div className="properties-item">3</div>
      <div className="properties-item">4</div>
      <div className="properties-item">5</div>
      <div className="properties-item">6</div>
    </div>
  );
};

export default Properties;
