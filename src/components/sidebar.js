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
  const windowSize = window.innerWidth;

  const openSidebar = () => setMenu((prevState) => !prevState);

  console.log(menu);
  return (
    <div>
      <div className={menu && windowSize < 600 ? "sidebar-active" : "sidebar"}>
        <div className="profile-info">
          <h3>
            {data.name} {data.surname}
          </h3>
        </div>
        <div className="sidebar-options">
          <ul>
            <Link to="/properties" className="link" onClick={openSidebar}>
              <li>
                <FaHome className="icon" />
                PROPERTIES
              </li>
            </Link>
            <Link
              to="/Melisooni-Chat-App"
              className="link"
              onClick={openSidebar}
            >
              <li>
                <FaComment className="icon" />
                CHATS
              </li>
            </Link>
            <Link to="/notification" className="link" onClick={openSidebar}>
              <li>
                <FaCalendar className="icon" />
                NOTIFICATION
              </li>
            </Link>
            <Link to="settings" className="link" onClick={openSidebar}>
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
