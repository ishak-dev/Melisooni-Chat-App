import React from "react";
import "../style/properties.css";
import { IconName, FaSearch } from "react-icons/fa";
import userImg from "../images/profile1.jpg";

const Properties = () => {
  return (
    <div className="properties">
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
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity offline">Offline</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
        <div className="properties-item">
          <div className="properties-info ">
            <img className="properties-info-img" src={userImg} />
            <div className="properties-info-details">
              <p className="properties-info-username">Ishak Kazic</p>
              <p className="activity active">Online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="search-users-bar">
        <input type={"text"}></input>
        <FaSearch className="search-users-btn" />
      </div>
    </div>
  );
};

export default Properties;
