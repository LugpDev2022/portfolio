import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "../context";

export const ProjectModal = () => {
  const { projectModalInfo, showProjectModal, handleCloseProjectModal } =
    useContext(AppContext);
  const { title, url } = projectModalInfo;

  return (
    <Modal
      show={showProjectModal}
      onHide={handleCloseProjectModal}
      centered
      className="custom-modal"
      size="lg"
    >
      <Modal.Header closeButton closeVariant="white" style={{ border: "none" }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={url} alt={title} className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
};
