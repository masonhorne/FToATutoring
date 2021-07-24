import React, { useState, useEffect } from "react";
import firebase from "firebase";
import initFirebase from "../../../auth/firebase.auth";
import { Link } from "react-router-dom";

export default function TutorRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [grade, setGrade] = useState(null);
  const [subjects, setSubjects] = useState("");
  function Register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("tutors")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name: `${fname} ${lname}`,
            grade: grade,
            subjects: subjects,
            type: "Tutors",
            uid: firebase.auth().currentUser.uid,
            students: [],
            email: email
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
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email}
      />
      <input
        type="password"
        placeholder
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        placeholder="Subject"
        onChange={(e) => setSubjects(e.target.value)}
        value={subjects}
      />
      <input
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade you teach the subject"
        value={grade}
      />
      <Link to="/home">
        <button onClick={Register}>Submit</button>
      </Link>
    </div>
  );
}
