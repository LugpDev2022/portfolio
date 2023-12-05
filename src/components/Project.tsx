import { useEffect, useState } from 'react';
import type { Project as ProjectType } from '../projects';

interface Props extends ProjectType {
  lazy?: boolean;
}

const Project: React.FC<Props> = ({
  title,
  image,
  description,
  techStack,
  url,
  lazy,
}) => {
  const MOBILE_BREAKPOINT = 1024;

  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
    const className = 'inline-flex gap-[10px] project-title';

    return isMobile ? (
      <a href={url} rel='noreferrer' target='_blank' className={className}>
        {children}
      </a>
    ) : (
      <h4 className={className}>{children}</h4>
    );
  };

  const Content = () => (
    <div className='flex flex-col gap-5'>
      <div>
        <ProjectTitle>
          <>
            {title}
            <img
              src='/images/rotated-arrow.svg'
              className='rotated-arrow'
              alt='rotated arrow image'
            />
          </>
        </ProjectTitle>
        <p className='mt-[5px]'>{description}</p>
      </div>

      <ul className='flex flex-wrap gap-[10px]'>
        {techStack.map((tech) => (
          <li
            key={tech}
            className='bg-cyan-300 text-[#070b30] rounded-3xl px-[10px] py-[3px] text-base'
          >
            {tech}
          </li>
        ))}
      </ul>

      <img
        src={image}
        alt='Project Screenshot'
        className='w-44 aspect-video rounded-md project-image'
        loading={lazy ? 'lazy' : 'eager'}
      />
    </div>
  );

  const className = 'flex flex-col gap-5';

  return (
    <article className='project py-5'>
      {isMobile ? (
        <div className={className}>
          <Content />
        </div>
      ) : (
        <a href={url} rel='noreferrer' target='_blank' className={className}>
          <Content />
        </a>
      )}
    </article>
  );
};

export default Project;
