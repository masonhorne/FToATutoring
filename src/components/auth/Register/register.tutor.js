import React, { useState, useEffect } from "react";
import firebase from "firebase";
import initFirebase from "../../../auth/firebase.auth";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Collapse,
  Alert
} from "react-bootstrap";
import "../../../styles/universal.css";
import ERROR_TIMEOUT_SECONDS from "../../../config";

export default function TutorRegister() {
  var provider = new firebase.auth.GoogleAuthProvider();

  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [grade, setGrade] = useState(null);
  const [subjects, setSubjects] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState(null);
  const [files, setFiles] = useState(null);
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
            grade: parseInt(grade),
            subjects: subjects,
            type: "Tutors",
            uid: firebase.auth().currentUser.uid,
            students: [],
            email: email,
            capacity: 0,
            image: imageURL
          });
        history.push("/");
      })
      .catch((error) => {
        setError(error);
        console.log("An error occurred in Register Tutor: " + error);
      });
  }
  function useGoogle() {
    if (!grade || !subjects) {
      setError({ code: 204, message: "Grade and Subject must be filled out" });
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

          console.log(
            `Email is ${email}, profilePic: ${profilePic} name: ${name}`
          );
          firebase
            .firestore()
            .collection("tutors")
            .doc(firebase.auth().currentUser.uid)
            .set({
              name: name,
              grade: parseInt(grade),
              email: email,
              type: "tutor",
              subjects: subjects,
              uid: firebase.auth().currentUser.uid,
              students: [],
              capacity: 0,
              image: profilePic
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
        <h1 style={{ fontSize: 35, fontWeight: "bold", paddingTop: "1em" }}>
          Sign up as a Tutor!
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
        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>Subjects you teach:</Form.Label>
          <FormControl
            placeholder="Subject"
            onChange={(e) => setSubjects(e.target.value)}
            value={subjects}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>Grade you teach:</Form.Label>
          <FormControl
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Grade you teach the subject"
            value={grade}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ float: "left" }}>
            Upload an ImageURL of yourself:
          </Form.Label>
          <Form.File onChange={(e) => setFiles()} />
        </Form.Group>
        <Link>
          <Button
            style={{ marginBottom: "10%" }}
            type="submit"
            onClick={Register}
          >
            Submit
          </Button>
        </Link>
      </Form>
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
