import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { AppContext } from "../context";

export const ProjectModal = () => {
  const { projectModalInfo, showProjectModal, handleCloseProjectModal } =
    useContext(AppContext);

  return (
    <Modal
      show={showProjectModal}
      onHide={handleCloseProjectModal}
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton closeVariant="white" style={{ border: "none" }}>
        <Modal.Title>{projectModalInfo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={projectModalInfo.url}
          alt={projectModalInfo.title}
          className="img-fluid"
        />
      </Modal.Body>
    </Modal>
  );
};
