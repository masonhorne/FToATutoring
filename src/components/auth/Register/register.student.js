import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [grade, setGrade] = useState(null);

  function register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("students")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name: `${fname} ${lname}`,
            grade: grade,
            email: email,
            type: "student",
            classes: []
          });
      });
  }

  return (
    <div>
      <input
        onChange={(e) => setFName(e.target.value)}
        placeholder="First Name"
        value={fname}
      />
      <input
        onChange={(e) => setLName(e.target.value)}
        placeholder="Last Name"
        value={lname}
      />
      <input
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
        value={grade}
      />
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
        <button onClick={register}>Submit</button>
      </Link>
    </div>
  );
}
