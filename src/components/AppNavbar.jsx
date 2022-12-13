import React, { useContext, useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AppContext } from "../context";

export const AppNavbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const { headerHeight } = useContext(AppContext);
  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    if (window.scrollY >= headerHeight) {
      setIsFixed(true);
      return;
    }
    setIsFixed(false);

    return () => window.removeEventListener("scroll", checkScroll);
  }, [scroll]);

  const checkScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed={isFixed && "top"}>
      <Container>
        <Navbar.Brand className="fw-bold">
          {isFixed ? "Luis Alberto Cervantes García" : "LugpDev2022"}
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
