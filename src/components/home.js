import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import "../style/mobile-optimization.css";
import "../style/home.css";

const Home = () => {
  let [logged, setLogged] = React.useState(false);
  let [userName, setUserName] = React.useState("");
  let [userSurname, setUserSurname] = React.useState("");

  function getID() {
    const id = document.querySelector(".input-id").value;
    const loginWindow = document.querySelector(".login");
    const screenAnimation = document.querySelectorAll(".half");

    if (id == "#LOVE") {
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
    }
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
          <Main name={userName} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
