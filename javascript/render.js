function render() {
    const path = window.location.hash || '#/';
    const pathParts = path.substring(2).split('/');
    const baseRoute = '/' + pathParts[0];
    const noteId = pathParts[1];

    let route;

    if (baseRoute === '/note' && noteId) {
        const noteData = Object.values(i18n.notes).find(
            (note) => note.id === noteId,
        );
        if (noteData) {
            route = {
                view: () => renderNoteDetail(noteData),
                title: `${noteData.title} - My Notes`,
            };
        } else {
            route = notFoundRoute;
        }
    } else {
        route = routes[path] || notFoundRoute;
    }

    const content =
        typeof route.view === 'function' ? route.view() : route.view;
    $app.innerHTML = content;

    document.title = route.title || 'Seunghyeon Kim';
    window.scrollTo(0, 0);

    const activeBtn = document.querySelector(
        `.nav-item[data-link="#${baseRoute}"]`,
    );

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
