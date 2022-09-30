import React from "react";
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
            <li>
              <FaHome className="icon" />
              PROPERTIES
            </li>
            <li>
              <FaComment className="icon" />
              CHATS
            </li>
            <li>
              <FaCalendar className="icon" />
              CALENDAR
            </li>
            <li>
              <FaEllipsisV className="icon" />
              SETTINGS
            </li>
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
