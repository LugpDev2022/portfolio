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
  {
    title: 'Lugp.dev',
    image: '/images/projects/lugpdev.png',
    description: {
      en: 'Personal blog to share guides, solutions, and insights related to web development and programming. Includes features such as search functionality, article publishing, and filtering by categories.',
      es: 'Blog personal dedicado a compartir guías, soluciones y aprendizajes relacionados con el desarrollo web y la programación. El blog incluye funcionalidades como sistema de búsqueda, publicación de artículos y filtrado por categorías.',
    },
    techStack: ['Astro', 'TypeScript', 'Tailwindcss', 'Cypress'],
    url: 'https://lugpdev-blog.vercel.app',
  },
  {
    title: 'Nextflix',
    image: '/images/projects/nextflix.png',
    description: {
      en: 'This project is a Netflix Clone built for educational purposes.',
      es: 'Clon de Netflix creado con propósitos educativos.',
    },
    techStack: ['Nextjs', 'Prisma', 'Tailwind', 'Typescript'],
    url: 'https://nextflix-lugpdev.vercel.app/en/landing',
  },
  {
    title: 'Todo App',
    image: '/images/projects/todoApp.png',
    description: {
      en: 'Web application designed for organizing your daily tasks effectively.',
      es: 'Aplicación web diseñada para organizar tus tareas diarias de manera efectiva.',
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
];
