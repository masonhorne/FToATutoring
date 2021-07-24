import React, { useState, useEffect } from "react";
import firebase from "firebase";

export default function Test() {
  const [paulgrade, setPaulgrade] = useState([]);

  const db = firebase.firestore();

  const fetchPaulgrade = async () => {
    const response = db.collection("students");
    const data = await response.get();
    data.docs.forEach((item) => {
      var grade = item.data().grade;
      setPaulgrade([...paulgrade, grade]);
      console.log("grade is saved");
      console.log(grade);
    });
  };

  useEffect(() => {
    fetchPaulgrade();
  }, []);

  return (
    <div>
      <h3>Hello World</h3>
      <h4>{paulgrade}</h4>
    </div>
  );
}
