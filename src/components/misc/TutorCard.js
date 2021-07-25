import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import firebase from "firebase";
import { Alert, Form, FormControl, Container } from "react-bootstrap";
import ERROR_TIMEOUT_SECONDS from "../../config.js";
import '../../styles/universal.css';

export default function TutorCard({
  uid,
  imgSrc,
  name,
  email,
  gradeLevel,
  active = true
}) {
  const [message, setMessage] = useState(null);

  async function _onClick() {
    // Tutor UID
    // Student UID
    const _uid = firebase.auth().currentUser.uid;
    // Variables to populate
    var studentInfo = null;
    var teacherInfo = null;
    var classes = null;
    var students = null;

    // Gets student info
    await firebase
      .firestore()
      .collection("students")
      .doc(_uid)
      .get()
      .then((doc) => doc.data())
      .then((data) => {
        studentInfo = data;
      });

    // Gets tutor info
    await firebase
      .firestore()
      .collection("tutors")
      .doc(uid)
      .get()
      .then((doc) => doc.data())
      .then((data) => {
        teacherInfo = data;
      });

    var db = await firebase.firestore();

    let flag = false;
    // Checks if student is already enrolled in course
    await teacherInfo.students.forEach((student) => {
      if (student.name === studentInfo.name) {
        setMessage("You are already enrolled in this course");
        flag = true;
        setTimeout(() => setMessage(null), ERROR_TIMEOUT_SECONDS * 1000);
      }
    });

    // Need to show alert if capacity for teacher is reached

    if (!flag) {
      teacherInfo.capacity += 1;

      studentInfo.classes.push({
        name: teacherInfo.name,
        email: teacherInfo.email,
        grade: teacherInfo.grade,
        uid: teacherInfo.uid,
        subject: teacherInfo.subjects
      });
      teacherInfo.students.push({
        name: studentInfo.name,
        grade: studentInfo.grade,
        email: studentInfo.email,
        uid: _uid
      });

      await db.collection("tutors").doc(teacherInfo.uid).set(teacherInfo);
      await db.collection("students").doc(_uid).set(studentInfo);
    }
    console.log(studentInfo);
    console.log(teacherInfo);
  }
  return (
    <React.Fragment>
      <Card style={{ width: "18rem", height: "24rem", margin: "2em auto" }}>
        <Card.Img style={{ height: "75%", borderRadius: "25%" }} src={imgSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle style={{ padding: 10 }}>
            Teaching {gradeLevel}
          </Card.Subtitle>

          <Card.Subtitle style={{ padding: 5 }}>
            Contact {name} at {email}
          </Card.Subtitle>
        </Card.Body>
        <Button style={{ opacity: `${active ? 1 : 0}` }} onClick={_onClick}>
          Enroll with {name}
        </Button>
      </Card>
      <Container>
        <Alert style={{ opacity: message ? 1 : 0 }} variant="danger">
          {message}
        </Alert>
      </Container>
    </React.Fragment>
  );
}
