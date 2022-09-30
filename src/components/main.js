import React from "react";
import "../style/main.css";
import MainHeader from "./main-header";
import MainChatList from "./main-chat-list";
import MainChatSection from "./main-chat-section";

function Main(data) {
  return (
    <div className="container">
      <MainHeader />
      <MainChatList name={data.name} />
      <MainChatSection name={data.name} />
    </div>
  );
}

export default Main;
