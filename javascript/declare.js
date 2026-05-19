const $backdrop = document.querySelector('.nav-backdrop');
const $navItems = document.querySelectorAll('.nav-item');
const $app = document.querySelector('#app');
let weatherAPI = {};
window.addEventListener('DOMContentLoaded', async () => {
    weatherAPI = await fetchWeather();
});
