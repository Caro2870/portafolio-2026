const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

let timelineObserver = null;

function setupTimelineReveal() {
  if (timelineObserver) {
    timelineObserver.disconnect();
  }

  timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          timelineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
  );

  const activePage = document.querySelector('[data-page].active');
  if (!activePage) return;
  activePage.querySelectorAll('.timeline-item').forEach((item) => {
    item.classList.remove('in-view');
    timelineObserver.observe(item);
  });
}

navLinks.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-nav-link');
    navLinks.forEach((item) => item.classList.remove('active'));
    pages.forEach((page) => page.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`[data-page="${target}"]`)?.classList.add('active');
    setupTimelineReveal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const filterBtns = document.querySelectorAll('[data-filter-btn]');
const projectItems = document.querySelectorAll('[data-filter-item]');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterBtns.forEach((item) => item.classList.remove('active'));
    btn.classList.add('active');

    projectItems.forEach((item) => {
      const categories = item.getAttribute('data-category') || '';
      const matches = filter === 'all' || categories.includes(filter);
      item.classList.toggle('active', matches);
    });
  });
});

const themeToggle = document.getElementById('themeToggle');

function getCurrentLang() {
  return document.body.getAttribute('data-lang') === 'en' ? 'en' : 'es';
}

function themeLabel(theme, lang) {
  if (lang === 'en') return theme === 'light' ? 'Theme: Light' : 'Theme: Dark';
  return theme === 'light' ? 'Tema: Claro' : 'Tema: Oscuro';
}

function applyTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  localStorage.setItem('portfolio_theme', theme);
  if (themeToggle) {
    themeToggle.textContent = themeLabel(theme, getCurrentLang());
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  });
}

const langBtns = document.querySelectorAll('[data-lang-btn]');

function applyLang(lang) {
  const safeLang = lang === 'en' ? 'en' : 'es';
  document.body.setAttribute('data-lang', safeLang);
  document.documentElement.lang = safeLang;
  localStorage.setItem('portfolio_lang', safeLang);

  langBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === safeLang);
  });

  const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
  if (themeToggle) themeToggle.textContent = themeLabel(currentTheme, safeLang);
}

langBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLang(btn.getAttribute('data-lang-btn') || 'es');
  });
});

const storedTheme = localStorage.getItem('portfolio_theme');
applyTheme(storedTheme === 'light' ? 'light' : 'dark');

const storedLang = localStorage.getItem('portfolio_lang');
if (storedLang === 'es' || storedLang === 'en') {
  applyLang(storedLang);
} else {
  const browserLang = String(navigator.language || '').toLowerCase();
  applyLang(browserLang.startsWith('es') ? 'es' : 'en');
}

setupTimelineReveal();
