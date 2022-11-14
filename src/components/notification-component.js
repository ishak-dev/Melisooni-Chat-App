import React from "react";
import "../style/notification.css"
const NotificationComponent = () => {

  const [showMessage,setShowMessage]=React.useState(false);

  function openMessage(){
    showMessage(prevState=>!prevState);
  }

  return <div >
      <div className="notification">
      <div className="notification-details">
      <h3>Notification Header</h3><p className="notification-time">11:30</p>
      </div>
      <div className={`notification-message ${!showMessage && "hide-full-notification"}`} onClick={openMessage}><p>This is test mesage lndas
      dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdhj asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d  ashasjd ahjdh das d as das d as da sd as da sd
      dasdsadasd j asd hjashd  ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd</p></div>
      </div>
  </div>;
};

export default NotificationComponent;
