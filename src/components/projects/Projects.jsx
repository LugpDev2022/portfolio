import { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../../context";
import { ProjectCard, ProjectModal } from "./";
import projects from "../../assets/projects";

export const Projects = () => {
  const { isNavFixed } = useContext(AppContext);

  return (
    <>
      <Row as="main" id="projects">
        <Col xs={12}>
          <h3
            style={{ marginTop: isNavFixed ? "142px" : "80px" }}
            className="subtitle animate__animated animate__fadeIn"
          >
            PROJECTS
          </h3>
        </Col>

        <Col xs={12} className="mt-5 px-5">
          <Row className="justify-content-around">
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.title} />;
            })}
          </Row>
        </Col>
      </Row>

      <ProjectModal />
    </>
  );
};
