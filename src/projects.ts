export interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Todo App',
    image: '/images/projects/todoApp.png',
    description:
      'Web application designed for organizing your daily tasks effectively.',
    techStack: ['React', 'Bootstrap'],
    url: 'https://lugp-todo-app.netlify.app',
  },
  {
    title: 'Calculator',
    image: '/images/projects/calculator.png',
    description:
      'Web calculator for helping you with mathematical operations. It has dark and light mode.',
    techStack: ['React', 'Typescript', 'Tailwind', 'Vitest'],
    url: 'https://lugp-calculator.netlify.app/',
  },
  {
    title: 'Advice Generator',
    image: '/images/projects/adviceGenerator.png',
    description:
      "Access the finest advice available with this web application, catering to everyone's needs.",
    techStack: ['React', 'Bootstrap'],
    url: 'https://advice-generator-lugpdev2022.netlify.app/',
  },
  {
    title: 'Time App',
    image: '/images/projects/timeApp.png',
    description:
      'Small app for basic time tasks like watching the hour and creating timers.',
    techStack: ['React', 'Bootstrap', 'Redux', 'Jest'],
    url: 'https://time-app-lugpdev2022.netlify.app/',
  },
  {
    title: 'News Page',
    image: '/images/projects/news-page.png',
    description: 'Homepage of a news website.',
    techStack: ['Astro', 'Bootstrap', 'Sass'],
    url: 'https://news-page-lugpdev2022.netlify.app/',
  },
  {
    title: '404 Not Found',
    image: '/images/projects/not-found.png',
    description: 'Typical 404 Not Found page.',
    techStack: ['Astro', 'Tailwind', 'Css'],
    url: 'https://lugp-not-found.netlify.app/',
  },
];
