type ActiveLink = 'projects' | 'skillset' | 'home';

type Positions = {
  home: number;
  projects: number;
  skillset: number;
};

export const checkActiveLink = (locations: Positions) => {
  const currentScroll = document.documentElement.scrollTop;
  let activeLink: ActiveLink = 'home';

  if (
    currentScroll >= locations.projects &&
    currentScroll < locations.skillset - 300
  ) {
    activeLink = 'projects';
  } else if (currentScroll >= locations.skillset - 300) {
    activeLink = 'skillset';
  }

  return activeLink;
};
