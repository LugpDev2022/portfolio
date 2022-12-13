import React from "react";
import Container from "react-bootstrap/Container";
import { Hero, AppNavbar } from "./components";

function App() {
  return (
    <Container fluid className="p-0 overflow-hidden">
      <Hero />
      <AppNavbar />
    </Container>
  );
}

export default App;
