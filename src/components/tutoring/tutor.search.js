import React, { useState, useEffect } from "react";
import TutorCard from "../aux/TutorCard.js";
import firebase from "firebase";

export default function TutorSearch() {
  useEffect(() => {}, []);

  const [tutors, setTutors] = useState([]);

  const [grade, setGrade] = useState(0);

  // For Get Example only
  const [paulgrade, setPaulgrade] = useState(0);

  // Loads tutors from Firebase
  // Displaying those with a grade level
  // higher than the users
  function loadTutors(subject) {
    //const db = firebase.firestore();
    //const id = firebase.auth().currentUser.uid;
    // Get current students grade level
    //db.collection("students")
    //  .doc(id)
    //.get()
    // .then((doc) => doc.data())
    // .then((data) => {
    //    setGrade(data["grade"]);
    //  });
    // Sets the tutors array based on subject and grade level
    // ***EXAMPLE TO DELETE***
    // Getting Paul's name
    // firebase.firestore().collection("students")
    //   .doc("Q0m2AB0c9hSBUVDbnml9E4Nhz5G2")
    //   .get()
    //   .then((doc) => {
    //     console.log("We got here");
    //     console.log("Got here!");
    //     if (doc.exists) {
    //       var data = doc.data();
    //       console.log("Document data:", JSON.stringify(data));
    //       setPaulgrade(data);
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //       setPaulgrade(-1);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error getting document:", error);
    //     setPaulgrade(-2);
    //   });
  }

  return (
    <div className="tutorList">
      <h3>{grade}</h3>
      <h2>Paul's Grade</h2>
      <h3>{paulgrade}</h3>
      <TutorCard
        name="Tom"
        gradeLevel="12th Grade"
        img_src="https://www.evansondds.com/wp-content/uploads/HowADentalImplantCanImproveYourSmileResized.jpg"
      />
    </div>
  );
}
