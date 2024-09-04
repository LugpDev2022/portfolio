import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  url: string;
}

const ProjectTitle: React.FC<Props> = ({ children, url }) => {
  const MOBILE_BREAKPOINT = 640;

  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < MOBILE_BREAKPOINT
  );

  const className = 'inline-flex gap-[10px] project-title items-center';

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return isMobile ? (
    <a href={url} rel='noreferrer' target='_blank' className={className}>
      {children}
    </a>
  ) : (
    <h4 className={className}>{children}</h4>
  );
};

export default ProjectTitle;
