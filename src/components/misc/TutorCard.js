import { Card, Button } from "react-bootstrap";
import firebase from "firebase";

export default function TutorCard(props) {
  async function _onClick() {
    // Tutor UID
    const uid = props.uid;
    // Student UID
    const _uid = firebase.auth().currentUser.uid;
    // Variables to populate
    const studentInfo = null;
    const teacherInfo = null;
    const classes = null;
    const students = null;

    // Gets student info
    firebase
      .firestore()
      .collection("students")
      .doc(_uid)
      .get()
      .then((doc) => doc.data())
      .then((data) => {
        studentInfo = data;
      });

    // Gets tutor info
    firebase
      .firestore()
      .collection("tutors")
      .doc(uid)
      .get()
      .then((doc) => doc.data())
      .then((data) => {
        teacherInfo = data;
      });

    console.log(teacherInfo);
    console.log(studentInfo);
  }
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="bottom" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.gradeLevel}</Card.Subtitle>
      </Card.Body>
      <Button>Enroll with {props.name}</Button>
    </Card>
  );
}
