import React from "react";
import "../style/settings.css";
import { FcGoogle } from "react-icons/fc";

const Settings = ({ user }) => {
  return (
    <div className="settings">
      <h2 className="settings-title">Account</h2>

      <div className="settings-container">
        <div className="first-row row">
          <div className="input-field">
            <p>Full Name</p> <span>visible to other members</span>
            <input type="text" placeholder={user.fullname} />
          </div>
          <div className="input-field">
            <p>Your email</p> <span>visible only to you</span>
            <input type="text" placeholder={user.email} />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="second-row row">
          <div className="input-field">
            <p>Your number</p> <span>visible only to you</span>
            <input type="text" placeholder={user.number} />
          </div>
          <div className="input-field">
            <p>Your birthday</p> <span>visible only to you</span>
            <input type="text" placeholder={user.birthday} />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="third-row ">
          <h4>Linked Accounts</h4>
          <p>
            We use this to let you sign in and populate your profile information
          </p>
          <div className="google-account">
            <p>
              <FcGoogle className="google-icon" />
              Sign in with google
            </p>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="fourth-row">
          <div className="delete-account">
            <h4>Delete account</h4>
            <p>By deleting your account you will lose all your data</p>
          </div>
          <p className="delete-btn">Delete account...</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
