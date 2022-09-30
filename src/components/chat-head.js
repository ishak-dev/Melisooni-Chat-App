import React from "react";
import Profile1 from "../images/profile1.jpg";

const ChatHead = (user) => {
  let [notification, setNotification] = React.useState("message-notification");

  function removeNotification() {
    setNotification("");
  }

  return (
    <div className="user-chat" key={user.id} onClick={removeNotification}>
      <div className="profile-photo">
        <img src={Profile1} />
      </div>
      <div className="chat-details">
        <h4 className="chat-title">{user.name}</h4>
        <p className="chat-message">{user.message}</p>
      </div>
      <div className={notification}></div>
    </div>
  );
};

export default ChatHead;
