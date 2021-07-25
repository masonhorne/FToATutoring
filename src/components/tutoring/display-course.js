import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import firebase from "firebase";
import { Container } from "react-bootstrap";
import CourseCard from "../misc/CourseCard";
import '../../styles/universal.css';

export default function DisplayCourse() {
  useEffect(() => {
    console.log("Hello World!");
    loadCourses();
  }, []);

  const [loaded, setLoaded] = useState(false);
  const [courses, setCourses] = useState([]);

  function loadCourses() {
    // Student uid
    const uid = firebase.auth().currentUser.uid;
    const db = firebase.firestore();

    db.collection("students")
      .doc(uid)
      .get()
      .then((doc) => doc.data())
      .then((data) => {
        setCourses(data.classes);
        setLoaded(true);
        console.log("Courses: " + JSON.stringify(data.classes));
        console.log(courses);
      });
  }

  if (!loaded) {
    return (
      <Spinner
        animation="border"
        role="status"
        style={{ alignContent: "center" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Container>
        {courses.map((item, i) => {
          return (
            <CourseCard
              key={i}
              name={item.name}
              gradeLevel={`${item.grade}th grade`}
              uid={item.uid}
              email={item.email}
              subject={item.subject}
            />
          );
        })}
      </Container>
    );
  }
}
