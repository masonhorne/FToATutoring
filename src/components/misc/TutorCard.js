import { Card, Button } from "react-bootstrap";

export default function TutorCard(props) {
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="bottom" src={props.img_src} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.gradeLevel}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
