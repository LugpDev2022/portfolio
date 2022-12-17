import { fireEvent, render, screen } from "@testing-library/react";
import { ProjectCard } from "../../../src/components/projects/ProjectCard";
import { AppContext } from "../../../src/context";

describe("tests on <ProjectCard />", () => {
  const project = {
    title: "Testing portfolio",
    imgSrc: "http://project.png",
  };

  test("should show the image correctly", () => {
    render(
      <AppContext.Provider value={{}}>
        <ProjectCard project={project} />
      </AppContext.Provider>
    );

    const img = screen.getByRole("img");
    expect(img.src).toBe(project.imgSrc);
    expect(img.alt).toBe(project.title);
  });

  test("should call the handleShowProjectModal on card click", () => {
    const handleShowProjectModal = vi.fn();

    render(
      <AppContext.Provider value={{ handleShowProjectModal }}>
        <ProjectCard project={project} />
      </AppContext.Provider>
    );

    const card = screen.getByTestId("card");
    fireEvent.click(card);
    expect(handleShowProjectModal).toHaveBeenCalledWith(project);
  });
});
