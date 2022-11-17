import React from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

import "../style/main-chat-list.css";
import users from "../data/chats-data";
import ChatHead from "./chat-head";

const MainChatList = ({ friends, openFriendMessage }) => {
  let [dropMenu, setDropMenu] = React.useState(false);
  const activeDropMenu = () => setDropMenu((prevState) => !prevState);
  const deactiveDropMenu = () => setDropMenu((prevState) => !prevState);

  var chats = friends.map((friend) => {
    return (
      <ChatHead
        key={friend.id}
        id={friend.id}
        name={friend.id}
        chatId={friend.chatId}
        message={"raleee"}
        openFriendMessage={openFriendMessage}
      />
    );
  });

  return (
    <div>
      <div className={dropMenu ? "chat-list chat-list-active" : "chat-list "}>
        <div className="search-section">
          <input className="search-input" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="chats">{chats}</div>
        <div className="chats-icon-close" onClick={deactiveDropMenu}>
          <FaChevronUp />
        </div>
      </div>
      <div className="chats-icon-open" onClick={activeDropMenu}>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default MainChatList;
