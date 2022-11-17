import React from "react";
import "../style/notification.css";
const NotificationComponent = ({ activityFunc, activeMessageId, id }) => {
  const [showMessage, setShowMessage] = React.useState(false);

  function openMessage() {
    if (activeMessageId == id) return activityFunc();
    else return activityFunc(id);

    /* if (activeMessageId == id && showMessage == false) {
      setShowMessage(true);
      return activityFunc(id);
    } else if (activeMessageId == id && showMessage == true) {
      setShowMessage(false);
      return activityFunc();
    } else if (activeMessageId == undefined && showMessage == false) {
      setShowMessage(true);
      return activityFunc(id);
    } else if (activeMessageId != id && showMessage == false) {
      setShowMessage(true);
      return activityFunc(id);
    } else {
      setShowMessage(false);
      return activityFunc(id);
    } */
  }
  console.log(activeMessageId);
  console.log(showMessage);

  return (
    <div>
      <div className="notification" onClick={openMessage}>
        <div className="notification-details">
          <h3>Notification Header</h3>
          <p className="notification-time">11:30</p>
        </div>
        <div
          className={`notification-message ${!(activeMessageId === id) &&
            "hide-full-notification"}`}
        >
          <p>
            This is test mesage lndas dlansld lnas d ashasjd ahjdhj asd hjashd
            ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn
            alsnd lnas lnd dlansld lnas d ashasjd ahjdhj asd hjashd ajshd haj
            ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas
            lnd dlansld lnas d ashasjd ahjdhj asd hjashd ajshd haj ahsjd ha asdh
            ajshd ja hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld
            lnas d ashasjd ahjdhj asd hjashd ajshd haj ahsjd ha asdh ajshd ja
            hjash dj j ajsdljldjalsd l lasldn alsnd lnas lnd dlansld lnas d
            ashasjd ahjdh das d as das d as da sd as da sd dasdsadasd j asd
            hjashd ajshd haj ahsjd ha asdh ajshd ja hjash dj j ajsdljldjalsd l
            lasldn alsnd lnas lnd
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
