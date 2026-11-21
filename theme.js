const savedTheme = localStorage.getItem('theme');
const themeToggle = document.querySelector('.theme-toggle');

if (savedTheme === 'light') {
  document.documentElement.dataset.theme = 'light';
}

function updateThemeToggle() {
  const isLight = document.documentElement.dataset.theme === 'light';
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
  themeToggle.setAttribute('title', `Switch to ${isLight ? 'dark' : 'light'} mode`);
}

updateThemeToggle();

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.dataset.theme === 'light';

  if (isLight) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  }

  updateThemeToggle();
});
