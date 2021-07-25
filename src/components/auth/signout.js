import React from "react";
import firebase from "firebase";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import '../../styles/universal.css';

export default function Signout() {
  let history = useHistory();

  function _signout() {
    firebase
      .auth()
      .signOut()
      .then((user) => {
        history.push("/");
      });
  }
  return (
    <Container>
      <Button style={{ marginTop: "20%" }} onClick={_signout}>
        Sign Out
      </Button>
    </Container>
  );
}
