let currentLanguage = localStorage.getItem('lang') || 'koKR';
let langData = {
    koKR: i18n_koKR,
    enUS: i18n_enUS,
};

const i18n = langData[currentLanguage];

/**
 * 언어 전환을 위한 코드(재렌더링 포함)
 * @param {'koKR'|'enUS'} lang 전환할 언어
 */
async function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    await render();
}
