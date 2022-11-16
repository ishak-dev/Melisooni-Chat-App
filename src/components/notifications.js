import React from "react";
import "../style/notification.css";
import NotificationComponent from "./notification-component.js";
const Notification = () => {
  const [activeMessageId, setActiveMessageId] = React.useState(() => "");

  function openMessage(id) {
    setActiveMessageId(id);
  }
  return (
    <div className="notification-section">
      <h2>Notification</h2>
      <div className="notification-container">
        <NotificationComponent
          id={2}
          activeMessageId={activeMessageId}
          message={"d asd asd asd as "}
          activityFunc={openMessage}
        />
        <NotificationComponent
          id={3}
          activeMessageId={activeMessageId}
          message={"d asd asd asd as "}
          activityFunc={openMessage}
        />
      </div>
    </div>
  );
};

export default Notification;
