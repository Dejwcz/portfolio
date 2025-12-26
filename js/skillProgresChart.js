document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-item");
  if (skills.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animateSkill = (skill) => {
    const circle = skill.querySelector(".progress");
    const percentText = skill.querySelector(".skill-percent");
    const percent = Number(skill.dataset.percent) || 0;

    if (!circle || !percentText) return;

    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    if (prefersReducedMotion) {
      percentText.textContent = `${percent}%`;
      return;
    }
    let count = 0;
    const timer = setInterval(() => {
      if (count >= percent) {
        clearInterval(timer);
      } else {
        count++;
        percentText.textContent = count + "%";
      }
    }, 15);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          animateSkill(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  skills.forEach((skill) => observer.observe(skill));
});
