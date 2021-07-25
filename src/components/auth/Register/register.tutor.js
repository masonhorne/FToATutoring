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
import '../../../styles/universal.css';

export default function TutorRegister() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [grade, setGrade] = useState(null);
  const [subjects, setSubjects] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState(null);
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
          <FormControl
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image URL here"
            value={imageURL}
          />
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
      <Alert style={{ opacity: error ? 1 : 0 }} variant="danger">
        {`Code ${error ? error.code : "200"} with message of ${
          error ? error.message : "Success"
        }`}
      </Alert>
    </Container>
  );
}
