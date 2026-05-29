let currentLanguage = localStorage.getItem('lang') || 'koKR';
let langData = {
    koKR: i18n_koKR,
    enUS: i18n_enUS,
};

let i18n = langData[currentLanguage] || langData.koKR;

function syncLanguage(lang) {
    const nextLanguage = langData[lang] ? lang : 'koKR';

    currentLanguage = nextLanguage;
    i18n = langData[currentLanguage];
    localStorage.setItem('lang', currentLanguage);
    document.documentElement.lang = currentLanguage === 'enUS' ? 'en' : 'ko';
}

syncLanguage(currentLanguage);

/**
 * 언어 전환을 위한 코드(재렌더링 포함)
 * @param {'koKR'|'enUS'} lang 전환할 언어
 */
function changeLanguage(lang) {
    syncLanguage(lang);
    render();
}

window.changeLanguage = changeLanguage;
