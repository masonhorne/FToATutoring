import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/universal.css';

export default function SuperCard(props) {
  return (
    <Card style={{ width: "18rem", height: "24rem", margin: "2em auto" }}>
      <Card.Img
        style={{ width: "100%", height: "45%" }}
        variant="top"
        src={props.imgSrc}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Link
          to={{ pathname: "/searchfortutors", state: { subject: props.name } }}
        >
          <Button variant="primary">Find Tutors for {props.name}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
