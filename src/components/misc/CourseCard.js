import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Alert, Container } from "react-bootstrap";

export default function CourseCard({
  uid,
  imgSrc,
  name,
  email,
  gradeLevel,
  subject
}) {
  return (
    <Container>
      <Card style={{ width: "23rem" }}>
        <Card.Img variant="bottom" src={imgSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle style={{ padding: 10 }}>
            Teaching {gradeLevel} {subject}
          </Card.Subtitle>

          <Card.Subtitle style={{ padding: 5 }}>
            Contact {name} at {email}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Container>
  );
}
