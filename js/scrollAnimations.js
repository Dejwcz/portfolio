document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Keep content static for users who prefer reduced motion.
  if (prefersReducedMotion) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // Observe all sections and cards
  const animatedElements = document.querySelectorAll(
    ".section-pad, .proof-card, .project-card, .skills-panel"
  );

  if (animatedElements.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});
