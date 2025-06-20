// Function to detect mobile devices
function isMobileDevice() {
  return window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
}

const hiddelElements = document.querySelectorAll('.hidden-element');

if (isMobileDevice()) {
  // On mobile, show all elements immediately (no animation)
  hiddelElements.forEach((element) => {
    element.classList.add('show-element');
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        } else if (entry.boundingClientRect.top >= 0) {
          entry.target.classList.remove('show-element');
        }
      });
    },
    { root: null }
  );

  hiddelElements.forEach((element) => observer.observe(element));
}
