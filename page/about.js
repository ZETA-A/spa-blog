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
            <div class="experience-row">
                <div class="experience-item">
                    <h3 class="experience-title">Student Developer</h3>
                </div>
                <div class="experience-item">
                    <p class="experience-period">2021 - Present</p>
                </div>
                <div class="experience-item">
                    <p class="experience-description">바닐라 JS와 다양한 기술 스택으로 웹 프로젝트 개발 및 유지보수</p>
                </div>
            </div>
        </div>

    </section>
`;
