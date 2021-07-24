import React from "react";
import firebase from "firebase";

export default function Signout() {
  function _signout() {
    firebase.auth().signOut();
  }
  return (
    <div>
      <p>Sign out</p>
      <button onClick={_signout}>Sign Out</button>
    </div>
  );
}
