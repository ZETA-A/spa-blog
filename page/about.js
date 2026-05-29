const about = () => /*html*/ `
    <section class="hero-section">
        <!-- Profile Card -->
        <div class="capsule profile-card">
            <img src="./assets/profile.png" alt="Profile Image" class="profile-image" loading="lazy"/>
            <div class="profile-content">
                <blockquote class="profile-quote">
                    <p class="profile-description">${i18n.profile.blockquoteDescription}</p>
                </blockquote>
                <p class="profile-name">${i18n.profile.blockquoteCite}</p>
            </div>
        </div>

        <!-- GitHub Card -->
        <a id="github-card" class="capsule" href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="${i18n.profile.githubLabel}">
            <img src="./assets/githubIcon.svg" alt="GitHub Logo" class="github-logo nodrag" loading="lazy"/>
        </a>

        <!-- Weather Card -->
        <div class="capsule weather-card ${weatherLoading ? 'is-loading' : ''}" aria-live="polite" aria-busy="${weatherLoading ? 'true' : 'false'}">
            <div class="weather-info">
                <p class="weather-location">${i18n.profile.weatherLocation}</p>
                <p class="weather-temp">
                    ${weatherLoading ? i18n.profile.weatherLoading : weatherAPI ? weatherAPI.temp : i18n.profile.weatherUnavailable}
                </p>
            </div>
            <div class="weather-emoji-container">
                <p class="weather-emoji">${weatherLoading ? '⏳' : weatherAPI ? weatherAPI.emoji : '🚫'}</p>
            </div>
        </div>

        <!-- Skills Card -->
        <div class="capsule skills-card about-section">
            <h2 class="section-title">${i18n.profile.skillsTitle}</h2>
            <div class="skills-row">
                <div class="skill-item">
                    <span class="skill-badge">Frontend</span>
                    <p class="skill-text">React, Next.js, TypeScript, Tailwind CSS, etc.</p>
                </div>
                <div class="skill-item">
                    <span class="skill-badge">Backend</span>
                    <p class="skill-text">Node.js, Express, Python, SQL, MongoDB, etc.</p>
                </div>
            </div>
        </div>

        <!-- Experience Card -->
        <div class="capsule experience-card about-section">
            <h2 class="section-title">${i18n.profile.experienceTitle}</h2>
            <div class="experience-list">
                <article class="experience-item">
                    <div class="experience-heading">
                        <h3 class="experience-title">Student Developer</h3>
                        <p class="experience-period">2021 - Present</p>
                    </div>
                    <p class="experience-description">바닐라 JS와 다양한 기술 스택으로 웹 프로젝트 개발 및 유지보수</p>
                </article>

                <article class="experience-item">
                    <div class="experience-heading">
                        <h3 class="experience-title">Army</h3>
                        <p class="experience-period">2023 - 2024</p>
                    </div>
                    <p class="experience-description">9사단 포병여단 제30포병대대 본부포대 통신가설병 병장 만기전역</p>
                </article>
            </div>
        </div>

        <!-- Spotify Card -->
        <a id="spotify-card" class="capsule track-card" href="${aboutData.favoriteTrack.href}" target="_blank" rel="noopener noreferrer" aria-label="${i18n.profile.spotifyLabel}: ${aboutData.favoriteTrack.title}" style="--track-bg: ${aboutData.favoriteTrack.background};">
            <span class="track-card-kicker">Favorite Song</span>
            <span class="track-card-body">
                <span class="track-card-title">${aboutData.favoriteTrack.title}</span>
                <span class="track-card-artist">${aboutData.favoriteTrack.artist}</span>
            </span>
            <span class="track-card-mark" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </a>

        <!-- My Gear Modal Card -->
        <button class="capsule gear-card" type="button" aria-label="${i18n.profile.gearLabel}" onclick="document.querySelector('.gear-modal').showModal()">
            <span class="gear-card-kicker">My Gear</span>
            <span class="gear-card-icon" aria-hidden="true">⌘</span>
            <span class="gear-card-text">Desk setup</span>
        </button>

        <dialog class="gear-modal">
            <div class="gear-modal-panel">
                <div class="gear-modal-header">
                    <div>
                        <p class="gear-modal-kicker">Desk Setup</p>
                        <h2>My Gear</h2>
                    </div>
                    <button class="gear-modal-close" type="button" aria-label="${i18n.profile.gearCloseLabel}" onclick="this.closest('dialog').close()">×</button>
                </div>
                <div class="gear-grid">
                    ${aboutData.gearItems
                        .map(
                            (item) => `
                        <article class="gear-item">
                            <span class="gear-item-label">${item.category}</span>
                            <strong>${item.name}</strong>
                            <span class="gear-item-detail">${item.detail}</span>
                        </article>
                    `,
                        )
                        .join('')}
                </div>
            </div>
        </dialog>


    </section>
`;
