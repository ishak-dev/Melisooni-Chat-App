import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../style/sidebar.css";
import {
  FaHome,
  FaComment,
  FaCalendar,
  FaEllipsisV,
  FaList,
  FaReply,
} from "react-icons/fa";

const Sidebar = (data) => {
  let [menu, setMenu] = React.useState(false);

  const openSidebar = () => setMenu((prevState) => !prevState);

  console.log(menu);
  return (
    <div>
      <div className={menu ? "sidebar-active" : "sidebar"}>
        <div className="profile-info">
          <h3>
            {data.name} {data.surname}
          </h3>
        </div>
        <div className="sidebar-options">
          <ul>
            <Link to="/properties" className="link">
              <li>
                <FaHome className="icon" />
                PROPERTIES
              </li>
            </Link>
            <Link to="/Melisooni-Chat-App" className="link">
              <li>
                <FaComment className="icon" />
                CHATS
              </li>
            </Link>
            <Link to="/calendar" className="link">
              <li>
                <FaCalendar className="icon" />
                CALENDAR
              </li>
            </Link>
            <Link to="settings" className="link">
              <li>
                <FaEllipsisV className="icon" />
                SETTINGS
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-icon">
        <FaList onClick={openSidebar} />
      </div>
      <div className="navbar-close navbar-icon">
        {menu ? <FaReply onClick={openSidebar} /> : ""}
      </div>
    </div>
  );
};

export default Sidebar;
