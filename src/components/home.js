import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import "../style/mobile-optimization.css";
import "../style/home.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Properties from "./properties";
import Notification from "./notifications";
import Settings from "./settings";
import db from "../data/firebase";
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
const Home = () => {
  let [logged, setLogged] = React.useState(false);
  const [idInput, setIdInput] = React.useState("");
  const [passInput, setPassInput] = React.useState("");
  const [user, setUser] = React.useState([]);
  const [friendsList, setFriends] = React.useState([]);

  const path = "users";

  React.useEffect(() => {
    let confirm = false;
    let position = 0;
    onSnapshot(collection(db, path), (snapshot) => {
      snapshot.docs.forEach((user, i) => {
        //check is there id in db that matches with inout id

        !confirm &&
          user.id == idInput &&
          user.data().password == passInput &&
          (confirm = true) &&
          (position = i);
      });

      if (confirm === true) {
        setUser({
          id: snapshot.docs[position].id,
          ...snapshot.docs[position].data(),
        });
        const loginWindow = document.querySelector(".login");
        const screenAnimation = document.querySelectorAll(".half");
        loginWindow.style.display = "none";
        screenAnimation.forEach((screen) => screen.classList.add("wave"));
        setLogged(true);
      } else console.log("User Doesnt exist");
    });
  }, [idInput, passInput]);

  React.useEffect(() => {
    let dbpathFriends = "users/" + user.id + "/friends";

    onSnapshot(collection(db, dbpathFriends), (snapshot) => {
      console.log(snapshot.docs);
      setFriends(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          chatId: doc.data().chatId,
        }))
      );
    });
  }, [user]);

  console.log(user);
  console.log(friendsList + "");

  function getID() {
    const id = document.querySelector("#input-id").value;
    setIdInput(id);
    const pass = document.querySelector("#input-pass").value;
    setPassInput(pass);
  }

  return (
    <div>
      <div className="home-screen">
        <div className="login">
          <div className="login-window">
            <p className="login-title">Username </p>
            <input
              className="input-id"
              id="input-id"
              placeholder="Username"
            ></input>
            <p className="login-title">Password</p>
            <input
              className="input-id"
              id="input-pass"
              placeholder="Password"
            ></input>
          </div>
          <button className="login-btn" onClick={getID}>
            Prijavi se
          </button>
        </div>
        <div className="first-half-wave half"></div>
        <div className="second-half-wave half"></div>
      </div>
      {logged ? (
        <>
          <Sidebar user={user} />

          <Routes>
            <Route
              path="/Melisooni-Chat-App"
              element={<Main user={user} friendsList={friendsList} />}
            />
            <Route
              path="/properties"
              element={<Properties friendsList={friendsList} />}
            />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings user={user} />} />
          </Routes>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
