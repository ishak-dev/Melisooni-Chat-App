import React from "react";
import "../style/notification.css"
const Notification = () => {

  const [showMessage,setShowMessage]=React.useState(false);


  return <div className="notification-section">
    <h2>Notification</h2>
    <div className="notification-container">
      <div className="notification">
      <div className="notification-details">
      <h2>Notification Header</h2><p className="notification-time">11.30</p>
      </div>
      <div className="notification-message hide-full-notification"><p>This is test mesage lndas
      dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd</p></div>
      </div>
    </div>
  </div>;
};

export default Notification;
