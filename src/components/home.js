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
  let [userName, setUserName] = React.useState("");
  let [userSurname, setUserSurname] = React.useState("");
  const [idInput, setIdInput] = React.useState("");
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    onSnapshot(
      collection(db, "messegnger-db/users/user-data/" + userName),
      (snapshot) => {
        setUser(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().sender,
            message: doc.data().message,
          }))
        );
      }
    );
  }, [userName]);

  function getID() {
    const id = document.querySelector(".input-id").value;
    const loginWindow = document.querySelector(".login");
    const screenAnimation = document.querySelectorAll(".half");
    setUserName("Melisa");
    /* if (id == "#LOVE") {
      setUserName("Melisa");
      setUserSurname("Karsic");
      loginWindow.style.display = "none";
      screenAnimation.forEach((screen) => screen.classList.add("wave"));
      setLogged(true);
    } else if (id == "#ISO") {
      setUserName("Ishak");
      setUserSurname("Kazic");
      loginWindow.style.display = "none";
      screenAnimation.forEach((screen) => screen.classList.add("wave"));
      setLogged(true);
    } */
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
          <Sidebar name={userName} surname={userSurname} />

          <Routes>
            <Route
              path="/Melisooni-Chat-App"
              element={<Main name={userName} />}
            ></Route>
            <Route path="/properties" element={<Properties />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
