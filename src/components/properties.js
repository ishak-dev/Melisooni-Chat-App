import React from "react";
import "../style/properties.css";
import { IconName, FaSearch } from "react-icons/fa";
import userImg from "../images/profile1.jpg";

const Properties = ({ friendsList }) => {
  console.log(friendsList);
  let friendsContainer = friendsList.map((friend) => {
    return (
      <div className="properties-item">
        <div className="properties-info ">
          <img className="properties-info-img" src={userImg} />
          <div className="properties-info-details">
            <p className="properties-info-username">{friend.name}</p>
            <p className="activity active">Online</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="properties">
      <div className="properties-container">{friendsContainer}</div>
      <div className="search-users-bar">
        <input type={"text"}></input>
        <FaSearch className="search-users-btn" />
      </div>
    </div>
  );
};

export default Properties;
