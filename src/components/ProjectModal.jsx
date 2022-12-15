import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "../context";
import { ListGroup } from "react-bootstrap";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

//TODO: Split techStack into 2 columns
export const ProjectModal = () => {
  const { projectModalInfo, showProjectModal, handleCloseProjectModal } =
    useContext(AppContext);
  const { title, imgSrc, techStack, githubRepo, url } = projectModalInfo;

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
        <ListGroup variant="flush">
          {techStack &&
            techStack.map((tech) => (
              <ListGroup.Item
                key={tech}
                style={{
                  color: "white",
                  border: "none",
                }}
              >
                {tech}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};
