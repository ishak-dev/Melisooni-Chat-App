import React, { useEffect } from "react";
import "../style/main.css";
import MainHeader from "./main-header";
import MainChatList from "./main-chat-list";
import MainChatSection from "./main-chat-section";
import db from "../data/firebase";
import { collection, onSnapshot } from "firebase/firestore";
function Main({ user, dbpath }) {
  const [friendsList, setFriends] = React.useState([]);

  const [currentMessageWindow, setCurrentMessageWindow] = React.useState(() => {
    return {
      id: "",
      friendName: "",
      chatSelected: false,
    };
  });

  let dbpathFriends = dbpath + user.id + "/friends";

  useEffect(() => {
    onSnapshot(collection(db, dbpathFriends), (snapshot) => {
      console.log(snapshot.docs);
      setFriends(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  function openFriendMessage(id, friendName) {
    setCurrentMessageWindow(() => {
      return {
        id: id,
        friendName: friendName,
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
        pathFriends={
          dbpathFriends + "/" + currentMessageWindow.id + "/messages"
        }
        friendName={currentMessageWindow.friendName}
        chatSelected={currentMessageWindow.chatSelected}
      />
    </div>
  );
}

export default Main;
