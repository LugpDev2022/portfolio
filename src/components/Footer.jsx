import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Footer = () => (
  <Row as="footer" className="bg-dark">
    <Col>
      <p className="text-center mt-2 mb-0">
        Developed and designed by&nbsp;
        <span className="fw-bold">Luis Alberto Cervantes García</span>. &copy;
        2023. All rights reserved.
      </p>
      <p className="text-center mt-0 mb-2">
        <a
          target="_blank"
          href="https://icons8.com/icon/LoyAjcvVKv1K/portfolio"
          className="text-white"
        >
          Portfolio
        </a>
        &nbsp;icon by&nbsp;
        <a target="_blank" href="https://icons8.com" className="text-white">
          Icons8
        </a>
      </p>
    </Col>
  </Row>
);
