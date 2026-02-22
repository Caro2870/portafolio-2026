const translations = {
  en: {
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "CAROLINA VILLEGAS • FULL STACK ENGINEER • PERU",
    "hero.title": "Building scalable production systems with cloud and AI.",
    "hero.summary":
      "Full Stack Engineer with 5 years of experience delivering real-world digital products across backend, frontend, cloud infrastructure and AI integration.",
    "hero.ctaFinanzas": "Finanzas App",
    "hero.ctaShop": "Nails Ecommerce",
    "profile.label": "PROFILE",
    "profile.title": "Senior-leaning Full Stack Engineer",
    "profile.body": "Backend Engineering, Cloud Architecture, AI Integration, System Design.",
    "profile.statYears": "years exp",
    "profile.statRoles": "core roles",
    "profile.statLang": "english level",
    "work.eyebrow": "SELECTED WORK",
    "work.title": "Production products and platforms",
    "work.finanzas": "Personal finance platform with tenant-based access, card reconciliation and Excel imports.",
    "work.shop": "Online storefront for beauty products/services with direct conversion to WhatsApp sales.",
    "work.tenis": "End-to-end platform for tournament operations, tracking and production deployment.",
    "work.open": "Open project",
    "work.build": "Build yours",
    "exp.eyebrow": "EXPERIENCE",
    "exp.title": "Professional journey",
    "exp.visma1": "Designed serverless architecture for HR metrics processing.",
    "exp.visma2": "Integrated generative AI into enterprise production platforms.",
    "exp.visma3": "Migrated analytical workloads to Redshift and optimized performance.",
    "exp.interfell1": "Migrated Symfony monolith to Node.js microservices.",
    "exp.interfell2": "Implemented DDD + Hexagonal Architecture.",
    "exp.interfell3": "Built APIs, logging SDK and cloud integrations.",
    "exp.amg1": "Led a team of 10 developers for ERP modernization.",
    "exp.amg2": "Migrated monolith to modular architecture and real-time systems.",
    "exp.amg3": "Developed APIs, backend services and cloud infrastructure.",
    "exp.tenis1": "Designed complete architecture and full-stack implementation.",
    "exp.tenis2": "Optimized MySQL performance and CI/CD release flow.",
    "exp.tenis3": "Deployed and operates production infrastructure.",
    "skills.eyebrow": "STACK",
    "skills.title": "Tech stack",
    "ach.eyebrow": "ACHIEVEMENTS",
    "ach.title": "Impact and highlights",
    "ach.1": "Published AI research paper at CISCI 2024.",
    "ach.2": "Led engineering teams and technical initiatives.",
    "ach.3": "Designed scalable production architectures.",
    "ach.4": "Integrated AI into real business platforms.",
    "ach.5": "Migrated legacy systems to modern distributed solutions.",
    "quote.text": "\"Deliver production-ready solutions, not prototypes.\"",
    "quote.by": "Engineering philosophy",
    "contact.eyebrow": "LET'S BUILD",
    "contact.title": "Need a scalable product with strong engineering foundations?",
    "contact.body": "Available for senior full-stack, backend architecture and cloud + AI integrations."
  },
  es: {
    "nav.work": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.eyebrow": "CAROLINA VILLEGAS • INGENIERA FULL STACK • PERÚ",
    "hero.title": "Construyo sistemas escalables en producción con cloud e IA.",
    "hero.summary":
      "Ingeniera Full Stack con 5 años de experiencia entregando productos digitales reales en backend, frontend, infraestructura cloud e integración de IA.",
    "hero.ctaFinanzas": "App de Finanzas",
    "hero.ctaShop": "Ecommerce de Uñas",
    "profile.label": "PERFIL",
    "profile.title": "Full Stack Engineer con enfoque Senior",
    "profile.body": "Ingeniería Backend, Arquitectura Cloud, Integración de IA y Diseño de Sistemas.",
    "profile.statYears": "años exp",
    "profile.statRoles": "roles clave",
    "profile.statLang": "nivel inglés",
    "work.eyebrow": "PROYECTOS DESTACADOS",
    "work.title": "Productos y plataformas en producción",
    "work.finanzas": "Plataforma de finanzas con acceso por tenant, conciliación de tarjetas e importación de Excel.",
    "work.shop": "Tienda online de productos/servicios de belleza con conversión directa a ventas por WhatsApp.",
    "work.tenis": "Plataforma integral para gestión de torneos, seguimiento y despliegue en producción.",
    "work.open": "Abrir proyecto",
    "work.build": "Construir uno similar",
    "exp.eyebrow": "EXPERIENCIA",
    "exp.title": "Trayectoria profesional",
    "exp.visma1": "Diseñé arquitectura serverless para procesamiento de métricas de RRHH.",
    "exp.visma2": "Integré IA generativa en plataformas empresariales en producción.",
    "exp.visma3": "Migré cargas analíticas a Redshift y optimicé performance.",
    "exp.interfell1": "Migré monolito Symfony a microservicios en Node.js.",
    "exp.interfell2": "Implementé DDD + Arquitectura Hexagonal.",
    "exp.interfell3": "Construí APIs, SDK de logs e integraciones cloud.",
    "exp.amg1": "Lideré equipo de 10 desarrolladores en modernización de ERP.",
    "exp.amg2": "Migré monolito a arquitectura modular y sistemas en tiempo real.",
    "exp.amg3": "Desarrollé APIs, servicios backend e infraestructura cloud.",
    "exp.tenis1": "Diseñé arquitectura completa e implementación full stack.",
    "exp.tenis2": "Optimicé performance de MySQL y flujo de releases con CI/CD.",
    "exp.tenis3": "Desplegué y opero la infraestructura de producción.",
    "skills.eyebrow": "STACK",
    "skills.title": "Tecnologías",
    "ach.eyebrow": "LOGROS",
    "ach.title": "Impacto y resultados",
    "ach.1": "Publiqué investigación de IA en CISCI 2024.",
    "ach.2": "Lideré equipos de ingeniería e iniciativas técnicas.",
    "ach.3": "Diseñé arquitecturas escalables en producción.",
    "ach.4": "Integré IA en plataformas reales de negocio.",
    "ach.5": "Migré sistemas legacy a soluciones distribuidas modernas.",
    "quote.text": "\"Entregar soluciones listas para producción, no prototipos.\"",
    "quote.by": "Filosofía de ingeniería",
    "contact.eyebrow": "CONSTRUYAMOS",
    "contact.title": "¿Necesitas un producto escalable con base técnica sólida?",
    "contact.body": "Disponible para roles senior full stack, arquitectura backend e integraciones cloud + IA."
  }
};

function detectLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang === "es" || urlLang === "en") return urlLang;
  const saved = window.localStorage.getItem("portfolio_lang");
  if (saved === "es" || saved === "en") return saved;
  const navLang = String(navigator.language || "").toLowerCase();
  return navLang.startsWith("es") ? "es" : "en";
}

function setLangInUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
}

function applyLanguage(lang, options = {}) {
  const { updateUrl = false } = options;
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  window.localStorage.setItem("portfolio_lang", lang);
  if (updateUrl) {
    setLangInUrl(lang);
  }
}

function setupLanguageSwitcher() {
  const initial = detectLanguage();
  applyLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === "es" || lang === "en") {
        applyLanguage(lang, { updateUrl: true });
      }
    });
  });
}

setupLanguageSwitcher();
