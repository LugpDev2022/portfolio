import { Suspense } from "react";
import { Card, Col, Row } from "react-bootstrap";

export const ProjectCard = ({ project }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Col xs={12} md={5} className="mb-5 mt-2">
        <Card bg="dark">
          <Card.Img variant="top" src={project.url} />

          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Suspense>
  );
};
