import { render, screen } from "@testing-library/react";
import { Projects } from "../../../src/components/projects/Projects";
import { AppContext } from "../../../src/context";

describe("tests on <Projects />", () => {
  const contextValue = {
    projectModalInfo: {
      techStack: [],
    },
    showProjectModal: false,
  };

  test("should have a margin of 142px if nav fixed", () => {
    render(
      <AppContext.Provider value={{ ...contextValue, isNavFixed: true }}>
        <Projects />
      </AppContext.Provider>
    );

    const projectsSubtitle = screen.getByTestId("projects-subtitle");
    expect(projectsSubtitle.style.marginTop).toBe("142px");
  });

  test("should have a margin of 80px if nav not fixed", () => {
    render(
      <AppContext.Provider value={{ ...contextValue, isNavFixed: false }}>
        <Projects />
      </AppContext.Provider>
    );

    const projectsSubtitle = screen.getByTestId("projects-subtitle");
    expect(projectsSubtitle.style.marginTop).toBe("80px");
  });
});
