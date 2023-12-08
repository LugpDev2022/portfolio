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
    description: '',
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
    description: '',
    techStack: ['React', 'Bootstrap'],
    url: 'https://lugp-todo-app.netlify.app',
  },
  {
    title: 'Time App',
    image: '/images/projects/timeApp.png',
    description:
      'Small app for basic time tasks like watching the hour and creating timers.',
    techStack: ['React', 'Bootstrap', 'Redux', 'Jest'],
    url: 'https://lugp-todo-app.netlify.app',
  },
  {
    title: 'News Page',
    image: '/images/projects/news-page.png',
    description: '',
    techStack: ['Astro', 'Bootstrap', 'Sass'],
    url: 'https://lugp-todo-app.netlify.app',
  },
  {
    title: '404 Not Found',
    image: '/images/projects/not-found.png',
    description:
      'Small app for basic time tasks like watching the hour and creating timers.',
    techStack: ['Astro', 'Tailwind', 'Css'],
    url: 'https://lugp-todo-app.netlify.app',
  },
];
