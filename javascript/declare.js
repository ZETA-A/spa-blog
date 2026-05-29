const $backdrop = document.querySelector('.nav-backdrop');
const $navItems = document.querySelectorAll('.nav-item');
const $app = document.querySelector('#app');
const $themeToggle = document.querySelector('.theme-toggle');
const $scrollToTop = document.querySelector('.scroll-to-top');
const $langBtns = document.querySelectorAll('.lang-btn');
const $navTexts = document.querySelectorAll('[data-i18n]');
const $html = document.documentElement;

let weatherAPI = null;
let weatherLoading = true;
let currentTheme = localStorage.getItem('theme') || 'light';

function initTheme() {
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
    ).matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        currentTheme = savedTheme;
        $html.setAttribute('data-theme', currentTheme);
    } else if (prefersDark) {
        currentTheme = 'dark';
        $html.setAttribute('data-theme', 'dark');
    }

    updateThemeIcon();
}

function updateThemeIcon() {
    if (currentTheme === 'dark') {
        $themeToggle.querySelector('.theme-icon').textContent = '☀️';
    } else {
        $themeToggle.querySelector('.theme-icon').textContent = '🌙';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    $html.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    i18n = langData[currentLanguage];
    localStorage.setItem('lang', currentLanguage);
    document.documentElement.lang = currentLanguage === 'enUS' ? 'en' : 'ko';
    updateNavTexts();
    render();
}

function updateNavTexts() {
    $navTexts.forEach((el) => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = i18n;
        for (const key of keys) {
            value = value[key];
        }
        el.textContent = value;
    });
}

window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.nav-item.active');
    if (activeBtn) {
        moveBackdrop(activeBtn);
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    weatherAPI = await fetchWeather();
    weatherLoading = false;
    render();
});
