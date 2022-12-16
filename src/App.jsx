import Container from "react-bootstrap/Container";
import { Hero, AppNavbar, Projects, Skillset } from "./components";

const App = () => (
  <Container fluid className="p-0 overflow-hidden">
    <Hero />
    <AppNavbar />
    <Projects />
    <Skillset />
  </Container>
);

export default App;
