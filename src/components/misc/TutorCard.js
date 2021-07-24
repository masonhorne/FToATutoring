import { Card, Button } from "react-bootstrap";
import firebase from "firebase";

export default function TutorCard(props) {
  async function _onClick() {
    // Tutor UID
    const uid = props.uid;
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

    studentInfo.classes.push({
      name: teacherInfo.name,
      email: teacherInfo.email,
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

    console.log(studentInfo);
    console.log(teacherInfo);
  }
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="bottom" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.gradeLevel}</Card.Subtitle>
      </Card.Body>
      <Button onClick={_onClick}>Enroll with {props.name}</Button>
    </Card>
  );
}
