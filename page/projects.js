function projects() {
    return /*html*/ `
        <section class="page-view">
            <header class="project-hero">
                <p class="page-kicker">${i18n.navigation.projects}</p>
                <h1 class="page-title">${i18n.pages.projectsTitle}</h1>
                <p class="page-description">${i18n.pages.projectsDescription}</p>
            </header>
            <div class="projects-container">
                ${projectData.projects
                    .map(
                        (project) => {
                            const tagName = project.href ? 'a' : 'article';
                            const linkAttributes = project.href
                                ? `href="${project.href}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''}`
                                : '';

                            return `
                    <${tagName} class="project-card ${project.href ? 'project-card-link' : ''}" ${linkAttributes}>
                        <div class="project-meta">
                            <p class="project-status">${project.status}</p>
                            <h2 class="project-title">${project.title}</h2>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
                        </div>
                    </${tagName}>
                `;
                        },
                    )
                    .join('')}
            </div>
        </section>
    `;
}
