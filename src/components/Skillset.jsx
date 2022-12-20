import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import { skillsetIcons } from "../assets/skillsetIcons";

export const Skillset = () => (
  <Row className="bg-secondary my-3 justify-content-center" id="skills">
    <Col xs={10} sm={10} md={8} lg={7}>
      <Row className="justify-content-center">
        <Col xs={12}>
          <h3 className="subtitle my-5">SKILLSET</h3>
        </Col>

        {skillsetIcons.map(({ id, tooltip, icon }) => (
          <Col
            xs={4}
            sm={3}
            className="d-flex justify-content-center mb-5"
            key={id}
          >
            <OverlayTrigger overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>
              <div className="skillset-icon">{icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
);
