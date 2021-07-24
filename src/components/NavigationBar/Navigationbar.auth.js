import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tutoring App (AuthView)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">
                <span>Home</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register-tutor">
                <span>Register as Tutor</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register-student">
                <span>Register as Student</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signin">
                <span>Signin</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
