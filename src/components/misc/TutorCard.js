import { Card, Button } from "react-bootstrap";
import firebase from "firebase";

export default function TutorCard(props) {
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="bottom" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.gradeLevel}</Card.Subtitle>
      </Card.Body>
      <Button>Enroll with {props.name}</Button>
    </Card>
  );
}
