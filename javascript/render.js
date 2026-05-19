async function render() {
    const path = window.location.hash || '#/';

    const view = routes[path] || notFoundRoute;
    const content = typeof view === 'function' ? view() : view;
    $app.innerHTML = content;

    const activeBtn = document.querySelector(`.nav-item[data-link="${path}"]`);

    $navItems.forEach((item) => item.classList.remove('active'));
    $navItems.forEach((item) => item.removeAttribute('aria-current'));

    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-current', 'page');
        moveBackdrop(activeBtn);
    } else {
        $backdrop.style.width = '0px';
    }
}

window.addEventListener('load', render);
window.addEventListener('hashchange', render);
