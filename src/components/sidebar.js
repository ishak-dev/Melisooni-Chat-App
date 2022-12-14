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

const Sidebar = ({ user }) => {
  let [menu, setMenu] = React.useState(false);
  const windowSize = window.innerWidth;

  const openSidebar = () => setMenu((prevState) => !prevState);

  return (
    <div>
      <div className={menu && windowSize <= 900 ? "sidebar-active" : "sidebar"}>
        <div className="profile-info">
          <h3>{user.fullname}</h3>
        </div>
        <div className="sidebar-options">
          <ul>
            <Link to="/properties" className="link" onClick={openSidebar}>
              <li>
                <FaHome className="icon" />
                FRIENDS
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
