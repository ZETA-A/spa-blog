function notFoundView() {
    return /*html*/ `
        <section class="page-view">
            <div class="page-header page-card error-card">
                <p class="page-kicker">${i18n.pages.notFoundTitle}</p>
                <h1 class="page-title">${i18n.pages.notFoundDescription}</h1>
                <a class="page-link" href="#/">${i18n.pages.notFoundAction}</a>
            </div>
        </section>
    `;
}
