import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
} from 'react-icons/si';

import type { Skill } from '@/components/Skillset.astro';

export const languages: string[] = [
  'html',
  'javascript',
  'css',
  'typescript',
  'sass',
];

export const languagesWithIcons: Skill[] = [
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

export const frameworks: string[] = [
  'react',
  'nextjs',
  'astro',
  'tailwind',
  'bootstrap',
  'jest',
];

export const tools: string[] = ['vercel', 'vite', 'netlify', 'git', 'firebase'];
