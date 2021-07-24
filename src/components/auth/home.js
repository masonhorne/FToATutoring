import Button from "../aux/Button.js";
import React, { useEffect, useState } from "react";
import "../../styles/homeauth.css";
import { Jumbotron } from "react-bootstrap";
import Firebase from "firebase";

export default function HomeAuth(props) {
  return (
    <div className="container">
      <Jumbotron>
        <h3>Welcome to Tutor App</h3>
        <p>
          The app that connects you to <em>tutors</em>.
        </p>
        <p>
          <div className="btn-box">
            <Button className="btn" title="Log in" />
            <Button clasName="btn" title="Sign up" />
          </div>
        </p>
      </Jumbotron>
    </div>
  );
}
