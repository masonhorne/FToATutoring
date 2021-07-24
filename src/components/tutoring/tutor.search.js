import React, { useState, useEffect } from "react";
import TutorCard from "../misc/TutorCard.js";
import firebase from "firebase";

export default function TutorSearch({ subject }) {
  useEffect(() => {
    fetchTutors();
  }, []);

  const [tutors, setTutors] = useState([]);

  const [_grade, _setGrade] = useState(0);

  async function fetchTutors() {
    setTutors([]);
    const db = firebase.firestore();
    db.collection("students")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((data) => data.data())
      .then((data) => {
        _setGrade(data["grade"]);
        console.log("Grade: " + _grade);
      });

    const response = db
      .collection("tutors")
      .where("subjects", "==", "Math")
      .where("grade", ">=", "10");
    const data = await response.get();
    data.docs.forEach((item) => {
      setTutors([...tutors, item.data()]);
      console.log(`${tutors}`);
    });
  }

  return (
    <div className="tutorList">
      <p>{_grade}</p>
      {tutors.map((item) => {
        return (
          <TutorCard name={item.name} gradeLevel={`${item.grade}th grade`} />
        );
      })}
    </div>
  );
}
