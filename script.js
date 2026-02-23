const I18N = {
  en: {
    "left.role": "Senior Full Stack Engineer | Cloud & AI Architect",
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
      "Software Engineer with 5+ years of experience building scalable full-stack solutions in production.",
    "about.p2":
      "Specialized in legacy modernization, distributed architectures, cloud computing and AI integration with real business impact.",
    "about.f1t": "Architecture & Backend",
    "about.f1d": "Node.js, NestJS, Laravel, DDD/Hexagonal and high-performance services.",
    "about.f2t": "Cloud, Data & AI",
    "about.f2d": "AWS/Azure, Redis, Redshift and secure GPT integrations for enterprise products.",
    "resume.title": "Resume",
    "resume.vismaMeta": "Senior Full Stack Engineer · 2024 — Present",
    "resume.visma":
      "Designed AI-driven action plans (GPT-3.5/GPT-4o-mini), optimized backend with Redis and query tuning, and migrated analytics workloads to Redshift.",
    "resume.interfellMeta": "Backend Engineer (Contractor) · 2025 — Present",
    "resume.interfell":
      "Migrated Symfony monolith to Node.js microservices, implementing Hexagonal Architecture, DDD and internal logging SDK.",
    "resume.amgMeta": "Full Stack Developer / Technical Lead · 2021 — 2023",
    "resume.amg":
      "Led a 10-developer team, modernized ERP architecture and delivered real-time systems with WebSockets, Flutter and AWS.",
    "resume.tennisMeta": "Full Stack Developer (Freelance)",
    "resume.tennis":
      "Built end-to-end tournament management platform: architecture, optimized database, CI/CD pipeline and production deployment.",
    "resume.eduTitle": "Education & Publications",
    "resume.eduMeta": "Software Engineering Bachelor's Degree",
    "resume.edu":
      "Co-author of: \"Application of the Few-Shot Learning Method to GPT-3.5\" — CISCI 2024.",
    "resume.download": "Download full CV",
    "projects.title": "Projects",
    "projects.finanzas": "Production finance platform with multi-tenant architecture, reconciliation and secure deployment practices.",
    "projects.shop": "Ecommerce MVP focused on conversion, clean UX and operational simplicity.",
    "projects.github": "Repositories with full-stack, backend, cloud and AI-focused implementations.",
    "contact.title": "Contact",
    "contact.body": "Based in Peru. Open to senior full-stack/backend roles, architecture leadership and high-impact freelance projects."
  },
  es: {
    "left.role": "Senior Full Stack Engineer | Cloud & AI Architect",
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
      "Ingeniera de Software con más de 5 años de experiencia diseñando y construyendo soluciones Full Stack escalables en producción.",
    "about.p2":
      "Especializada en modernización de sistemas legacy, arquitecturas distribuidas, cloud computing e integración de IA con impacto real en negocio.",
    "about.f1t": "Arquitectura + Backend",
    "about.f1d": "Node.js, NestJS, Laravel, DDD/Hexagonal y servicios de alto rendimiento.",
    "about.f2t": "Cloud, Datos e IA",
    "about.f2d": "AWS/Azure, Redis, Redshift e integraciones seguras de GPT para productos empresariales.",
    "resume.title": "Resumen",
    "resume.vismaMeta": "Senior Full Stack Engineer · 2024 — Actualidad",
    "resume.visma":
      "Desarrollo de planes de acción con IA (GPT-3.5/GPT-4o-mini), optimización backend con Redis y tuning de queries, y migración analítica a Redshift.",
    "resume.interfellMeta": "Backend Engineer (Contractor) · 2025 — Actualidad",
    "resume.interfell":
      "Migración de monolito Symfony a microservicios Node.js, implementando Arquitectura Hexagonal, DDD y SDK interno de logging.",
    "resume.amgMeta": "Full Stack Developer / Technical Lead · 2021 — 2023",
    "resume.amg":
      "Lideré equipo de 10 desarrolladores, modernicé arquitectura ERP y entregué sistemas en tiempo real con WebSockets, Flutter y AWS.",
    "resume.tennisMeta": "Full Stack Developer (Freelance)",
    "resume.tennis":
      "Desarrollo end-to-end de plataforma de torneos: arquitectura, base de datos optimizada, pipeline CI/CD y despliegue productivo.",
    "resume.eduTitle": "Educación y Publicaciones",
    "resume.eduMeta": "Bachiller en Ingeniería de Software",
    "resume.edu":
      "Coautora del paper: \"Application of the Few-Shot Learning Method to GPT-3.5\" — CISCI 2024.",
    "resume.download": "Descargar CV completo",
    "projects.title": "Proyectos",
    "projects.finanzas": "Plataforma de finanzas en producción con arquitectura multi-tenant, conciliación y despliegue seguro.",
    "projects.shop": "MVP ecommerce enfocado en conversión, UX limpia y operación simple.",
    "projects.github": "Repositorios con implementaciones Full Stack, backend, cloud e IA.",
    "contact.title": "Contacto",
    "contact.body": "Basada en Perú. Disponible para roles senior full-stack/backend, liderazgo de arquitectura y colaboraciones freelance de alto impacto."
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
