import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
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
    <Row className="bg-secondary my-3" id="skills">
      <Col xs={12}>
        <h3 className="subtitle my-5">SKILLSET</h3>
      </Col>
      <Col xs={12} className="d-flex">
        <OverlayTrigger overlay={<Tooltip id="tooltip-html">HTML</Tooltip>}>
          <div>
            <AiFillHtml5 className="skillset-icon" />
          </div>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-css">CSS</Tooltip>}>
          <div>
            <FaCss3Alt className="skillset-icon" />
          </div>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id="tooltip-sass">Sass</Tooltip>}>
          <div>
            <FaSass className="skillset-icon" />
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-bootstrap">Bootstrap 5</Tooltip>}
        >
          <div>
            <FaBootstrap className="skillset-icon" />
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          overlay={<Tooltip id="tooltip-javascript">JavaScript</Tooltip>}
        >
          <div>
            <SiJavascript className="skillset-icon" />
          </div>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-react">React</Tooltip>}>
          <div>
            <FaReact className="skillset-icon" />
          </div>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-jest">Jest</Tooltip>}>
          <div>
            <SiJest className="skillset-icon" />
          </div>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-git">Git</Tooltip>}>
          <div>
            <FaGitAlt className="skillset-icon" />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
};
