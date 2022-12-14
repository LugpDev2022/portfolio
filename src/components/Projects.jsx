import { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../context";
import { ProjectCard } from "./ProjectCard";
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

      <Row className="justify-content-around mt-5 px-5">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </Row>
    </>
  );
};
