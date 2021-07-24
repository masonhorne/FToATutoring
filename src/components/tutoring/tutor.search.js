import React, { useState, useEffect } from "react";
import TutorCard from "../misc/TutorCard.js";
import firebase from "firebase";
import { useParams, useLocation, useHistory } from "react-router-dom";

export default function TutorSearch() {
  useEffect(() => {
    fetchTutors();
  }, []);

  const { state } = useLocation();
  const subject = state.subject;

  console.log(subject);

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
      .where("subjects", "==", subject)
      .where("grade", ">=", 9);
    // .where("capacity", "<", 3)

    // TODO: Fix the self replicating error somehow...
    const tutor_list = [];
    const tutor_data = await response.get();

    tutor_data.forEach((item) => {
      const item_data = item.data();
      console.log(`Tutor: ${JSON.stringify(item_data)}`);
      if (item_data["capacity"] < 3) {
        tutor_list.push(item_data);
      }
    });
    setTutors(tutor_list);

    console.log("Passed Subject: " + subject);
  }

  return (
    <div className="tutorList">
      <h3>
        Tutors for {_grade}th grade {subject}
      </h3>
      {tutors.map((item, i) => {
        return (
          <TutorCard
            key={i}
            name={item.name}
            gradeLevel={`${item.grade}th grade`}
            uid={item.uid}
            email={item.email}
          />
        );
      })}
    </div>
  );
}
