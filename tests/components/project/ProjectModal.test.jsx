import { render, screen } from "@testing-library/react";
import { ProjectModal } from "../../../src/components/projects";
import { useProjectModal } from "../../../src/hooks/useProjectModal";

vi.mock("../../../src/hooks/useProjectModal");

describe("tests on <ProjectModal />", () => {
  test("should show the modal correctly", () => {
    const title = "Testing Portfolio";
    const githubRepo = "https://github.com/portfolio";
    const url = "https://lcervant.tech/";
    const imgSrc = "https://portfolio/portfolio.png";
    const techStackFirstPart = ["React", "Vitest"];
    const techStackSecondPart = ["JS", "CSS"];

    useProjectModal.mockReturnValue({
      showProjectModal: true,
      title,
      githubRepo,
      url,
      imgSrc,
      techStackFirstPart,
      techStackSecondPart,
    });

    render(<ProjectModal />);

    expect(screen.getByText(title)).toBeTruthy();

    const githubLink = screen.getByTestId("githubRepoLink");
    expect(githubLink.href).toBe(githubRepo);

    const urlLink = screen.getByTestId("urlLink");
    expect(urlLink.href).toBe(url);

    const webImage = screen.getByRole("img");
    expect(webImage.src).toBe(imgSrc);

    expect(screen.getByText("Tech Stack")).toBeTruthy();

    techStackFirstPart.map((tech) => {
      expect(screen.getByText(tech)).toBeTruthy();
    });

    techStackSecondPart.map((tech) => {
      expect(screen.getByText(tech)).toBeTruthy();
    });
  });
});
