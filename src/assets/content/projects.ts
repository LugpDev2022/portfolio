import type { ImageMetadata } from 'astro';

import vasiImage from '@images/projects/vasi.png';
import pasariImage from '@images/projects/pasari.png';
import lugpdevImage from '@images/projects/lugpdev.png';
import nextflixImage from '@images/projects/nextflix.png';
import todoAppImage from '@images/projects/todoApp.png';
import calculatorImage from '@images/projects/calculator.png';
import adviceGeneratorImage from '@images/projects/adviceGenerator.png';
import timeAppImage from '@images/projects/timeApp.png';

export interface Project {
  title: string;
  image: ImageMetadata;
  description: {
    en: string;
    es: string;
  };
  techStack: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: 'VASI',
    image: vasiImage,
    description: {
      en: 'Web app with AI-generated quizzes for learning multiple subjects.',
      es: 'App web con quizzes personalizados por IA para aprender diversas materias.',
    },
    techStack: [
      'Nextjs',
      'TypeScript',
      'Prisma',
      'Tailwindcss',
      'Vercel AI SDK',
    ],
    url: 'https://vasi.vercel.app',
  },
  {
    title: 'Pasari RPI',
    image: pasariImage,
    description: {
      en: 'Official website for Pasari, a student Formula SAE team. Features include team info, car designs, sponsors, results, filtering, multilingual support, and responsive design.',
      es: 'Sitio web oficial del equipo Pasari, participante en Formula SAE. Incluye información del equipo, autos, patrocinadores, resultados, filtrado, soporte multilingüe y diseño responsivo.',
    },
    techStack: ['Astro', 'React', 'Tailwindcss', 'TypeScript'],
    url: 'https://pasarirpi.com',
  },
  {
    title: 'Lugp.dev',
    image: lugpdevImage,
    description: {
      en: 'Personal blog for web development guides and solutions. Includes search, publishing, and category filtering.',
      es: 'Blog personal sobre desarrollo web. Incluye búsqueda, publicación y filtrado por categorías.',
    },
    techStack: ['Astro', 'TypeScript', 'Tailwindcss', 'Cypress'],
    url: 'https://lugpdev-blog.vercel.app',
  },
  {
    title: 'Nextflix',
    image: nextflixImage,
    description: {
      en: 'Netflix Clone built for educational purposes.',
      es: 'Clon de Netflix con fines educativos.',
    },
    techStack: ['Nextjs', 'Prisma', 'Tailwind', 'Typescript'],
    url: 'https://nextflix-lugpdev.vercel.app/en/landing',
  },
  {
    title: 'Todo App',
    image: todoAppImage,
    description: {
      en: 'Web app to organize daily tasks.',
      es: 'Aplicación web para organizar tareas diarias.',
    },
    techStack: ['React', 'Bootstrap'],
    url: 'https://lugp-todo-app.netlify.app',
  },
  {
    title: 'Calculator',
    image: calculatorImage,
    description: {
      en: 'Web calculator with dark and light mode.',
      es: 'Calculadora web con modo oscuro y claro.',
    },
    techStack: ['React', 'Typescript', 'Tailwind', 'Vitest'],
    url: 'https://lugp-calculator.netlify.app/',
  },
  {
    title: 'Advice Generator',
    image: adviceGeneratorImage,
    description: {
      en: 'Web app to get advice.',
      es: 'Aplicación web para obtener consejos.',
    },
    techStack: ['React', 'Bootstrap'],
    url: 'https://advice-generator-lugpdev2022.netlify.app/',
  },
  {
    title: 'Time App',
    image: timeAppImage,
    description: {
      en: 'Small app for basic time tasks like watching the hour and creating timers.',
      es: 'Aplicación sencilla para tareas básicas relacionadas con el tiempo, como ver la hora y crear temporizadores.',
    },
    techStack: ['React', 'Bootstrap', 'Redux', 'Jest'],
    url: 'https://time-app-lugpdev2022.netlify.app/',
  },
];
