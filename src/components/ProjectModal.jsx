import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { divideArray } from "../helpers/divideArray";

export const ProjectModal = () => {
  const { projectModalInfo, showProjectModal, handleCloseProjectModal } =
    useContext(AppContext);
  const { title, imgSrc, techStack, githubRepo, url } = projectModalInfo;
  const [[techStackFirstPart, techStackSecondPart], setDividedTechStack] =
    useState([]);

  useEffect(() => {
    setDividedTechStack(divideArray(techStack));
  }, [techStack]);

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
        <a href={githubRepo} target="_blank">
          <AiFillGithub className="modal-icon" />
        </a>
        <a href={url} target="_blank">
          <AiOutlineLink className="modal-icon" />
        </a>
      </Modal.Header>
      <Modal.Body className="py-0">
        <img src={imgSrc} alt={title} className="img-fluid" />
        <h5 className="my-3 h3">Tech Stack</h5>

        <Row className="mb-3">
          <Col>
            <ListGroup>
              {techStackFirstPart &&
                techStackFirstPart.map((tech) => (
                  <ListGroup.Item
                    key={tech}
                    className="fs-5"
                    style={{
                      background: "#081e2e",
                      color: "white",
                      border: "none",
                    }}
                  >
                    {tech}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {techStackSecondPart &&
                techStackSecondPart.map((tech) => (
                  <ListGroup.Item
                    key={tech}
                    className="fs-5"
                    style={{
                      background: "#081e2e",
                      color: "white",
                      border: "none",
                    }}
                  >
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
