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
    const db = firebase.firestore();
    const data = await db
      .collection("students")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((data) => data.data())
      .then((data) => {
        _setGrade(data["grade"]);
        console.log("Grade: " + _grade);
      });

    const response = db
      .collection("tutors")
      .where("subjects", "==", "Science")
      .where("grade", ">=", "10");

    // TODO: Fix the self replicating error somehow...
    const tutor_list = [];
    const tutor_data = await response.get();
    tutor_data.forEach((item) => {
      const item_data = item.data();
      console.log(`Tutor: ${JSON.stringify(item_data)}`);
      tutor_list.push(item_data);
    });
    setTutors(tutor_list);
  }

  return (
    <div className="tutorList">
      <p>{_grade}</p>
      {tutors.map((item, i) => {
        return (
          <TutorCard
            key={i}
            name={item.name}
            gradeLevel={`${item.grade}th grade`}
            uid={item.uid}
          />
        );
      })}
    </div>
  );
}
