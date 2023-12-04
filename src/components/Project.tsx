import { useEffect, useState } from 'react';
import type { Project as ProjectType } from '../projects';

const Project: React.FC<ProjectType> = ({
  title,
  image,
  description,
  techStack,
  url,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  const Content = () => (
    <div className='flex flex-col gap-5'>
      <a
        href={url}
        rel='noreferrer'
        target='_blank'
        className='inline-flex gap-[10px]'
      >
        {title}
        <img src='/rotated-arrow.svg' className='rotated-arrow' />
      </a>
      <p>{description}</p>

      <ul className='flex flex-wrap gap-[10px]'>
        {techStack.map((tech) => (
          <li
            key={tech}
            className='bg-cyan-300 text-[#070b30] rounded-3xl px-[10px] py-[3px]'
          >
            {tech}
          </li>
        ))}
      </ul>

      <img
        src={image}
        alt='Project Screenshot'
        className='w-44 aspect-video rounded-md project-image'
      />
    </div>
  );

  return (
    <article className='project py-5'>
      {isMobile ? (
        <Content />
      ) : (
        <a href={url} rel='noreferrer' target='_blank' className='block'>
          <Content />
        </a>
      )}
    </article>
  );
};

export default Project;
