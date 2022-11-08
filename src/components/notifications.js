import React from "react";
import "../style/notification.css"
import NotificationComponent from "./notification-component.js"
const Notification = () => {

  const [showMessage,setShowMessage]=React.useState(false);


  return <div className="notification-section">
    <h2>Notification</h2>
    <div className="notification-container">
      <NotificationComponent />
    </div>
  </div>;
};

export default Notification;
