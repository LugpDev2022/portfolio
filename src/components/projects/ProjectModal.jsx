import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ListGroup from "react-bootstrap/ListGroup";
import { useProjectModal } from "../../hooks";

export const ProjectModal = () => {
  const {
    showProjectModal,
    handleCloseProjectModal,
    techStackFirstPart,
    techStackSecondPart,
    title,
    githubRepo,
    url,
    imgSrc,
  } = useProjectModal();

  return (
    <Modal
      show={showProjectModal}
      onHide={handleCloseProjectModal}
      centered
      className="custom-modal"
      size="lg"
      scrollable
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        style={{ border: "none" }}
        className="d-flex align-items-center justify-content-start gap-3"
      >
        <Modal.Title className="fw-bold">{title}</Modal.Title>
        <OverlayTrigger
          overlay={<Tooltip id="tooltop-github">Source Code</Tooltip>}
        >
          <a href={githubRepo} target="_blank">
            <AiFillGithub className="modal-icon" />
          </a>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltop-link">URL</Tooltip>}>
          <a href={url} target="_blank">
            <AiOutlineLink className="modal-icon" />
          </a>
        </OverlayTrigger>
      </Modal.Header>
      <Modal.Body className="py-0">
        <img src={imgSrc} alt={title} className="img-fluid" />
        <h5 className="my-3 h3">Tech Stack</h5>
        <Row className="mb-3">
          <Col>
            <ListGroup>
              {techStackFirstPart &&
                techStackFirstPart.map((tech) => (
                  <ListGroup.Item key={tech} className="fs-5 custom-list-item">
                    {tech}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {techStackSecondPart &&
                techStackSecondPart.map((tech) => (
                  <ListGroup.Item key={tech} className="fs-5 custom-list-item">
                    {tech}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
