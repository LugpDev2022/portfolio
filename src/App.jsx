import Container from "react-bootstrap/Container";
import { Hero, AppNavbar, Projects, Skillset, Contact } from "./components";

const App = () => (
  <Container fluid className="p-0 overflow-hidden">
    <Hero />
    <AppNavbar />
    <Projects />
    <Skillset />
    <Contact />
  </Container>
);

export default App;
