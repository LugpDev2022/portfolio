type ActiveLink = 'projects' | 'skillset' | 'home' | 'education';

type Positions = {
  home: number;
  projects: number;
  skillset: number;
};

export const checkActiveLink = (locations: Positions): ActiveLink => {
  const currentScroll = document.documentElement.scrollTop;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  if (currentScroll < 200) {
    return 'home';
  }

  if (currentScroll < locations.skillset - 400) {
    return 'projects';
  }

  const educationElement = document.querySelector('#education');
  if (!educationElement) {
    return 'skillset';
  }

  const educationRect = educationElement.getBoundingClientRect();
  const isInViewport =
    educationRect.top >= 0 &&
    educationRect.left >= 0 &&
    educationRect.bottom <= viewportHeight &&
    educationRect.right <= viewportWidth;

  return isInViewport ? 'education' : 'skillset';
};
