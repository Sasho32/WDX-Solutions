const flagMap = {
    en: { src: './img/uk-flag.svg', alt: 'UK flag' },
    bg: { src: './img/bg-flag.png', alt: 'Bulgarian flag' },
};

let currentLang = localStorage.getItem('lang') || 'en';
const currentPath = window.location.pathname;

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector(`[data-value='${currentLang}']`)
        .classList.add('selected');

    const flagImage = document.querySelector('li img.flag');

    if (flagMap[currentLang]) {
        flagImage.src = flagMap[currentLang].src;
        flagImage.alt = flagMap[currentLang].alt;
    }

    loadContent(currentLang);
});

Array.from(document.querySelectorAll('.lang-option')).forEach(option => {
    option.addEventListener('click', e => {
        let selectedLang = e.currentTarget.getAttribute('data-value');

        if (currentLang !== selectedLang) {
            localStorage.setItem('lang', selectedLang);
            loadContent(selectedLang);
        }
    });
});

function loadContent(lang) {
    if (!currentPath.includes(lang)) window.location.href = `/${lang}`;
}

document.addEventListener('click', e => {
    const langOptions = document.querySelector('#lang-options');

    if (e.target.closest('.bulb')) return;

    if (e.target.matches('li img.flag'))
        return langOptions.classList.toggle('opened');

    langOptions.classList.remove('opened');
});
