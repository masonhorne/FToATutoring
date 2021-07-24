import React, { useState } from "react";
import firebase from "firebase";
import { Link, Redirect } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function _signin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("Login Success! Signed in with user email: " + user.email);
        console.log("Full User Details: " + user);
      })
      .catch((error) => {
        return <Redirect to="/signin" />;
      });
  }

  return (
    <div>
      <p>Sign In</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Link to="/home">
        <button onClick={_signin}>Sign In</button>
      </Link>
    </div>
  );
}
