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
function Main({ user }) {
  const [friends, setFriends] = React.useState([]);
  const [friendsMessages, setFriendsMessages] = React.useState([]);
  const [currentMessageWindow, setCurrentMessageWindow] = React.useState("");

  useEffect(() => {
    onSnapshot(collection(db, "melisa"), (snapshot) => {
      //snapshot.docs[0].id is the id of document in that collection, that document have their collection
      onSnapshot(
        collection(db, "melisa/" + snapshot.docs[0].id + "/friends"),
        (snapshot) => {
          setFriends(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
            }))
          );
          //Fetch messages from frends
        }
      );
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
        friends={friends}
        openFriendMessage={openFriendMessage}
      />
      <MainChatSection name={user.fullname} id={currentMessageWindow} />
    </div>
  );
}

export default Main;
