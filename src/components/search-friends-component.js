import React from "react";
import "../style/search-friend.css";
import db from "../data/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  setDoc,
  where,
  Timestamp,
  doc,
} from "firebase/firestore";

const SearchFriend = ({ user }) => {
  const [friendInput, setFriendInput] = React.useState("");
  const [friendResults, setFriendResults] = React.useState([]);

  React.useEffect(() => {
    const path = "users";
    onSnapshot(
      query(collection(db, path), where("name", "==", friendInput)),
      (snapshot) => {
        setFriendResults(
          snapshot.docs.map((doc) => {
            return (
              user.name != doc.data().name && (
                <div className="user-container" id={doc.id}>
                  <div className="user-add-data">
                    <p className="user-name">{doc.data().name}</p>
                    <p className="user-username">@{doc.id}</p>
                  </div>
                  <p
                    className="add-user-btn"
                    onClick={create}
                    id={doc.id}
                    location={doc.data().location}
                    name={doc.data().name}
                  >
                    Add
                  </p>
                </div>
              )
            );
          })
        );
      }
    );
  }, [friendInput]);

  function handeChange(event) {
    setFriendInput(event.target.value);
  }

  function addFriend(event, chatId) {
    const path = "users/" + user.id + "/friends";
    setDoc(doc(db, path, event.target.id), {
      chatId: chatId,
      location: event.target.getAttribute("location"),
      name: event.target.getAttribute("name"),
    });
    setFriendInput("");
  }

  async function create(event) {
    const path = "chat";
    const docRef = await addDoc(collection(db, path), {});
    console.log(docRef.id);

    addFriend(event, docRef.id);

    addDoc(collection(db, path + "/" + docRef.id + "/" + "messages"), {
      sender: user.id,
      message: "Cao upravo sam te dodao",
      time: Timestamp.fromDate(new Date()),
    });
  }

  console.log(friendInput);
  console.log(friendResults);
  return (
    <div className="search-friend-section">
      <div className="search-friend-container">
        <input
          type="text"
          placeholder="Find friend"
          className="find-friend-input"
          onChange={handeChange}
        ></input>
        {friendResults}
      </div>
    </div>
  );
};

export default SearchFriend;
