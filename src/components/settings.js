import React from "react";
import "../style/settings.css"


const Settings = () => {
  return(
  <div className="settings">
    <h2>Account</h2>
    <hr/>
     <div className="settings-container">
     <div className="first-row row">
       <div className="input-field">
       <p className>Display name <span>visible to other members</span></p>
       <input type="text" placeholder="your name"/>
       </div>
       <div className="input-field">
       <p className>Display name <span>visible to other members</span></p>
       <input type="text" placeholder="your name"/>
       </div>
    </div>
      <hr/>
      <div className="second-row row">
      <div className="input-field">
       <p className>Display name <span>visible to other members</span></p>
       <input type="text" placeholder="your name"/>
      </div>
      <div className="input-field">
       <p className>Display name <span>visible to other members</span></p>
       <input type="text" placeholder="your name"/>
      </div>
      </div>
       <hr/>
      <div className="third-row">
        <p>Linked Accounts</p>
        <p>We use this to let you sign in and populate your profile information</p>
        <div className="google-accout">
        <p>Sign in with google</p>
        <button>Connect</button>
        </div>
      </div>
      <div className="fourth-year">
        <div className="delete-account">
        <p>Delete account</p>
        <p>By deleting your account you will lose all your data</p>
        </div>
        <p>Delete account...</p>
      </div>
</div>
  </div>
)
};

export default Settings;
