import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../aux/subject.card";
const styles = {
  margins: {
    marginLeft: 50,
    marginRight: 50
  }
};

export default function Hub() {
  return (
    <div>
      <br />
      <h4>Welcome to the Hub!</h4>
      <br />
      <div class="row" style={styles.margins}>
        <SubjectCard />
      </div>
    </div>
  );
}
