const hiddelElements = document.querySelectorAll('.hidden-element');

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
