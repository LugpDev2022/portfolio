import TimeAppSS from "./images/TimeAppSS.webp";
import CalculatorAppSS from "./images/CalculatorAppSS.webp";
import NotFoundPage from "./images/404PageSS.webp";
import TodoAppSS from "./images/TodoAppSS.webp";
import AdviceGeneratorSS from "./images/AdviceGeneratorSS.webp";

const projects = [
  {
    title: "Time App",
    imgSrc: TimeAppSS,
    githubRepo: "https://github.com/LugpDev2022/time-app",
    url: "https://time-app-lugpdev2022.netlify.app/",
    techStack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Redux Toolkit",
      "Styled Components",
      "Sass",
      "Vite",
      "Jest",
      "Yarn",
    ],
  },
  {
    title: "Advice Generator",
    imgSrc: AdviceGeneratorSS,
    githubRepo: "https://github.com/LugpDev2022/advice-generator",
    url: "https://advice-generator-lugpdev2022.netlify.app/",
    techStack: ["React", "JavaScript", "Sass", "Vite", "Yarn"],
  },
  {
    title: "Calculator App",
    imgSrc: CalculatorAppSS,
    githubRepo: "https://github.com/LugpDev2022/calculator",
    url: "https://lugp-calculator.netlify.app/",
    techStack: ["React", "TypeScript", "Bootstrap", "CSS", "Vite", "Yarn"],
  },
  {
    title: "404 Page",
    imgSrc: NotFoundPage,
    githubRepo: "https://github.com/LugpDev2022/404-not-found",
    url: "https://lugpdev2022-404.netlify.app/",
    techStack: ["React", "Sass", "Vite", "Yarn"],
  },
  {
    title: "Todo App",
    imgSrc: TodoAppSS,
    githubRepo: "https://github.com/LugpDev2022/todo-app",
    url: "https://lugp-todo-app.netlify.app/",
    techStack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "React Router",
      "CSS",
      "Jest",
      "Vite",
      "Yarn",
    ],
  },
];

export default projects;
