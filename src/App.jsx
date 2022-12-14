import React from "react";
import Container from "react-bootstrap/Container";
import { Hero, AppNavbar } from "./components";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Container fluid className="p-0 overflow-hidden">
      <Hero />
      <AppNavbar />
      <Projects />
    </Container>
  );
}

export default App;
