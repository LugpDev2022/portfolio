import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiJest } from "react-icons/si";

export const Skillset = () => {
  return (
    <Row className="bg-secondary mt-3" id="skills">
      <Col xs={12}>
        <h3 className="subtitle mt-5">SKILLSET</h3>
      </Col>
      <Col xs={12}>
        <AiFillHtml5 className="skillset-icon" />
        <FaCss3Alt className="skillset-icon" />
        <FaSass className="skillset-icon" />
        <FaBootstrap className="skillset-icon" />
        <SiJavascript className="skillset-icon" />
        <FaReact className="skillset-icon" />
        <SiJest className="skillset-icon" />
        <FaGitAlt className="skillset-icon" />
      </Col>
    </Row>
  );
};
