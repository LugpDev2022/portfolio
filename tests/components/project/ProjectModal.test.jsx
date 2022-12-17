import { render, screen } from "@testing-library/react";
import { ProjectModal } from "../../../src/components/projects";
import { useProjectModal } from "../../../src/hooks/useProjectModal";

vi.mock("../../../src/hooks/useProjectModal");

describe("tests on <ProjectModal />", () => {
  beforeEach(() => vi.clearAllMocks());

  test("should show the title", () => {
    const title = "Testing Portfolio";

    useProjectModal.mockReturnValue({
      showProjectModal: true,
      title,
    });

    render(<ProjectModal />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show the github link", () => {
    const githubRepo = "https://github.com/portfolio";

    useProjectModal.mockReturnValue({
      showProjectModal: true,
      githubRepo,
    });

    render(<ProjectModal />);
    const githubLink = screen.getByTestId("githubRepoLink");
    expect(githubLink.href).toBe(githubRepo);
  });

  test("should show the web link", () => {
    const url = "https://lcervant.tech/";

    useProjectModal.mockReturnValue({
      showProjectModal: true,
      url,
    });

    render(<ProjectModal />);
    const urlLink = screen.getByTestId("urlLink");
    expect(urlLink.href).toBe(url);
  });

  test("should show the web image", () => {
    const imgSrc = "https://portfolio/portfolio.png";

    useProjectModal.mockReturnValue({
      showProjectModal: true,
      imgSrc,
    });

    render(<ProjectModal />);
    const webImage = screen.getByRole("img");
    expect(webImage.src).toBe(imgSrc);
  });

  test("should show the technologies correctly", () => {
    const techStackFirstPart = ["React", "Vitest"];
    const techStackSecondPart = ["JS", "CSS"];

    useProjectModal.mockReturnValue({
      showProjectModal: true,
      techStackFirstPart,
      techStackSecondPart,
    });

    render(<ProjectModal />);
    expect(screen.getByText("Tech Stack")).toBeTruthy();

    techStackFirstPart.map((tech) => {
      expect(screen.getByText(tech)).toBeTruthy();
    });

    techStackSecondPart.map((tech) => {
      expect(screen.getByText(tech)).toBeTruthy();
    });
  });
});
