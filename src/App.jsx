import Container from "react-bootstrap/Container";
import {
  Hero,
  AppNavbar,
  Projects,
  Skillset,
  Contact,
  Footer,
} from "./components";

const App = () => (
  <Container fluid className="p-0 overflow-hidden">
    <Hero />
    <AppNavbar />
    <Projects />
    <Skillset />
    <Contact />
    <Footer />
  </Container>
);

export default App;
