import { useContext } from "react";
import Row from "react-bootstrap/Row";
import { AppContext } from "../../context";
import { ProjectCard, ProjectModal } from "./";
import projects from "../../assets/projects";

export const Projects = () => {
  const { isNavFixed } = useContext(AppContext);

  return (
    <>
      <Row id="projects">
        <h3
          style={{ marginTop: isNavFixed ? "142px" : "80px" }}
          className="text-center subtitle animate__animated animate__fadeIn"
        >
          PROJECTS
        </h3>
      </Row>

      <Row className="justify-content-around mt-5 px-5">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </Row>

      <ProjectModal />
    </>
  );
};
