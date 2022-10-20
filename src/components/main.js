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
function Main(data) {
  const [friends, setFriends] = React.useState([]);
  const [friendsMessages, setFriendsMessages] = React.useState([]);
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

  return (
    <div className="container">
      <MainHeader />
      <MainChatList name={data.name} friends={friends} />
      <MainChatSection name={data.name} />
    </div>
  );
}

export default Main;
