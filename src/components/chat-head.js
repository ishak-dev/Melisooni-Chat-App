import React from "react";
import Profile1 from "../images/profile1.jpg";

const ChatHead = (friend) => {
  let [notification, setNotification] = React.useState("message-notification");
  function removeNotification() {
    setNotification("");
  }

  function openFriendMessage() {
    return friend.openFriendMessage(friend.id, friend.name);
  }

  return (
    <div
      className="user-chat"
      key={friend.id}
      onClick={(event) => {
        openFriendMessage();
        removeNotification();
      }}
    >
      <div className="profile-photo">
        <img src={Profile1} />
      </div>
      <div className="chat-details">
        <h4 className="chat-title">{friend.name}</h4>
        <p className="chat-message">{friend.message}</p>
      </div>
      <div className={notification}></div>
    </div>
  );
};

export default ChatHead;
