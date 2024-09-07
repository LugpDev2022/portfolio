export interface Project {
  title: string;
  image: string;
  description: {
    en: string;
    es: string;
  };
  techStack: string[];
  url: string;
}

export const projects: Project[] = [
  // {
  //   title: 'Nextflix',
  //   image: '/images/projects/nextflix.png',
  //   description:
  //     'This project is a Netflix Clone built for educational purposes.',
  //   techStack: [],
  //   url: 'https://nextflix-lugpdev.vercel.app/en/landing',
  // },
  {
    title: 'Todo App',
    image: '/images/projects/todoApp.png',
    description: {
      en: 'Web application designed for organizing your daily tasks effectively.',
      es: 'Aplicación web diseñada para organizar tus tareas diarias de manera efectiva',
    },
    techStack: ['React', 'Bootstrap'],
    url: 'https://lugp-todo-app.netlify.app',
  },
  {
    title: 'Calculator',
    image: '/images/projects/calculator.png',
    description: {
      en: 'Web calculator for helping you with mathematical operations. It has dark and light mode.',
      es: 'Calculadora web para ayudarte con operaciones matemáticas. Cuenta con un modo oscuro y uno claro.',
    },
    techStack: ['React', 'Typescript', 'Tailwind', 'Vitest'],
    url: 'https://lugp-calculator.netlify.app/',
  },
  {
    title: 'Advice Generator',
    image: '/images/projects/adviceGenerator.png',
    description: {
      en: 'Get some of the best advices with this web application.',
      es: 'Accede a los mejores consejos con esta aplicación web.',
    },
    techStack: ['React', 'Bootstrap'],
    url: 'https://advice-generator-lugpdev2022.netlify.app/',
  },
  {
    title: 'Time App',
    image: '/images/projects/timeApp.png',
    description: {
      en: 'Small app for basic time tasks like watching the hour and creating timers.',
      es: 'Aplicación sencilla para tareas básicas relacionadas con el tiempo, como ver la hora y crear temporizadores.',
    },
    techStack: ['React', 'Bootstrap', 'Redux', 'Jest'],
    url: 'https://time-app-lugpdev2022.netlify.app/',
  },
  {
    title: 'News Page',
    image: '/images/projects/news-page.png',
    description: {
      en: 'Homepage of a news website.',
      es: 'Pagina de inicio de un sitio web de noticias.',
    },
    techStack: ['Astro', 'Bootstrap', 'Sass'],
    url: 'https://news-page-lugpdev2022.netlify.app/',
  },
  {
    title: '404 Not Found',
    image: '/images/projects/not-found.png',
    description: {
      en: 'Typical 404 Not Found page.',
      es: 'Página típica de error 404 No Encontrado',
    },
    techStack: ['Astro', 'Tailwind', 'Css'],
    url: 'https://lugp-not-found.netlify.app/',
  },
];
