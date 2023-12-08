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
  const MOBILE_BREAKPOINT = 640;

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
    <>
      <div className='sm:order-2'>
        <ProjectTitle>
          <>
            {title}
            <img
              src='/images/rotated-arrow.svg'
              className='rotated-arrow'
              alt='rotated arrow image'
              width='14px'
              height='28px'
            />
          </>
        </ProjectTitle>
        <p className='mt-[5px]'>{description}</p>

        <ul className='flex flex-wrap gap-[10px] mt-5'>
          {techStack.map((tech) => (
            <li
              key={tech}
              className='bg-cyan-300 text-[#090f3f] rounded-3xl px-[10px] py-[3px] text-base'
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <img
        src={image}
        alt='Project Screenshot'
        className='max-h-[99px] rounded-md project-image sm:order-1'
        loading={lazy ? 'lazy' : 'eager'}
        width='176px'
        height='99px'
      />
    </>
  );

  const className = 'flex flex-col gap-5 sm:flex-row py-5 sm:p-5';

  return (
    <article className='project rounded-[10px]'>
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
