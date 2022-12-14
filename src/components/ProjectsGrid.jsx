import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";

export const ProjectsGrid = ({ projects }) => {
  return (
    <Row className="justify-content-around mt-5 px-5">
      {projects.map((project) => {
        console.log(project.url);
        return (
          <Col xs={12} md={5} key={project.title} className="mb-5 mt-2">
            <Card bg="dark">
              <Card.Img variant="top" src={project.url} />

              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.array.isRequired,
};
