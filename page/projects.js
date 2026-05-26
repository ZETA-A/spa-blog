function projects() {
    return /*html*/ `
        <section class="page-view">
            <div class="page-header page-card">
                <p class="page-kicker">${i18n.navigation.projects}</p>
                <h1 class="page-title">${i18n.pages.projectsTitle}</h1>
                <p class="page-description">${i18n.pages.projectsDescription}</p>
            </div>
            <div class="projects-container">
                <!-- Projects list can be added here -->
                <div class="projects-placeholder">Coming soon...</div>
            </div>
        </section>
    `;
}
