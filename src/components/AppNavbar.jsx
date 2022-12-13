import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AppContext } from "../context";

export const AppNavbar = () => {
  const { headerHeight, isNavFixed, setIsNavFixed } = useContext(AppContext);
  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    if (window.scrollY > headerHeight) {
      setIsNavFixed(true);
      return;
    }
    setIsNavFixed(false);

    return () => window.removeEventListener("scroll", checkScroll);
  }, [scroll]);

  const checkScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed={isNavFixed && "top"}>
      <Container>
        <Navbar.Brand className="fw-bold">
          <a href="#me" className="custom-brand">
            {isNavFixed ? "Luis Cervantes " : "@LugpDev2022"}
          </a>
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
