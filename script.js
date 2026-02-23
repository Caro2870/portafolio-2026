const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-nav-link');
    navLinks.forEach((item) => item.classList.remove('active'));
    pages.forEach((page) => page.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`[data-page="${target}"]`)?.classList.add('active');
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

function applyTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  localStorage.setItem('portfolio_theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? 'Theme: Light' : 'Theme: Dark';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  });
}

const storedTheme = localStorage.getItem('portfolio_theme');
if (storedTheme === 'light' || storedTheme === 'dark') {
  applyTheme(storedTheme);
} else {
  applyTheme('dark');
}
