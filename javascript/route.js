const routes = {
    '#/': { view: () => about(), title: 'Seunghyeon Kim - About' },
    '#/note': {
        view: () => renderNotesList(),
        title: 'My Notes',
    },
    '#/projects': {
        view: () => projects(),
        title: 'Projects',
    },
};

// Note views moved to /page/notes.js

const notFoundRoute = {
    view: () => notFoundView(),
    title: '404 - Page Not Found',
};

$navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const url = e.currentTarget.getAttribute('data-link');

        if (url) {
            window.location.hash = url;
        }
    });
});

$themeToggle?.addEventListener('click', toggleTheme);

$scrollToTop?.addEventListener('click', scrollToTop);

$langBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        $langBtns.forEach((b) => b.classList.remove('active'));
        e.target.classList.add('active');
        switchLanguage(e.target.getAttribute('data-lang'));
    });
    if (btn.getAttribute('data-lang') === currentLanguage) {
        btn.classList.add('active');
    }
});
