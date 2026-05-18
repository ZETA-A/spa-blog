const routes = {
    '#/': () => about(),
    '#/note': () =>
        `<section class="hero-section"><h1 class="hero-title">My Notes</h1></section>`,
    '#/projects': () =>
        `<section class="hero-section"><h1 class="hero-title">Projects</h1></section>`,
};

$navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const url = e.currentTarget.getAttribute('data-link');

        if (url) {
            console.log('이동할 경로:', url); // 디버깅용
            window.location.hash = url; // 해시를 직접 변경
        }
    });
});
