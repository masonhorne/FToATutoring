import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function Signout() {
  function _signout() {
    firebase.auth().signOut();
  }
  return (
    <Container>
      <Link to="/home">
        <Button style={{ marginTop: "20%" }} onClick={_signout}>
          Sign Out
        </Button>
      </Link>
    </Container>
  );
}
