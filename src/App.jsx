import React from "react";
import Container from "react-bootstrap/Container";
import { Hero, AppNavbar, Projects } from "./components";

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
