async function render() {
    await fetchLanguage(currentLanguage); // 언어 데이터를 먼저 로드 # i18n 패치

    const path = window.location.hash || '#/';
    console.log('현재 경로:', path);

    const view = routes[path] || (() => '<h1>404 Not Found</h1>');
    const content = typeof view === 'function' ? view() : view;
    $app.innerHTML = content;

    const activeBtn = document.querySelector(`.nav-item[data-link="${path}"]`);

    $navItems.forEach((item) => item.classList.remove('active'));

    if (activeBtn) {
        activeBtn.classList.add('active');
        moveBackdrop(activeBtn);
    }
}

window.addEventListener('load', render);
window.addEventListener('hashchange', render);
