import React, { useEffect } from "react";
import "../style/main.css";
import MainHeader from "./main-header";
import MainChatList from "./main-chat-list";
import MainChatSection from "./main-chat-section";
import db from "../data/firebase";
import {
  collection,
  getDocs,
  getDoc,
  orderBy,
  query,
  onSnapshot,
  setDoc,
  doc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
function Main({ user, dbpath }) {
  const [friendsList, setFriends] = React.useState([]);
  const [friendsMessages, setFriendsMessages] = React.useState([]);
  const [currentMessageWindow, setCurrentMessageWindow] = React.useState("");

  const dbpathFriends = dbpath + user.id + "/friends";
  useEffect(() => {
    //snapshot.docs[0].id is the id of document in that collection, that document have their collection
    onSnapshot(collection(db, dbpathFriends), (snapshot) => {
      console.log(snapshot.doc);
      setFriends(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
      //Fetch messages from frends
    });
  }, []);

  function openFriendMessage(id) {
    setCurrentMessageWindow(id);
  }

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
        friendid={currentMessageWindow}
        pathFriends={dbpathFriends}
      />
    </div>
  );
}

export default Main;
