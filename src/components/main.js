import React, { useEffect } from "react";
import "../style/main.css";
import MainHeader from "./main-header";
import MainChatList from "./main-chat-list";
import MainChatSection from "./main-chat-section";
import db from "../data/firebase";
import { collection, onSnapshot } from "firebase/firestore";
function Main({ user, friendsList }) {
  const [currentMessageWindow, setCurrentMessageWindow] = React.useState(() => {
    return {
      id: "",
      friendName: "",
      chatSelected: false,
    };
  });

  function openFriendMessage(id, friendName, chatId) {
    setCurrentMessageWindow(() => {
      return {
        id: id,
        friendName: friendName,
        chatId: chatId,
        chatSelected: true,
      };
    });
  }

  console.log("Pozvan main");

  return (
    <div className="container">
      <MainHeader />
      <MainChatList
        name={user.fullname}
        friends={friendsList}
        openFriendMessage={openFriendMessage}
      />
      <MainChatSection
        user={user}
        friendId={currentMessageWindow.id}
        friendName={currentMessageWindow.friendName}
        chatId={currentMessageWindow.chatId}
        chatSelected={currentMessageWindow.chatSelected}
      />
    </div>
  );
}

export default Main;
