import Container from "react-bootstrap/Container";
import { Hero, AppNavbar, Projects } from "./components";

const App = () => (
  <Container fluid className="p-0 overflow-hidden">
    <Hero />
    <AppNavbar />
    <Projects />
  </Container>
);

export default App;
