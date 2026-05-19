const routes = {
    '#/': () => about(),
    '#/note': () => /*html*/ `
            <section class="hero-section page-view">
                <div class="capsule page-card">
                    <p class="page-kicker">${i18n.navigation.note}</p>
                    <h1 class="page-title">${i18n.pages.noteTitle}</h1>
                    <p class="page-description">${i18n.pages.noteDescription}</p>
                </div>
            </section>
        `,
    '#/projects': () => /*html*/ `
            <section class="hero-section page-view">
                <div class="capsule page-card">
                    <p class="page-kicker">${i18n.navigation.projects}</p>
                    <h1 class="page-title">${i18n.pages.projectsTitle}</h1>
                    <p class="page-description">${i18n.pages.projectsDescription}</p>
                </div>
            </section>
        `,
};

const notFoundRoute = () => /*html*/ `
        <section class="hero-section page-view">
            <div class="capsule page-card error-card">
                <p class="page-kicker">${i18n.pages.notFoundTitle}</p>
                <h1 class="page-title">${i18n.pages.notFoundDescription}</h1>
                <a class="page-link" href="#/">${i18n.pages.notFoundAction}</a>
            </div>
        </section>
    `;

$navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const url = e.currentTarget.getAttribute('data-link');

        if (url) {
            window.location.hash = url;
        }
    });
});
