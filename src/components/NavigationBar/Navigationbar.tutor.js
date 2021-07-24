import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tutoring App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ textDecoration: "" }}>
              <Link to="/see-students">
                <span>View Student Roster</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signout">
                <span>Signout</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
