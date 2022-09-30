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
const MainChatSection = (data) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "melisa&ishak"), orderBy("time")),
      (snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().sender,
            message: doc.data().message,
          }))
        );
      }
    );
  }, []);

  let messageListDOM = message.map((mess) => {
    console.log(mess);
    return (
      <div className="message" key={mess.id}>
        <p className={mess.name != data.name ? "partner-mesage" : "my-message"}>
          {mess.message}
        </p>
      </div>
    );
  });

  function inputMessage() {
    let messageFromInput = document.querySelector(".input-message").value;
    console.log(messageFromInput);

    addDoc(collection(db, "melisa&ishak"), {
      sender: data.name,
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
          <h4 className="chat-title">
            {data.name == "Melisa" ? "Ishak" : "Melisa"}
          </h4>
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
