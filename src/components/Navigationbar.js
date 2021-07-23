import React, { useEffect } from "react";
import "../styles/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavigationBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tutoring App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.links.map((item) => {
              return <Nav.Link href={item.link}>{item.name}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
