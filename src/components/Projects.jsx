import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { AppContext } from "../context";
import { ProjectsGrid } from "./ProjectsGrid";
import projects from "../assets/projects";

export const Projects = () => {
  const { isNavFixed } = useContext(AppContext);

  return (
    <>
      <Row id="projects">
        <Col>
          <h3
            style={{ marginTop: isNavFixed ? "142px" : "80px" }}
            className="text-center subtitle"
          >
            PROJECTS
          </h3>
        </Col>
      </Row>

      <ProjectsGrid projects={projects} />
    </>
  );
};
