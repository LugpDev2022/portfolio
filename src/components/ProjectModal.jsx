import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { AppContext } from "../context";

export const ProjectModal = () => {
  const { showProjectModal, handleCloseProjectModal } = useContext(AppContext);

  return (
    <Modal show={showProjectModal} onHide={handleCloseProjectModal}>
      <h1>hui</h1>
    </Modal>
  );
};
