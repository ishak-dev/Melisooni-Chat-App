import React from "react";
import "../style/properties.css";
import { IconName, FaSearch, FaUserPlus } from "react-icons/fa";
import userImg from "../images/profile1.jpg";
import SearchFriend from "./search-friends-component";

const Properties = ({ friendsList, user }) => {
  console.log(friendsList);
  let friendsContainer = friendsList.map((friend) => {
    return (
      <div className="properties-item">
        <div className="properties-info ">
          <img className="properties-info-img" src={userImg} />
          <div className="properties-info-details">
            <p className="properties-info-username">{friend.name}</p>
            <p className="activity active">...</p>
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
        <FaUserPlus className="search-users-btn" />
      </div>
      <SearchFriend user={user} />
    </div>
  );
};

export default Properties;
