import React from "react";
import SubjectCard from "../misc/subject.card";
import { Container, Row, Col } from "react-bootstrap";

export default function Hub() {
  return (
    <Container>
      <br />
      <h4>Welcome to the Learning Hub!</h4>
      <br />
      <Container fluid>
        <Row>
          <Col>
            <SubjectCard
              name="Programming"
              desc="Stuck on a bug? We can help with that."
              imgSrc="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
            />
          </Col>
          <Col>
            <SubjectCard
              name="Maths"
              desc="Forgot the unit circle? Click here."
              imgSrc="https://www.fife.ac.uk/media/3828/mathematics-png.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132155248940000000"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SubjectCard
              name="Science"
              desc="Science is a hard one. But we still teach it."
              imgSrc="https://media.istockphoto.com/vectors/little-students-doing-chemical-experiment-vector-id1179433703?k=6&m=1179433703&s=612x612&w=0&h=WbYYo_jELpwngHIIUCw8QpiAq6wRf9s5w8A0z-MEPtk="
            />
          </Col>
          <Col>
            <SubjectCard
              name="History"
              desc="Did WW2 end in 1945 or 1845? Someone here knows."
              imgSrc="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_660,h_382/https://discoverpods.com/wp-content/uploads/2018/12/maps-atlantic-oldtimer-car-compass-vintage-1442539-pxhere.com_-660x382.jpg"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
