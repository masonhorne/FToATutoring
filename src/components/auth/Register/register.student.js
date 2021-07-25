import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import { Container, Button, Form, FormControl, Alert } from "react-bootstrap";
import "../../../styles/universal.css";
import ERROR_TIMEOUT_SECONDS from "../../../config";

export default function Register() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [grade, setGrade] = useState(null);
  const [error, setError] = useState(null);

  var provider = new firebase.auth.GoogleAuthProvider();

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
            grade: parseInt(grade),
            email: email,
            type: "student",
            classes: []
          });
        history.push("/");
      })
      .catch((err) => {
        setError(err);
        console.log("An error occurred in Register Student: " + error);
      });
  }

  function useGoogle() {
    if (!grade) {
      setError({ code: 204, message: "Grade must be filled out" });
      setTimeout(() => setError(null), ERROR_TIMEOUT_SECONDS * 1000);
    }
    if (!error) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var creds = result.credential;
          var token = creds.accessToken;
          var user = result.user;
          var email = user.email;
          var profilePic = user.photoURL;
          var name = user.displayName;

          firebase
            .firestore()
            .collection("students")
            .doc(firebase.auth().currentUser.uid)
            .set({
              name: name,
              grade: parseInt(grade),
              email: email,
              type: "student",
              classes: []
            });
        })
        .catch((error) => {
          setError(error);
          setTimeout(() => setError(null), ERROR_TIMEOUT_SECONDS * 1000);
        });
    }
  }

  return (
    <Container>
      <Container fluid style={{ padding: 15 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold", paddingTop: "1rem" }}>
          Sign up as a Student!
        </h1>
      </Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>First Name:</Form.Label>
          <FormControl
            onChange={(e) => setFName(e.target.value)}
            placeholder="First Name"
            value={fname}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>Last Name:</Form.Label>
          <FormControl
            onChange={(e) => setLName(e.target.value)}
            placeholder="Last Name"
            value={lname}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>Grade:</Form.Label>
          <FormControl
            placeholder="Grade"
            onChange={(e) => setGrade(e.target.value)}
            value={grade}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>Email Adress:</Form.Label>
          <FormControl
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>Password:</Form.Label>
          <FormControl
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
      </Form>
      <Link>
        <Button style={{ marginBottom: "10%" }} onClick={register}>
          Submit
        </Button>
      </Link>
      <Button style={{ marginBottom: "10%" }} onClick={useGoogle}>
        Or register with google
      </Button>
      <Alert style={{ opacity: error ? 1 : 0 }} variant="danger">
        {`Code ${error ? error.code : "200"} with message of ${
          error ? error.message : "Success"
        }`}
      </Alert>
    </Container>
  );
}
