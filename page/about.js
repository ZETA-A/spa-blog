const about = () => /*html*/ `
    <section class="hero-section">
        <div class="capsule profile-card">
            <img src="./assets/profile.png" alt="Profile Image" class="profile-image"/>
            <div class="profile-content">
                <blockquote class="profile-quote">
                    <p class="profile-description">${i18n.profile.blockquoteDescription}</p>
                </blockquote>
                <p class="profile-name">${i18n.profile.blockquoteCite}</p>
            </div>
        </div>
        <div id="github-card" class="capsule">
            <img src="./assets/githubIcon.svg" alt="GitHub Logo" class="github-logo nodrag"/>
        </div>
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
    </section>
`;
