import { useState, useEffect } from "react";
import "../style/main-chat-section.css";
import db from "../data/firebase";
import Profile1 from "../images/profile1.jpg";
import { FaPaperPlane } from "react-icons/fa";
import {
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
  setDoc,
  doc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
const MainChatSection = ({ user, pathFriends, friendName, chatSelected }) => {
  const [message, setMessage] = useState(() => []);

  useEffect(() => {
    chatSelected
      ? onSnapshot(
          query(collection(db, pathFriends), orderBy("time")),
          (snapshot) => {
            setMessage(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                sender: doc.data().sender,
                message: doc.data().message,
              }))
            );
          }
        )
      : console.log("select chat");
  }, [pathFriends]);

  console.log(message);
  let messageListDOM = message.map((mess) => {
    return (
      <div className="message" key={mess.id}>
        <p
          className={
            mess.sender != user.fullname ? "partner-mesage" : "my-message"
          }
        >
          {mess.message}
        </p>
      </div>
    );
  });

  console.log("rendered");

  function inputMessage() {
    let messageFromInput = document.querySelector(".input-message").value;

    messageFromInput != "" &&
      addDoc(collection(db, pathFriends), {
        sender: user.fullname,
        message: messageFromInput,
        time: Timestamp.fromDate(new Date()),
      });

    document.querySelector(".input-message").value = "";
  }

  return (
    <div className="chat-window">
      <div className="user-chat-section">
        <div className="profile-photo">
          <img src={Profile1} />
        </div>
        <div className="chat-details">
          <h4 className="chat-title">{friendName}</h4>
          <p className="chat-message">From Sarajevo</p>
        </div>
      </div>
      <div className="messages-box">
        <div className="messages-list">{messageListDOM}</div>
      </div>
      <div className="send-message-box">
        <input
          className="input-message"
          placeholder="Type something..."
        ></input>
        <FaPaperPlane className="send-button" onClick={inputMessage} />
      </div>
    </div>
  );
};

export default MainChatSection;
