import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { contactIcons } from "../assets/contactIcons";

export const Contact = () => (
  <Row id="contact" className="pb-5">
    <Col xs={12}>
      <h3 className="subtitle my-5">CONTACT</h3>
    </Col>

    <Col xs={12} className="d-flex justify-content-center flex-row flex-wrap">
      {contactIcons.map(({ icon, link, id }) => (
        <a href={link} key={id} target="_blank" className="contact-icon">
          {icon}
        </a>
      ))}
    </Col>
  </Row>
);
