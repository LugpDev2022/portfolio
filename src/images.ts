import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiBootstrap,
  SiJest,
} from 'react-icons/si';

import type { Skill } from '@/components/Skillset.astro';

export const languages: Skill[] = [
  {
    name: 'html',
    icon: SiHtml5,
  },
  {
    name: 'javascript',
    icon: SiJavascript,
  },
  {
    name: 'css',
    icon: SiCss3,
  },
  {
    name: 'typescript',
    icon: SiTypescript,
  },
  {
    name: 'sass',
    icon: SiSass,
  },
];

export const frameworks: Skill[] = [
  {
    name: 'react',
    icon: SiReact,
  },
  {
    name: 'nextjs',
    icon: SiNextdotjs,
  },
  {
    name: 'astro',
    icon: SiAstro,
  },
  {
    name: 'tailwind',
    icon: SiTailwindcss,
  },
  {
    name: 'bootstrap',
    icon: SiBootstrap,
  },
  {
    name: 'jest',
    icon: SiJest,
  },
];

export const tools: string[] = ['vercel', 'vite', 'netlify', 'git', 'firebase'];
