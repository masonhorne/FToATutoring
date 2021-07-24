import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

export default function Signout() {
  function _signout() {
    firebase.auth().signOut();
  }
  return (
    <div>
      <p>Sign out</p>
      <Link to="/home">
        <button onClick={_signout}>Sign Out</button>
      </Link>
    </div>
  );
}
