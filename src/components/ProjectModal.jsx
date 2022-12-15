import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "../context";
import { Col, ListGroup, Row } from "react-bootstrap";
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
      backdrop={false}
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        style={{ border: "none" }}
        className="d-flex align-items-center justify-content-start gap-3"
      >
        <Modal.Title className="fw-bold">{title}</Modal.Title>
        <a href={githubRepo} target="_blank">
          <AiFillGithub />
        </a>
        <a href={url} target="_blank">
          <AiOutlineLink />
        </a>
      </Modal.Header>
      <Modal.Body>
        <img src={imgSrc} alt={title} className="img-fluid" />
        <h5 className="mt-3 h3">TechStack</h5>

        <Row>
          <Col>
            <ul>
              {techStackFirstPart &&
                techStackFirstPart.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </Col>
          <Col>
            <ul>
              {techStackSecondPart &&
                techStackSecondPart.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
