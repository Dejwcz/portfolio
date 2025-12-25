document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-lang-switch]");
  const storedLang = localStorage.getItem("preferredLang");
  const defaultLang = root.getAttribute("data-lang") || "cs";
  const initialLang = storedLang || defaultLang;

  const applyLang = (lang) => {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);

    buttons.forEach((button) => {
      const isActive = button.dataset.langSwitch === lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.querySelectorAll("[data-placeholder-cs]").forEach((element) => {
      const placeholder =
        lang === "cs"
          ? element.dataset.placeholderCs
          : element.dataset.placeholderEn;
      if (placeholder) {
        element.setAttribute("placeholder", placeholder);
      }
    });
  };

  applyLang(initialLang);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langSwitch;
      localStorage.setItem("preferredLang", lang);
      applyLang(lang);
    });
  });
});
