import projects from "../../src/assets/projects";

describe("tests on projects.js", () => {
  test("should contain the correct info types", () => {
    projects.map((project) => {
      expect(project).toEqual({
        title: expect.any(String),
        imgSrc: expect.any(String),
        githubRepo: expect.any(String),
        url: expect.any(String),
        techStack: expect.any(Array),
      });
    });
  });

  test("should be a github repo", () => {
    projects.map(({ githubRepo }) => {
      expect(githubRepo).toContain("https://github.com/");
    });
  });

  test("should be a valid url", () => {
    projects.map(({ url }) => {
      expect(url).toContain("https://");
    });
  });

  test("should be array of strings (techStack)", () => {
    projects.map(({ techStack }) => {
      techStack.map((tech) => {
        expect(typeof tech).toBe("string");
      });
    });
  });
});
