import { Suspense, useContext } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import { AppContext } from "../../context";

export const ProjectCard = ({ project }) => {
  const { handleShowProjectModal } = useContext(AppContext);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Col
        xs={12}
        md={5}
        className="mb-5 mt-2 animate__animated animate__fadeIn"
        onClick={() => handleShowProjectModal(project)}
        data-testid="card"
      >
        <img
          src={project.imgSrc}
          alt={project.title}
          className="img-fluid rounded project-img"
        />
      </Col>
    </Suspense>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
