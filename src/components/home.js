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
  const [user, setUser] = React.useState([]);
  const path = "messenger-db/users/user-data/";

  React.useEffect(() => {
    let confirm = false;
    let position = 0;
    onSnapshot(collection(db, path), (snapshot) => {
      snapshot.docs.forEach((user, i) => {
        //check is there id in db that matches with inout id
        console.log(i);
        !confirm && user.id == idInput && (confirm = true) && (position = i);
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
  }, [idInput]);

  console.log(user);

  function getID() {
    const id = document.querySelector(".input-id").value;
    setIdInput(id);
  }

  return (
    <div>
      <div className="home-screen">
        <div className="login">
          <div className="login-window">
            <h3 className="login-title">Please enter your ID</h3>
            <input className="input-id" placeholder="#ID"></input>
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
              element={<Main user={user} dbpath={path} />}
            ></Route>
            <Route path="/properties" element={<Properties />} />
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
