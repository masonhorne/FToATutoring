import Button from "../misc/Button.js";
import React, { useEffect, useState } from "react";
import "../../styles/homeauth.css";
import { Jumbotron } from "react-bootstrap";
import Firebase from "firebase";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function HomeAuth(props) {
  return (
    <Container className="container">
      <Jumbotron style={{ paddingTop: "5%" }}>
        <h3>Welcome to Tutor App</h3>
        <p>
          The app that connects you to <em>tutors</em>.
        </p>
        <p>
          <Container className="btn-box">
            <Link to="/register-tutor">
              <Button className="btn" title="Sign Up to Tutor" />
            </Link>
            <Link to="/signin">
              <Button className="btn" title="Log in" />
            </Link>
            <Link to="/register-student">
              <Button className="btn" title="Sign Up as a Student" />
            </Link>
          </Container>
        </p>
      </Jumbotron>
    </Container>
  );
}
