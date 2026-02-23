const I18N = {
  en: {
    "left.role": "Full Stack Engineer",
    "left.resume": "Download Resume",
    "left.linkedin": "LinkedIn Profile",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.theme": "Theme",
    "nav.themeLight": "Theme: Light",
    "nav.themeDark": "Theme: Dark",
    "about.title": "About Me",
    "about.p1":
      "Full Stack Engineer with 5 years of production experience building scalable systems across backend, frontend, cloud and AI.",
    "about.p2":
      "I focus on solving business problems with robust architecture, clear technical decisions and production-first delivery.",
    "about.f1t": "Backend Engineering",
    "about.f1d": "APIs, distributed systems, performance and maintainable services.",
    "about.f2t": "Cloud + DevOps",
    "about.f2d": "AWS/Azure deployments, CI/CD and reliable operations in production.",
    "resume.title": "Resume",
    "resume.visma": "Serverless architecture, AI integration and Redshift-based analytics optimization.",
    "resume.interfell": "Symfony monolith migration to Node.js microservices with DDD + Hexagonal.",
    "resume.amg": "Led a 10-dev team and modernized ERP architecture with real-time systems.",
    "resume.download": "Download full resume",
    "projects.title": "Projects",
    "projects.finanzas": "Multi-tenant finance app with reconciliation, imports and production CI/CD.",
    "projects.shop": "Conversion-focused storefront for beauty products and services.",
    "projects.github": "Code samples, architecture experiments and real product repositories.",
    "contact.title": "Contact",
    "contact.body": "Open to senior backend/full-stack roles and high-impact freelance collaborations."
  },
  es: {
    "left.role": "Ingeniera Full Stack",
    "left.resume": "Descargar CV",
    "left.linkedin": "Perfil de LinkedIn",
    "nav.about": "Sobre mí",
    "nav.resume": "Resumen",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.theme": "Tema",
    "nav.themeLight": "Tema: Claro",
    "nav.themeDark": "Tema: Oscuro",
    "about.title": "Sobre mí",
    "about.p1":
      "Ingeniera Full Stack con 5 años de experiencia en producción construyendo sistemas escalables en backend, frontend, cloud e IA.",
    "about.p2":
      "Me enfoco en resolver problemas de negocio con arquitectura sólida, decisiones técnicas claras y entrega orientada a producción.",
    "about.f1t": "Ingeniería Backend",
    "about.f1d": "APIs, sistemas distribuidos, performance y servicios mantenibles.",
    "about.f2t": "Cloud + DevOps",
    "about.f2d": "Despliegues en AWS/Azure, CI/CD y operación confiable en producción.",
    "resume.title": "Resumen",
    "resume.visma": "Arquitectura serverless, integración de IA y optimización analítica con Redshift.",
    "resume.interfell": "Migración de monolito Symfony a microservicios Node.js con DDD + Hexagonal.",
    "resume.amg": "Lideré un equipo de 10 devs y modernicé arquitectura ERP con sistemas en tiempo real.",
    "resume.download": "Descargar CV completo",
    "projects.title": "Proyectos",
    "projects.finanzas": "App de finanzas multi-tenant con conciliación, importaciones y CI/CD en producción.",
    "projects.shop": "Tienda optimizada para conversión de servicios y productos de belleza.",
    "projects.github": "Muestras de código, experimentos de arquitectura y repositorios reales.",
    "contact.title": "Contacto",
    "contact.body": "Disponible para roles senior backend/full-stack y colaboraciones freelance de alto impacto."
  }
};

function pickLang() {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "es" || q === "en") return q;
  const ls = localStorage.getItem("portfolio_lang");
  if (ls === "es" || ls === "en") return ls;
  return String(navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

function setLangInUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  history.replaceState({}, "", url.toString());
}

function applyLang(lang, withUrl = false) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("portfolio_lang", lang);
  if (withUrl) setLangInUrl(lang);
  refreshThemeButtonLabel();
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn[data-tab]");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      if (!target) return;
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.querySelector(`[data-panel="${target}"]`)?.classList.add("active");
    });
  });
}

function pickTheme() {
  const saved = localStorage.getItem("portfolio_theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio_theme", theme);
  refreshThemeButtonLabel();
}

function refreshThemeButtonLabel() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const lang = document.documentElement.lang === "es" ? "es" : "en";
  const theme = document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
  const key = theme === "light" ? "nav.themeLight" : "nav.themeDark";
  btn.textContent = (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || "Theme";
}

function setupThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });
}

function setupLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === "es" || lang === "en") applyLang(lang, true);
    });
  });
}

applyLang(pickLang());
applyTheme(pickTheme());
setupTabs();
setupLangButtons();
setupThemeToggle();
