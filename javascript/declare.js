const $backdrop = document.querySelector('.nav-backdrop');
const $navItems = document.querySelectorAll('.nav-item');
const $app = document.querySelector('#app');
let weatherAPI = null;
let weatherLoading = true;

window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.nav-item.active');
    if (activeBtn) {
        moveBackdrop(activeBtn);
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    weatherAPI = await fetchWeather();
    weatherLoading = false;
    render();
});
