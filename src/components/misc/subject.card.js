import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SuperCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgSrc} />
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
