import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const AppNavbar = () => {
  /*
  setInterval(() => {
    if (window.scrollY >= heroHeight) {
      setIsFixed(true);
      return;
    }

    setIsFixed(false);
  }, 1);
  */

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand className="fw-bold">
          Luis Alberto Cervantes García
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects" className="custom-link mt-3 mt-md-0">
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="custom-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="custom-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
